import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { AppState } from "@/AppState.js"

class PostsService {

 async searchPosts(postQuery) {
  const response = await api.get(`/api/posts?query=${postQuery}`)
  logger.log(response.data)
  const newPosts = response.data.posts.map(postPojo => new Post(postPojo))
  AppState.posts = newPosts
  }

 async toggleLike(postId) {
   const response = await api.post(`api/posts/${postId}/like`)
   return response.data
  }

 async deletePost(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    logger.log('Deleted Post', response.data)
    const postIndex = AppState.posts.findIndex(post => post.id == postId)
    AppState.posts.splice(postIndex, 1)
  }
 async createPost(postData) {
   const response = await api.post('api/posts', postData)
   const newPost = new Post(response.data)
   AppState.posts.unshift(newPost)
  }

 async getPostsByProfileId(profileId) {
 AppState.posts = []
 const response = await api.get(`api/posts?creatorId=${profileId}`)
 logger.log(response.data)

 const newPosts = response.data.posts.map(postPojo => new Post(postPojo))
 AppState.posts = newPosts
  }

  async getAllPosts() {
  const response = await api.get('api/posts')
  logger.log(response.data)

  const newPosts = response.data.posts.map(postPojo => new Post(postPojo))
  AppState.posts = newPosts
  }
}

export const postsService = new PostsService()