<script setup>
import { Post } from '@/models/Post.js';


defineProps({
  postProp: { type: Post, required: true }
})
</script>


<template>
  <div class="card box-shadow  m-3">
    <h5 class="card-name">{{ postProp.creator.name }}</h5>
    <h6>Last Activity: {{ postProp.createdAt.toLocaleDateString() }} {{ postProp.createdAt.toLocaleTimeString() }}</h6>
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
  background-color: lightblue;
  box-shadow: 5px 5px 0px 0px black;
}
</style>