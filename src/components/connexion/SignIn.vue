<template>
      <div class = "scalein animation-duration-1000 m-2">
            <div class="grid">
                <div class="col-5 flex align-items-center justify-content-center">
                    <div class="p-fluid">
                        <div class="field">
                            <label for="username">Identifiant</label>
                            <InputText id="username" type="text" />
                        </div>
                        <div class="field">
                            <label for="password">Mot de Passe</label>
                            <InputText id="password" type="password" />
                        </div>
                        <ButtonComp label="Connexion"></ButtonComp>
                     </div>
                </div>
                <div class="col-2">
                    <DividerComp layout="vertical">
                        <b>OU</b>
                    </DividerComp>
                </div>
                <div class="col-5 flex align-items-center justify-content-center">
                    <ButtonComp label="S'inscrire" icon="pi pi-user-plus" class="p-button-info"></ButtonComp>
                </div>
            </div>
      </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class SignIn extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
