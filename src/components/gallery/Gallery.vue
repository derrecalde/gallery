<template>
  <div class="gallery" >
    Gallery
  <ul is="transition-group">
    <!-- <li v-for="project in projects" class="user" :key="project['.key']">
      <span>{{project.id}} - {{project.title.rendered}}</span>
      <button v-on:click="removeUser(project)">X</button>
    </li> -->
    <!-- <pre v-for="project in projects" :key="project['.key']" >{{project}}</pre> -->
  </ul>
  <pre>{{users}}</pre>
  <form id="form" v-on:submit.prevent="addUser">
    <input type="text" v-model="newUser.name" placeholder="Username">
    <input type="email" v-model="newUser.email" placeholder="email@email.com">
    <input type="submit" value="Add User">
  </form>
  <ul class="errors">
    <li v-show="!validation.name">Name cannot be empty.</li>
    <li v-show="!validation.email">Please provide a valid email address.</li>
  </ul>
</div>
</template>


<script src="./Gallery.js"></script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Gallery.css"></style>
