import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Profile } from "@/models/Profile.js"
import { logger } from "@/utils/Logger.js"


class ProfilesService {

async getProfileById(profileId){  
AppState.activeProfile = null  
const response = await api.get(`api/profiles/${profileId}`)
const newProfile = new Profile(response.data)
logger.log(newProfile)
AppState.activeProfile = newProfile
}

}

export const profileService = new ProfilesService()