<script setup>
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { ref } from 'vue';



const editablePostFormData = ref({
  body: '',
  imgUrl: '',
})

async function createPost() {
  try {
    const postData = editablePostFormData.value
    await postsService.createPost(postData)
    editablePostFormData.value = {
      body: '',
      imgUrl: '',
    }

  }
  catch (error) {
    Pop.meow(error)
    logger.error(error)
  }
}
</script>


<template>
  <div class="container">
    <div class="section">

      <form @submit.prevent="createPost()">
        <div class="mb-3">
          <label class="form-label" for="post-body">Post Body</label>
          <input v-model="editablePostFormData.body" class="form-control" id="post-body" name="post-body" type="text"
            required maxlength="5000" placeholder="Enter the body of your post here (limit 5000 characters)...">
        </div>
        <div class="mb-3">
          <label class="form-label" for="imgUrl">Optional Image URL</label>
          <input v-model="editablePostFormData.imgUrl" class="form-control" id="imgUrl" name="imgUrl" type="url"
            maxlength="500" placeholder="Optional Image URL...">
        </div>
        <div class="text-end">
          <button class="btn btn-success" type="submit">Submit</button>
        </div>
      </form>

    </div>
  </div>
</template>


<style lang="scss" scoped></style>