<template>
    <ButtonComp class="md-accent md-raised" @click="showList()" id="show">{{ cartCount }}</ButtonComp>
    <DialogComp header="Votre Panier" v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}">
     <div id="shopping-cart" >
    <div id="shoppingList" class="shoppingBody">
      <div v-for="(item, index) in cart" :key="index">
        <h3 class="md-layout-item">{{ item.name }}</h3>
        <div class="flex justify-content-start">

       <img :src="item.picUrl" alt style="width: 5em"/>
        <TagComp severity="info">{{  item.price+'€'  }}</TagComp>
        <div class="ml-3"><ButtonComp class="p-button-danger" @click="removeItem(index)">Retirer du Panier</ButtonComp></div>
          
        </div>
        <DividerComp />
         <DividerComp />
      </div>
        
    </div>
  </div>
    </DialogComp >
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({
  data(){
    return {
        displayResponsive: false,
    }
  },
  computed: {
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.StoreCart.length;
    },
    cart() {
      return this.$store.getters.StoreCart.map(cartitems => {
        return this.$store.getters.cookies.find(itemForSale => {
          return cartitems === itemForSale._id;
        });
      });
    }
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch("removeItem", index);
    },
    showList() {
      this.displayResponsive = true;
      var modal = document.getElementById("shoppingList");
      var btn = document.getElementById("show");
      btn.onclick = function() {
        modal.style.display = "block";
      };
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }
})
export default class Shopping extends Vue {}
</script>

<style>

</style>