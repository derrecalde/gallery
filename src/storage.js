
import { db } from './config';

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

    db.collection(this.state.name).add(el) // Add in Firebase
    this.state.store.push(el)              // Add in store
  }

  // Remove a data by id
  removeIn(id){

    // Remove from firebase    
    db.collection(this.state.name).doc(id).delete();

    // -- Remove from the store -- //    
    let index = this.state.store.findIndex( x => x.id ===id);    
    if (index > -1) this.state.store.splice(index, 1);    
    // -- //    
  }

}


// Init a storage
export const gallery = new GalleryStorage();

// Get data from firebase
gallery.getGallery()

// console.log(paints.getPaints())
// console.log(paints.state)