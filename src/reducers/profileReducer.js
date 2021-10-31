import { profileApi } from './../DAL/api';



const initialState = {
  profile: null,
  status: null
}

const SET_PROFILE = "SET_PROFILE"
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS"


const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PROFILE:
      return {
        ...state,
        profile: {...action.profile}
      }
    case SET_PROFILE_STATUS:
      return{
        ...state,
        status: action.status
      }
    default: return state
  }
}

export const setProfileData = (profile) => ({type: SET_PROFILE, profile}) 
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})

export const setProfile = (userId) => async(dispatch) => {
    const profile = await profileApi.getProfile(userId)
    dispatch(setProfileData(profile.data))
}

export default profileReducer