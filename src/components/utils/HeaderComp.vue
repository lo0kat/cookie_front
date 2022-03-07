<template>
<MenuBar :model="items">
    <template #start>
        <img src="@/assets/images/cookieLogo.png" width="100">   
    </template>
     <template #end>
        <img src="@/assets/images/cookieAdaraText.png" width="90">   
    </template>
</MenuBar>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
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
	}
})
export default class HeaderComp extends Vue {}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
