<template>
<div class="flex justify-content-evenly" >
  <Cookie class = "flex align-items-center flex-wrap  w-15rem m-2 "
      v-for="cookie  in  cookies"
      :key="cookie._id"
      :_id="cookie._id"
      :name="cookie.name"
      :picUrl="cookie.picUrl"
      :price="cookie.price"
      :ingredients="cookie.ingredients"
      :steps="cookie.steps"
    />
</div>                     
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Cookie from '@/components/cookies/Cookie.vue'
import Shopping from '@/components/cookies/Shopping.vue'
@Options({
  components: {
    Cookie,
    Shopping
  },

  computed: {
      cookies() {
        return this.$store.getters.cookies;
      }
    },

})
export default class CookiesList extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
