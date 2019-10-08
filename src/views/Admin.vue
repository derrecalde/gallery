<template>
  <div id="admin">
    <h1>Admin !</h1>
    <LogOut></LogOut> 

    <input type="text" v-model="title" placeholder="File" />
    <input type="text" v-model="url" placeholder="Url" />
    <button @click="uploadFile" >Upload File</button>
    <input type="file" ref="fileUploader" style="display:none;" accept="images/*" @change="onPickFile"  />
    <button @click="addFile" >Add</button>          

    <hr/>

    <ul>
      <li v-for="img in gallery" :key="img.id" >
        {{ img.title }}                
        <button :data-id="img.id" @click="removeFile" >x</button>                
      </li>
    </ul>    

  </div>
</template>

<script>
import LogOut from './LogOut'
import { galleryStore } from '../storage';

let $file = []

export default {
  name: 'admin',

  components: { LogOut },
  data (){
    return {
      title   : '',
      url     : '',
      file   : '',      
      gallery : []
    }
  },

  methods: {
    // -- Add data -- //
    addFile(){ 

      let data = {
        title: this.title,
        url:   this.url,
        file:  this.file
      }

      
      galleryStore.addIn(data).then( (createdId)=>{     // Add data in firebase ddb and get his created id
        
        galleryStore.uploadFile($file, createdId)       // Uploading file in Firebase Storage
        
      })
      
    },
    // -- //


    // -- Remove data by id -- //
    removeFile(e){

      let id = e.target.getAttribute('data-id')  // this.$refs.imgId
      galleryStore.removeIn(id)
      
    },
    // -- //


    // -- Upload File -- //
    uploadFile (){    
      this.$refs.fileUploader.click()      
    },
    // -- //


    // -- Get file data -- //
    onPickFile(e){
      let files = e.target.files
      $file = files[0]
      let nameFile = files[0].name
      if (nameFile.lastIndexOf('.') <= 0 ){ return alert('Error ! Invalid file') }else{
        
        this.file = nameFile 
        console.log('File picked : '+this.file)
      }
    }
    // -- //



  },

  mounted() {    
    this.gallery = galleryStore.state.store
  }  

}
</script>

<style>
#admin {  
  color: #2c3e50;
  margin-top: 60px;
}
</style>
