<template>
   <CardComp style="width: 18em">
            <template #header>
                <img :src="picUrl" >           
            </template>
            <template #title>
                {{name}}
            </template>
            <template #subtitle>
               <ChipComp label="Sucre" icon="pi pi-check" />
                <ChipComp label="Beurre" icon="pi pi-check" />
            </template>
            <template #footer>
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
    }
  }
})
export default class Cookie extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
