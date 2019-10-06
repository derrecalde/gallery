<template>
  <div id="login">
    <h1>Hello !</h1>
    <input type="text" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login" >Connection</button>        
  </div>
</template>

<script>
import { firebase } from '@/config';

export default {
  name: 'login',
  data (){
    return { 
      email: '',
      password: ''
     }
  },
  methods:{
    login (){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user)=>{
          console.log('Connected !')
          this.$router.replace('admin')
        },
        (error)=>{
          alert('Ooops'+error.message)
        }
      )
      
    }
  }
}
</script>

<style>
#login {  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
