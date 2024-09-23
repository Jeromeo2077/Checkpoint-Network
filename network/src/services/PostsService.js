import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { AppState } from "@/AppState.js"

class PostsService {

 async getPostsByProfileId(profileId) {
 AppState.posts = []
 const response = await api.get(`api/posts?creatorId=${profileId}`)
 logger.log(response.data)
  }

  async getAllPosts() {
  const response = await api.get('api/posts')
  logger.log(response.data)

  const newPosts = response.data.posts.map(postPojo => new Post(postPojo))
  AppState.posts = newPosts
  }
}

export const postsService = new PostsService()