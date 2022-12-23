import axios from "axios";
const BASE_URL = `http://localhost:4000/api/v1/`;

export function getTrips() {
  return axios.get(`${BASE_URL}/trips.json`);
}

export function getTrip(id) {
  return axios.get(`${BASE_URL}/trips/${id}.json`);
}

