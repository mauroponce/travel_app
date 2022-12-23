import axios from "axios";
const BASE_URL = `http://localhost:4000/api/v1/trips`;

export function getTrips() {
  return axios.get(`${BASE_URL}.json`);
}

export function getTrip(id) {
  return axios.get(`${BASE_URL}/${id}.json`);
}

export function createTrip(trip) {
  return axios.post(`${BASE_URL}.json`, { trip });
}

