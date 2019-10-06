<template>
  <div id="home">    
    <HelloWorld/>    
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {HelloWorld},
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
