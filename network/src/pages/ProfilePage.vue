<script setup>
import { AppState } from '@/AppState.js';
import { accountService } from '@/services/AccountService.js';
import { adsService } from '@/services/AdsService.js';
import { postsService } from '@/services/PostsService.js';
import { profileService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const profile = computed(() => AppState.activeProfile)
const ads = computed(() => AppState.ads)
const posts = computed(() => AppState.posts)
const account = computed(() => AppState.account)

const editableAccountData = ref({
  email: '',
  name: '',
  picture: '',
  bio: '',
  coverImg: '',
  github: '',
  linkedin: '',
  resume: '',
  class: '',
  graduated: false
})

onMounted(() => {
  editableAccountData.value = { ...AppState.activeProfile }
})

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

async function updateAccount() {
  try {
    await accountService.updateAccount(editableAccountData.value)
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
        <p>Graduated: {{ profile.graduated ? 'Yes' : 'No' }}</p>
        <p class="m-3 mb-1 text-decoration-underline">Social Media</p>
        <a class="m-3" :href="profile.github">GitHub</a>
        <a class="m-3" :href="profile.linkedin">LinkedIn</a>
      </div>
      <div>

      </div>
      <h3 class="mt-3 mb-3">Profile Update Form</h3>
      <form v-if="account.id == profile?.id" @submit.prevent="updateAccount()">
        <div>
          <input v-model="editableAccountData.email" type="text" name="accountEmail" id="accountEmail"
            class="form-control-sm mx-3" maxlength="500" placeholder="Email...">
        </div>
        <div class="mb-3">
          <input v-model="editableAccountData.name" type="text" name="accountName" id="accountName"
            class="form-control-sm mx-3" maxlength="100" placeholder="Name...">
        </div>
        <div class="mb-3">
          <input v-model="editableAccountData.picture" type="url" name="accountPicture" id="accountPicture"
            class="form-control-sm mx-3" maxlength="500" placeholder="Profile Picture URL...">
        </div>
        <div class="mb-3">
          <textarea v-model="editableAccountData.bio" name="accountBio" id="accountBio" class="form-control-sm mx-3"
            maxlength="1000" placeholder="Biography..."></textarea>
        </div>
        <div class="mb-3">
          <input v-model="editableAccountData.coverImg" type="url" name="accountCoverImg" id="accountCoverImg"
            class="form-control-sm mx-3" maxlength="500" placeholder="Cover Image URL..."
            default="https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80">
        </div>
        <div class="mb-3">
          <input v-model="editableAccountData.github" type="url" name="accountGithub" id="accountGithub"
            class="form-control-sm mx-3" maxlength="500" placeholder="Github URL...">
        </div>
        <div class="mb-3">
          <input v-model="editableAccountData.linkedin" type="url" name="accountLinkedin" id="accountLinkedin"
            class="form-control-sm mx-3" maxlength="500" placeholder="LinkedIn URL...">
        </div>
        <div class="mb-3">
          <input v-model="editableAccountData.resume" type="url" name="accountResume" id="accountResume"
            class="form-control-sm mx-3" maxlength="500" placeholder="Resume URL...">
        </div>
        <div class="mb-3">
          <input v-model="editableAccountData.class" type="text" name="accountClass" id="accountClass"
            class="form-control-sm mx-3" maxlength="100" placeholder="Graduating Class">
        </div>
        <div class="mb-3">
          <label for="accountGraduated" class="form-label me-3">Have You Graduated?</label>
          <input v-model="editableAccountData.graduated" type="checkbox" name="accountGraduated" id="accountGraduated">
        </div>
        <div>
          <button class="btn btn-primary" type="submit">Save Changes</button>
        </div>
      </form>


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