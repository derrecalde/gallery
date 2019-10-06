<template>
  <div id="admin">
    <h1>Admin !</h1>
    <input type="text" v-model="title" placeholder="File" />
    <input type="text" v-model="url" placeholder="Url" />
    <button @click="addFile" >Add</button>    
    <LogOut></LogOut>   
  </div>
</template>

<script>
import LogOut from './LogOut'
import { gallery } from '../storage';

export default {
  name: 'admin',
  components: {LogOut},
  data (){
    return {
      title: '',
      url: ''
    }
  },
  methods: {
    addFile(){
      gallery.addInGallery({
        title: this.title,
        url: this.url
      })
      console.log('New file Aded !')
    }
  }
}
</script>

<style>
#admin {  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
