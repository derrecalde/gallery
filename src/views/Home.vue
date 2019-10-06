<template>
  <div id="home">    
    <Gallery/>    
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue'

export default {
  name: 'home',
  components: {Gallery},
  data (){
    return {}
  }
}
</script>

<style>
#home {  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
