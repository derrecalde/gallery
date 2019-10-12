<template>

  <div class="hello">        
    
    <div v-for="img of gallery" :key="img.id" >
      <p>{{img.title}}</p>
      <p  ></p>            
      <img v-if="img.id" :ref="'image_'+img.id" :v-model="getImgById(img.id)" src="" :alt="img.title">
    </div>
  </div>

</template>

<script>
import { galleryStore } from '../storage';

export default {  
  name: 'app',

  data(){
    return {
      gallery: galleryStore.state.store
      }
  },

  watch: {
    gallery(){
      console.log('Gallery is stored')
    }
  },

  methods: {
    async getImgById(imgId){

      // Wait url from Firebase Storage
      let promise = new Promise((resolve, reject) => {

        galleryStore.getAnImg(imgId+'_300x300', 'gallery/resized').then(
        (res) => {
          resolve(res)  
        })
      });
      
      // Update src values's img once promise is resolved
      let url = await promise         
      this.$refs['image_'+imgId][0].src = url     // Rewrite url in src element
    }
  }
  

}
</script>

<style scoped>

</style>