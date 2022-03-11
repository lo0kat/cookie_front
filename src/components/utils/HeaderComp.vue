<template>
<MenuBar :model="items">
    <template #start>
        <img src="@/assets/images/cookieLogo.png" width="100">   
    </template>
     <template #end>
         <Shopping  />
        
    </template>
</MenuBar>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Shopping from '@/components/cookies/Shopping.vue'
@Options({
      components: {
    Shopping
  },
  data() {
		return {
      active:3,
      items: [
                {
                    label: 'Accueil',
                    icon: 'pi pi-fw pi-home',
                    to: '/'
                },
                {
                    label: 'Cookies',
                    icon: 'pi pi-fw pi-circle-on',
                    to: '/cookies'
                },
                {
                    label: 'Connexion',
                    icon: 'pi pi-fw pi-user',
                    to: '/login'
                }
            ]
		}
	},
    computed: {
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.StoreCart.length; 
    }
    }
})
export default class HeaderComp extends Vue {}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
