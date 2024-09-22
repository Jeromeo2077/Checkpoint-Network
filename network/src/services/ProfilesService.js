import { AppState } from "@/AppState.js"
import { Account } from "@/models/Account.js"
import { api } from "./AxiosService.js"


class ProfilesService {

async getProfileById(profileId){  
AppState.activeProfile = null  
const response = await api.get(`api/profiles/${profileId}`)
const newProfile = new Account(response.data)
AppState.activeProfile = newProfile
}

}

export const profileService = new ProfilesService()