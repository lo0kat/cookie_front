<template>
<div class ="flex justify-content-center"> 
      <CardComp style="width: 25em">
         <template #header>
                <img src="@/assets/images/cookiePepites.jpeg" style="height: 15rem" />
            </template>
            <template #title>
                Cookie au chocolat
            </template>
            <template #subtitle>
                En Stock
            </template>
            <template #content>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </template>
            <template #footer>
                <ButtonComp icon="pi pi-check" label="Save" />
                <ButtonComp icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
            </template>
      </CardComp>
      
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
    count:Number, 
  },
  data() {
    return {
      count  : 0
    };
  },
})
export default class About extends Vue {}
</script>


<style scoped>

</style>