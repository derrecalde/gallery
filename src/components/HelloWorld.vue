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
import { paintings } from '../storage';


// import Gallery from './gallery/Gallery.vue'
import Header from './header/Header.vue'

export default {  
  name: 'app',

  data(){
    return {items: paintings.state.paintings}
  },

  mounted (){
    // Call database from storage
    
  }

}
</script>

<style scoped>

</style>