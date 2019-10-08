
import { db, firebase } from './config';

class GalleryStorage {
  constructor(){
    this.state = {
      store : [],
      name: 'paints'
    }
  }

  // Get gallery data from Firebase ddb
  getGallery (){
     db.collection(this.state.name).get().then( (snapshot)=>{     

      snapshot.docs.forEach(item => {      

        let data = item.data()
        data.id  = item.id

        this.state.store.push(data)        // Push each data in the state.paintings store
      });
    })      
  }

  // Add data in Firebase ddb
  addIn(el){    

    this.state.store.push(el)              // Add in store to it instantly

    return db.collection(this.state.name).add(el).then( (data) => {     
        return data.id                     // return the created id         
      })

    
  }

  // Remove a data by id
  removeIn(id){

    // Remove from firebase    
    db.collection(this.state.name).doc(id).delete();

    // -- Remove from the store -- //    
    let index = this.state.store.findIndex( x => x.id === id);    
    if (index > -1) this.state.store.splice(index, 1);    
    // -- //    
  }

  uploadFile(file, createdId){    
    
    let fileName = file.name
    let ext      = fileName.slice( fileName.lastIndexOf('.') )
        
    // Add in firebase storage    
    let storageRef = firebase.storage().ref()
    let imagesRef  = storageRef.child('gallery/'+createdId+ext)

    imagesRef.put(file).then(function(snapshot) {
      console.log(file)
      console.log('Uploaded !');
    });
    
  }

}


// Init a storage
export const galleryStore = new GalleryStorage();

// Get data from firebase
galleryStore.getGallery()

// console.log(paints.getPaints())
// console.log(paints.state)