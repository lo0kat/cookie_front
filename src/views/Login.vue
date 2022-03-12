<template>
  <div>
    <SignIn/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SignIn from '@/components/connexion/SignIn.vue'; // @ is an alias to /src
import SignUp from '@/components/connexion/SignUp.vue';
@Options({
  components: {
    SignIn,
    SignUp
  },
})
export default class Login extends Vue {}
</script>
