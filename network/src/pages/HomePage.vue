<script setup>
import { computed, onMounted } from 'vue';
import Pop from '@/utils/Pop.js';
import { logger } from '@/utils/Logger.js';
import { postsService } from '@/services/PostsService.js';
import { AppState } from '@/AppState.js';
import PostCard from '@/components/globals/PostCard.vue';
import { adsService } from '@/services/AdsService.js';

const posts = computed(() => AppState.posts)

onMounted(() => {
  getAllPosts()
})

onMounted(() => {
  getAds()
})

async function getAds() {
  try {
    await adsService.getAds()
  }
  catch (error) {
    Pop.meow(error);
    logger.error(error)
  }
}


async function getAllPosts() {
  try {
    await postsService.getAllPosts()
  }
  catch (error) {
    Pop.meow(error);
    logger.error(error)
  }
}
</script>

<template>
  <div class="container">
    <section class="row">
      <h1 class="m-3">Recent Posts</h1>
      <div class="col-10" v-for="post in posts" :key="post.id">
        <PostCard :postProp="post" />
      </div>
      <!-- <div class="col-2" v-for="ad in ads" :key="ad.id"> -->
      <!-- <AdCard :adProp="ad" /> -->
      <!-- </div> -->
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
