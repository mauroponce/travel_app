json.extract! trip, :id, :name, :from_date, :to_date, :total_spent, :created_at
json.url api_v1_trip_url(trip, format: :json)
