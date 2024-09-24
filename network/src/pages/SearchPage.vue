<script setup>
import { AppState } from '@/AppState.js';
import { adsService } from '@/services/AdsService.js';
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';

const posts = computed(() => AppState.posts)
const ads = computed(() => AppState.ads)

const query = ref('')

onMounted(() => {
  getAds()
})

async function searchPosts() {
  try {
    await postsService.searchPosts(query.value)
  }
  catch (error) {
    Pop.meow(error)
    logger.log(error)
  }
}

async function getAds() {
  try {
    await adsService.getAds()
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
      <div class="col-12">
        <form @submit.prevent="searchPosts()" class="m-3 p-3">
          <div class="mb-3">
            <input v-model="query" type="search" class="form-control" id="search" aria-describedby="search"
              placeholder="Enter search term here...">
          </div>
          <button type="submit" class="btn btn-primary m-3">Search Posts</button>
        </form>
        <div class="col-md-12" v-for="post in posts" :key="post.id">
          <PostCard :postProp="post" />
        </div>
        <div class="col-md-12" v-for="ad in ads" :key="ad.title">
          <AdCard :adProp="ad" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>