class Api::V1::TripsController < ApplicationController
  before_action :set_trip, only: %i[ show edit update destroy ]

  def index
    @trips = Trip.all
    respond_to do |format|
      format.json
    end
  end

  def show
    respond_to do |format|
      format.json { render json: @trip, status: :ok }
    end
  end

  def new
    @trip = Trip.new
  end

  def edit
  end

  def create
    @trip = Trip.new(trip_params)

    respond_to do |format|
      if @trip.save
        format.json { render :show, status: :created, location: @trip }
      else
        format.json { render json: @trip.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @trip.update(trip_params)
        format.json { render :show, status: :ok, location: @trip }
      else
        format.json { render json: @trip.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @trip.destroy

    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trip
      @trip = Trip.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def trip_params
      params.require(:trip).permit(:name, :from_date, :to_date, :total_spent)
    end
end
