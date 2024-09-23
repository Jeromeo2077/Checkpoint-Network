<script setup>
import { AppState } from '@/AppState.js';
import { adsService } from '@/services/AdsService.js';
import { postsService } from '@/services/PostsService.js';
import { profileService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const profile = computed(() => AppState.activeProfile)
const ads = computed(() => AppState.ads)
const posts = computed(() => AppState.posts)

onMounted(() => {
  getAds()
})

watch(() => route.params.profileId, () => {
  getProfileById()
  getPostsByProfileId()
}, { immediate: true })


async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profileService.getProfileById(profileId)
  }
  catch (error) {
    Pop.meow(error)
    logger.error(error)
  }
}

async function getPostsByProfileId() {
  try {
    const profileId = route.params.profileId
    await postsService.getPostsByProfileId(profileId)
  }
  catch (error) {
    Pop.meow(error)
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

</script>


<template>
  <div v-if="profile" class="container">
    <section class="row">
      <div class="col-12">
        <img class="profile-cover-img img-fluid" :src="profile.coverImg" :alt="`${profile.name}'s cover image`">
      </div>
      <div class="d-flex justify-content-between m-3">
        <h1 class="m-2"> {{ profile.name }}</h1>
        <img class="profile-img m-2" :src="profile.picture" :alt="`${profile.name}'s image`">
      </div>
      <div class="m-3">
        Bio: {{ profile.bio }}
      </div>
      <div class="m-3">
        <p>Class: {{ profile.class }}</p>
        <p>Graduated: {{ profile.graduated }}</p>
      </div>
      <div>
        <p class="m-3 mb-1 text-decoration-underline">Social Media</p>
        <a class="mx-3" :href="profile.github">GitHub</a>
        <a class="mx-3" :href="profile.linkedin">LinkedIn</a>
      </div>
      <h1 class="m-3">Recent Posts</h1>
      <div class="col-md-12" v-for="post in posts" :key="post.id">
        <PostCard :postProp="post" />
      </div>
      <div class="col-md-12 mt-3" v-for="ad in ads" :key="ad.title">
        <AdCard :adProp="ad" />
      </div>

    </section>
  </div>
</template>


<style lang="scss" scoped>
.profile-cover-img {
  height: 30dvh;
  width: 100%;
  background-size: cover;
  object-fit: cover;
  object-position: center;
}

.profile-img {
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>