<script setup>
import { computed, onMounted } from 'vue';
import Pop from '@/utils/Pop.js';
import { logger } from '@/utils/Logger.js';
import { postsService } from '@/services/PostsService.js';
import { AppState } from '@/AppState.js';
import PostCard from '@/components/globals/PostCard.vue';
import { adsService } from '@/services/AdsService.js';
import { accountService } from '@/services/AccountService.js';
import NewPostForm from '@/components/globals/NewPostForm.vue';

const posts = computed(() => AppState.posts)
const ads = computed(() => AppState.ads)
const account = computed(() => AppState.account)

onMounted(() => {
  getAllPosts()
})

onMounted(() => {
  getAds()
})

onMounted(() => {
  getAccount()
})

async function getAccount() {
  try {
    await accountService.getAccount
  }
  catch (error) {
    Pop.meow(error);
    logger.error(error)
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
    <div v-if="account" class="col-12">
      <h1 class="m-3">Create New Post</h1>
      <NewPostForm />
    </div>
    <h1 class="m-3">Recent Posts</h1>
    <div class="col-md-12" v-for="post in posts" :key="post.id">
      <PostCard :postProp="post" />
    </div>
    <div class="col-md-12" v-for="ad in ads" :key="ad.title">
      <AdCard :adProp="ad" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
