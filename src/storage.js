
import { db } from './config';

class GalleryStorage {
  constructor(){
    this.state = {
      store : []
    }
  }

  // Get Paintings data
  getGallery (){
     db.collection('paints').get().then( (snapshot)=>{     

      snapshot.docs.forEach(item => {          
        this.state.store.push(item.data()) // Push each data in the state.paintings store
      });

    })      
  }

  addInGallery(el){
    db.collection('paints').add(el)
  }

}



// Init a storage
export const gallery = new GalleryStorage();

// Get data from firebase
gallery.getGallery()

// console.log(paints.getPaints())
// console.log(paints.state)