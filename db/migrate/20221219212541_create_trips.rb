class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.datetime :from_date
      t.datetime :to_date
      t.float :total_spent

      t.timestamps
    end
  end
end
