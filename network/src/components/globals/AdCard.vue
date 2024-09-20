<script setup>
import { Ad } from '@/models/Ad.js';


defineProps({
  adProp: { type: Ad, required: true }
})

</script>


<template>
  <img class="m-3" :src="adProp.banner" :alt="adProp.title">
</template>


<style lang="scss" scoped></style>