<template>
  <div id="details">    
      
    <section>            
      <img v-if="this.img.id" :ref="'image_'+this.img.id" :v-model="getImgById(this.img.id)" src="" :alt="this.img.title">
      <h1>{{this.img.title}}</h1>
      <p>{{this.img.type}}</p>
    </section>

  </div>
</template>

<script>

import { galleryStore } from '../storage'

export default {
  name: 'details',  
  data (){
    
    return {
      img: galleryStore.state.store[this.$route.params.img]
    }
  },  

  methods: {
    async getImgById(imgId){

      // Wait url from Firebase Storage
      let promise = new Promise((resolve, reject) => {

        galleryStore.getAnImg(imgId, 'gallery').then(
        (res) => {
          resolve(res)  
        })
      });
      
      // Update src values's img once promise is resolved
      let url = await promise         
      
      this.$refs['image_'+imgId].src = url  // Rewrite url in src element
      
    }
  }

}
</script>

