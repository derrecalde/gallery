<template>

  <div class="hello">        
    <ul>
      <li v-for="img of gallery" :key="img.id" >{{img.title}}</li>
    </ul>                
  </div>

</template>

<script>
import { galleryStore } from '../storage';

export default {  
  name: 'app',

  data(){
    return {gallery: galleryStore.state.store}
  }

}
</script>

<style scoped>

</style>