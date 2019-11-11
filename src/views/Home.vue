<template>
  <div id="home">    
    <Gallery/>    
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'
import { galleryStore } from '../storage'

export default {
  name: 'home',
  components: {Gallery},
  data (){
    return {
      
    }
  }
  
  
}
</script>

