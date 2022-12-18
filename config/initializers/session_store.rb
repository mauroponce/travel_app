if Rails.env == 'production'
  Rails.application.config.session_store :cookie_store, key: "_travel_app", domain: 'mydomain.herokuapp.com'
else
  Rails.application.config.session_store :cookie_store, key: "_travel_app"
end