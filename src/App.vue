<template>
<div>
  <HeaderComp/>
  <br>
  <router-view/>
  <FooterComp/>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderComp from '@/components/utils/HeaderComp.vue'; // @ is an alias to /src
import FooterComp from '@/components/utils/FooterComp.vue'
@Options({
  components: {
    HeaderComp,
    FooterComp,
  },
})
export default class App extends Vue {}
</script>


<style>
  body {
      margin: 0;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: rgb(0, 0, 0);
      font-family: var(--font-family);
      font-weight: 400;
      color: var(--text-color);
   }
</style>
