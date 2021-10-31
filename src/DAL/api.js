import axios from "axios";



const apiInstance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "c37c9f30-aa36-4862-924a-b0718f3e4b84"
  }
})


export const profileApi = {
  async getProfile(userId) {
    return apiInstance.get(`profile/${userId}`)
  }
}