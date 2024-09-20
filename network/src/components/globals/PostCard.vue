<script setup>
import { Post } from '@/models/Post.js';


defineProps({
  postProp: { type: Post, required: true }
})
</script>


<template>
  <H1>{{ postProp.body }}</H1>

</template>


<style lang="scss" scoped></style>