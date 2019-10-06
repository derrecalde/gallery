<template>
  <div id="admin">
    <h1>Admin !</h1>
    <input type="text" placeholder="File" />
    <button>Add</button>    
    <LogOut></LogOut>   
  </div>
</template>

<script>
import LogOut from './LogOut'

export default {
  name: 'admin',
  components: {LogOut},
  data (){
    return {}
  }
}
</script>

<style>
#admin {  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
