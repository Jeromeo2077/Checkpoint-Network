import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Profile } from "@/models/Profile.js"


class ProfilesService {

async getProfileById(profileId){  
AppState.activeProfile = null  
const response = await api.get(`api/profiles/${profileId}`)
const newProfile = new Profile(response.data)
AppState.activeProfile = newProfile
}

}

export const profileService = new ProfilesService()