<template>
    <CardComp class="m-5 scalein animation-duration-1000 ">
      <template #header>
                <img src="@/assets/images/pyrenees.jpg" class=" md:max-h-0">           
      </template>
      <template #title>
        <h1>
        COOKIE ADARA
        </h1>
      </template>
      <template #content>
          <div>
        Découvrez nos cookies fabriqués grâce à la production locale du Béarn !
        </div>
      </template>
    </CardComp>
       <div class="flex align-items-center justify-content-center p-4">
                    <ButtonComp label="Découvrir nos cookies" icon="pi pi-fw pi-circle-on" @click="$router.push('cookies')" class="scalein animation-duration-1000"></ButtonComp>
                </div>
  <div class="flex justify-content-evenly flex-wrap ">
 
    <h2 class="scalein animation-duration-300">
    Ingrédients de qualité<i class="pi pi-check p-2 " style="font-size: 1rem"></i>
    </h2>
  
    <h2 class="scalein animation-duration-600">
    0 Conservateurs<i class="pi pi-times p-2" style="font-size: 1rem"></i>      
    </h2>

   <h2 class="scalein animation-duration-1000">
    Cookies Frais <i class="pi pi-heart-fill p-2" style="font-size: 1rem"></i> 
   </h2>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
