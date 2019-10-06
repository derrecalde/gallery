<template>
  <div id="login">
    <h1>Hello !</h1>
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Connection</button>        
  </div>
</template>

<script>
export default {
  name: 'login',
  data (){
    return {}
  }
}
</script>

<style>
#login {  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
