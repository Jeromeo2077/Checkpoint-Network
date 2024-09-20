import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Ad } from "@/models/Ad.js"

class AdsService {
  async getAds() {
    const response = await api.get('api/ads')
    logger.log(response.data)
    const newAds = response.data.map(adPojo => new Ad(adPojo))
    AppState.ads = newAds
  }

}

export const adsService = new AdsService()