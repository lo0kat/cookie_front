<template>
  <ToastComp position="bottom-right"/>
   <CardComp style="width: 18em">
            <template #header>
                <img :src="picUrl" >           
            </template>
            <template #title>
                {{name}}
            </template>
            <template #content>
              <div v-for="(index,value) in ingredients" :key="index">
               <ChipComp >
                {{ value }}
                </ChipComp>
              </div>
            </template>
            <template #footer >
                <ButtonComp icon="pi pi-check" label="Commander" @click="addToCart(_id)"/>
            </template>
        </CardComp>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["_id","price","name","picUrl","ingredients","steps"],
  data() {
    return {
      message: "You can edit this message"
    };
  },
  methods: {
    addToCart(_id:number){
        this.$store.dispatch("addItem",_id)
        this.$toast.add({severity:'success', summary: 'Ajouté au panier', detail:'Cookie ajouté au panier avec succés', life: 3000});
    }
    
  }
})
export default class Cookie extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
