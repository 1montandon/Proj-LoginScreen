<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { createUser }  from "@/_data/BancoLogin.js"
const router = useRouter()


const email = ref('')
const password = ref('')
const passwordConf = ref('')
const errors = ref('');
const showError = ref(false)

function submitForm() {    
createUser(email.value, password.value),
router.push('/TesteSIM')
if (!/^[^@]+@\w+(\.\w+)+\w$/.test(email.value)) {
        errors.value = 'Email invalido!';
        showError.value = true
}
else if(password.value != passwordConf.value){
    errors.value = 'As senhas não conferem!';
    showError.value = true
}
else if(password.value.length < 3){
    errors.value = 'Senha muito curta!';
    showError.value = true
}else{
    errors.value = '';
    showError.value = false;
    createUser(email.value, password.value),
    router.push('/TesteSIM')
}
}
</script>

<template>
  <main>
      <form class="registro" @submit.prevent="submitForm">
        <div class="loginTitle"><h1>CADASTRE-SE</h1></div>
        <input class="inputs" v-model="email" placeholder="Digite seu Email"  />
        <div class="error">
              <div v-if="showError">{{errors}}</div>
          </div>
          <input class="inputs" type="password" v-model="password" placeholder="Digite sua Senha "  />
          <input class="inputs" type="password" v-model="passwordConf" placeholder="Confirme sua Senha ">

          <button type="submit">Cadastrar</button>
    </form>
    
  </main>
</template>
<style scoped>
.registro {
    display: grid;
    grid-template-columns: 1fr;
    width: 450px;
    height: 500px;
    border: 6px solid rgb(255, 255, 255);
    border-radius: 30px;
    background: linear-gradient(0deg, rgba(226, 226, 226, 1) 0%, rgba(255, 255, 255, 1) 100%);
    justify-items: center;
    box-shadow: -4px 5px 0px rgba(0, 0, 0, 0.26);
}
button{
    border-radius: 10px;
    transition: 0.3s;
    text-align: center;
    font-weight: 800;
    background: rgba(38,150,232,1);
    color: white;
    border: 1px solid rgb(255, 255, 255);
    height: 90%;
    width: 90%;
}

button:active{
    background: rgba(9,74,158,1);
}
.loginTitle {
    text-align: center;
    text-shadow: -1px 1px rgba(38, 150, 232, 1);
}

.inputs {
    border-radius: 10px;
    height: 60%;
    width: 85%;
    transition: 0.4s;
    padding-left: 20px;
    border: 1px solid rgb(0, 0, 0);
    font-size: 15px;
}
.inputs:focus {

    border: 1px solid rgb(0, 0, 0);
}

::placeholder {
    color: black;
}
</style>
