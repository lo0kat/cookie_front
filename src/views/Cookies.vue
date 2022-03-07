<template>
  <div class="cookies">
    <CookiesList msg="Init project"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CookiesList from '@/components/cookies/CookiesList.vue';

@Options({
  components: {
    CookiesList,
  },
})
export default class Cookies extends Vue {}
</script>
