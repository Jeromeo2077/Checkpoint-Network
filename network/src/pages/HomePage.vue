<script setup>
import { computed, onMounted } from 'vue';
import Pop from '@/utils/Pop.js';
import { logger } from '@/utils/Logger.js';
import { postsService } from '@/services/PostsService.js';
import { AppState } from '@/AppState.js';
import PostCard from '@/components/globals/PostCard.vue';

const posts = computed(() => AppState.posts)

onMounted(() => {
  getAllPosts()
})


async function getAllPosts() {
  try {
    await postsService.getAllPosts()
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}
</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-10" v-for="post in posts" :key="post.id">
        <PostCard :postProp="post" />
      </div>
      <div class="col-2" v-for="post in posts" :key="post.id">
        <!-- <PostCard :postProp="post" /> -->
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
