<template>
  <div id="shopping-cart">
    <button class="md-accent md-raised" @click="showList()" id="show">{{ cartCount }}</button>

    <div id="shoppingList" class="shoppingBody">
      <div class="md-layout" v-for="(item, index) in cart" :key="index">
        <div class="md-layout-item">{{ item.name }}</div>
        <div class="md-layout-item"><img :src="item.picUrl" alt /></div>
        <div class="md-layout-item">{{ '€' + item.price }}</div>
        <div class="md-layout-item"><button class="md-primary" @click="removeItem(index)">Remove Cart</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({
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