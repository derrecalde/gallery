<template>
  <div class="hello">        
    <ul>
      <li v-for="item of items" :key="item.id" >{{item.title}}</li>
    </ul>
    
    <Header></Header>
    <pre>{{items}}</pre>
    
  </div>
</template>

<script>
import { gallery } from '../storage';


// import Gallery from './gallery/Gallery.vue'
import Header from './header/Header.vue'

export default {  
  name: 'app',

  data(){
    return {items: gallery.state.store}
  }

}
</script>

<style scoped>

</style>