<template>
  <div id="admin">
    <h1>Admin !</h1>
    <LogOut></LogOut> 

    <input type="text" v-model="title" placeholder="File" />
    <input type="text" v-model="url" placeholder="Url" />
    <button @click="addFile" >Add</button>          

    <hr/>

    <ul>
      <li v-for="img in gallery" :key="img.id" >
        {{ img.title }}
        <button :data-id="img.id" @click="removeFile" >x</button>        
      </li>
    </ul>

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
      url: '',
      gallery: []
    }
  },

  methods: {
    // -- Add data -- //
    addFile(){
      
      gallery.addIn({
        title: this.title,
        url:   this.url
      })

      console.log('New file Aded !')
    },
    // -- //

    // -- Remove data by id -- //
    removeFile(e){

      let id = e.target.getAttribute('data-id')      
      gallery.removeIn(id)
      
    }
    // -- //
  },

  mounted() {    
    this.gallery = gallery.state.store
  }

}
</script>

<style>
#admin {  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
