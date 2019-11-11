
import { config, db, firebase } from './config';
import { exists } from 'fs';

class GalleryStorage {
  constructor(){
    this.state = {
      store : [],
      collection: 'gallery',
      uploadState: false
    }
  }

  // -- Get gallery data from Firebase ddb -- //
  getGallery (){    
    let datas = []       

     db.collection(this.state.collection).get().then(  (snapshot)=>{     

      snapshot.docs.forEach(item => {                             
        // Set data names : values 
        let data    = item.data()
        data.id     = item.id        

        this.state.store.push(data)        
      });               
    })   
    
  }
  // -- //



  async getAnImg(fileName, path){

    let storage = firebase.storage();   // Init Ref Storage

    // Get url from Firebase Storage with promise
    let promise = new Promise((resolve, reject) => {
      storage.refFromURL('gs://'+config.storageBucket+'/'+path+'/'+fileName+'.jpg').getDownloadURL().then(
          (res)=>{          
            resolve(res)
          }
        )
    });

    let url = await promise        // Return url
    return url

  }


  // -- Add data in Firebase ddb -- //
  addIn(el){    

    this.state.store.push(el)              // Add in store to see it instantly

    return db.collection(this.state.collection).add(el).then( (data) => {     
        return data.id                     // return the created id         
      })
    
  }
  // -- //


  // -- Remove a data by id -- //
  removeIn(id){

    // Remove from firebase    
    db.collection(this.state.collection).doc(id).delete();

    // Remove from the store to see it instantly
    let index = this.state.store.findIndex( x => x.id === id);    
    if (index > -1) this.state.store.splice(index, 1);    

    // -- Remove frome Firebase storage -- //
    let ext = '.jpg'
    // Get the firebase Storage bucket and file name
    let storageRef      = firebase.storage().ref()                                // Get the bucket storage
    let imageRef        = storageRef.child('gallery/'+id+ext)                     // Get the original file
    let resizedImageRef = storageRef.child('gallery/resized/'+id+'_300x700'+ext)  // Get the resized file
    
    // Deleting
    // Delete the file
    imageRef.delete().then(function() {      
      console.log('File deleted successfully!')
    }).catch(function(error) {
      console.log('Uh-oh, an error occurred!')
      console.log(error)    
    });

    // Delete the resized file
    resizedImageRef.delete().then(function() {      
      console.log('Resized file deleted successfully!')
    }).catch(function(error) {
      console.log('Uh-oh, an error occurred on resized file!')   
      console.log(error)
    });
    // -- //
    
  }
  // -- //


  // -- Uploading file in Firebase Storage -- //
  async uploadFile(file, createdId){    
             
    let fileName    = file.name
    let ext         = fileName.slice( fileName.lastIndexOf('.') )    
    
   // -- Add Original file in firebase storage -- //
    let storageRef  = firebase.storage().ref()
    let imagesRef   = storageRef.child('gallery/'+createdId+ext)    

    let uploadState = await imagesRef.put(file).then( function(snapshot) {      
      console.log('Uploaded !');     
      return true 
    }).catch( (error) => {
      console.log(error)
      return false
    });
    
    return uploadState;

    // -- //
    
  }
  // -- //
  

}


// Init a storage
export const galleryStore = new GalleryStorage();

galleryStore.getGallery()
// console.log(paints.getPaints())
// console.log(paints.state)