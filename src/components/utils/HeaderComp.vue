<template>
<TabMenu :model="items" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  data() {
		return {
      active:3,
      items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    to: '/'
                },
                {
                    label: 'Cookies',
                    icon: 'pi pi-fw pi-circle-on',
                    to: '/cookies'
                },
                {
                    label: 'Login',
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
