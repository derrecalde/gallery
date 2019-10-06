<template>
  <div id="logout">       
    <button @click="logOut" >LogOut</button>        
  </div>
</template>

<script>
import { firebase } from '@/config';

export default {
  name: 'logout',
  data (){
    return { 
      email: '',
      password: ''
     }
  },
  methods:{
    logOut (){
      firebase.auth().signOut().then( ()=>{
        console.log('Disconnected')
        this.$router.replace('login')
      })
      
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
