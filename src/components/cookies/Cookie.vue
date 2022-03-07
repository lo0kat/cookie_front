<template>
   <CardComp style="width: 20em">
            <template #header>
                <img :src="picUrl" width="60" class="rounded" >           
            </template>
            <template #title>
                {{name}}
            </template>
            <template #subtitle>
               <ChipComp label="Sucre" icon="pi pi-check" />
                <ChipComp label="Beurre" icon="pi pi-check" />
                  <ChipComp label="Chocolat" icon="pi pi-check" />
                    <ChipComp label="Oeufs" icon="pi pi-check" />
            </template>
            <template #content>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam esse asperiores eum voluptatibus natus. Temporibus ea veritatis aut repellat placeat doloremque, quos vero, ex minus magnam voluptate possimus, eius obcaecati?

            </template>
            <template #footer>
                <ButtonComp icon="pi pi-check" label="Commander" />
                <ButtonComp icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />

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
        this.$store.dispatch("addToCart",_id)
    }
  }
})
export default class Cookie extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
