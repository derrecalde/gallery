<template>

  <div class="hello">        
    
    <div v-for="img of images" :key="img.id" >
      <p>{{img.title}}</p>
      <img :src="img.urlResized" :alt="img.title">
    </div>
  </div>

</template>

<script>
import { galleryStore } from '../storage';

export default {  
  name: 'app',

  data(){
    return {
      gallery: galleryStore.state.store,
      images:  galleryStore.state.images
      }
  },

  watch: {
    gallery(){
      console.log('Gallery is stored')
      galleryStore.buildImages()
    },
     images(){
      console.log('Images is stored')
      console.log(this.images)
    }
  }  

}
</script>

<style scoped>

</style>