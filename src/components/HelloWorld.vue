<template>
  <div class="hello">
    <CardComp class="m-5">
      <template #content>
        <h1>
        Cookie ADARA
        </h1>
        <h2>
        Découvrez nos cookies 
        </h2>
        <div>
        Fabriqués avec des ingrédients locaux du Béarn
        </div>
      </template>
    </CardComp>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
