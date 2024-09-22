<script setup>
import { AppState } from '@/AppState.js';
import { profileService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const profile = computed(() => AppState.activeProfile)

watch(() => route.params.profileId, () => {
  getProfileById()
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

</script>


<template>
  {{ profile }}
  <h1>Profile Page</h1>
</template>


<style lang="scss" scoped></style>