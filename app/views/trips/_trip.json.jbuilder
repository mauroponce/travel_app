json.extract! trip, :id, :name, :from_date, :to_date, :total_spent, :created_at, :updated_at
json.url trip_url(trip, format: :json)
