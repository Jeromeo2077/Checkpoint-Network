<script setup>
import { Post } from '@/models/Post.js';
import { useRoute } from 'vue-router';

const route = useRoute()

defineProps({
  postProp: { type: Post, required: true }
})

</script>


<template>
  <div class="card box-shadow  m-3">
    <div class="d-flex justify-content-between">
      <h5 class="card-name m-2"> {{ postProp.creator.name }}</h5>
      <router-link v-if="route.name == 'Home'"
        :to="{ name: 'ProfileDetails', params: { profileId: postProp.creatorId } }"
        :title="`Visit ${postProp.creator.name}'s Profile Page!`" target="_blank">
        <img class="profile-img m-2" :src="postProp.creator.picture" :alt="`${postProp.creator.name}'s image`">
      </router-link>
    </div>
    <div class="d-flex">
      <h6 class="mb-3">Last Activity: {{ postProp.createdAt.toLocaleDateString() }} {{
        postProp.createdAt.toLocaleTimeString() }}</h6>
      <i class="mdi mdi-heart-outline mx-3">{{ postProp.likes.length }}</i>

    </div>
    <p class="card-text">{{ postProp.body.slice(0, 300) }}</p>
    <div class="card-body">
      <img :src="postProp.imgUrl" class="card-img-top img-fluid rounded post-card-img" :alt="postProp.body">
    </div>
  </div>

</template>


<style lang="scss" scoped>
.post-card-img {
  height: 400px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1;
}

.card {
  background-color: #066ac9a3;
  box-shadow: 5px 5px 5px 0px black;
}

.profile-img {
  height: 10dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>