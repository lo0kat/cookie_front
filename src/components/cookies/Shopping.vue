<template>
<ToastComp position="bottom-center"/>
    <ButtonComp class="md-accent md-raised" @click="showList()" id="show" >
           <i class="pi pi-shopping-cart mr-2"></i> 
           <div>
             Panier
             </div> 
            <BadgeComp >
                {{ cartCount }}
             </BadgeComp>
      </ButtonComp>
    <DialogComp header="Votre Panier" :modal=true v-model:visible="displayResponsive" :breakpoints="{'960px': '75vw'}" :style="{width: '50vw'}">
     <div id="shopping-cart" >
    <div  class="shoppingBody">
      <div v-for="(item, index) in cart" :key="index" class="box" >
        <h4 class="md-layout-item">{{ item.name }}</h4>
        <div class="flex justify-content-start">

       <img :src="item.picUrl" alt style="width: 5em"/>
        <TagComp severity="info">{{  item.price+'€'  }}</TagComp>
        <div class="ml-3"><ButtonComp class="p-button-danger" @click="removeItem(index)" icon= "pi pi-times"></ButtonComp></div>
        </div>
        <DividerComp />
      </div>
        
    </div>
  </div>
    <template #footer>
    <ButtonComp icon="pi pi-credit-card" label=" Régler la Commande" @click="pay()" /> 
    <ButtonComp icon= "pi pi-times" class="p-button-danger mt-2" label =" Vider le Panier" @click="resetCart()"/> 
    </template>
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
    }
    ,
    pay(){
      this.displayResponsive = false;
      this.$toast.add({severity:'info', summary: 'Demande de Connexion', detail:'Connectez vous pour procéder au paiement', life: 3000});
      this.$router.push('login');
    },

     resetCart(){
       this.displayResponsive = false;
      this.$store.dispatch("resetCart");
      this.$toast.add({severity:'warn', summary: 'Panier Supprimé', detail:'Vous venez de réinitialiser votre Panier', life: 3000});
    },
  }
})
export default class Shopping extends Vue {}
</script>

<style>

</style>