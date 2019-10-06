
import { db } from './config';

class PaintStorage {
  constructor(){
    this.state = {
      paintings : []
    }
  }

  // Get Paintings
  getPaintings (){
     db.collection('paints').get().then( (snapshot)=>{     

      snapshot.docs.forEach(item => {          
        this.state.paintings.push(item.data()) // Push each data in the state.paintings store
      });

    })      
  }

}



// Init a storage
export const paintings = new PaintStorage();

// Get data from firebase
paintings.getPaintings()

// console.log(paints.getPaints())
// console.log(paints.state)