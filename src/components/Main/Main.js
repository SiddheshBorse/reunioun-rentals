import Card from './Card/Card'
import React from 'react'
import rentalData from '.././Data/data.json'
import './Main.css'

const Main = ({location,furnish,rooms,baths}) => {
  console.log(baths);
  const filtered = rentalData.hits.filter(data=>{
    if(location =='none'){
      return data
    }
    else{
      return data.location[2].name === location
    }
    
    // return data.location[2].name === location &&
    // data.furnishingStatus === furnish &&
    // data.rooms === rooms -1 &&
    // data.baths == baths
    // location:'none'? 
})
  const filtered2 = filtered.filter(data => {
    if (furnish == 'none') {
      return data
    }
    else {
      return data.furnishingStatus === furnish 
    }
  })
  const filtered3 = filtered2.filter(data => {
    if (rooms == 'none') {
      return data
    }
    else {
      return data.rooms === rooms - 1 
    }
  })
  const filtered4 = filtered3.filter(data => {
    if (baths == 'none') {
      return data
    }
    else {
      return data.baths == baths
    }
  })
  

  
  console.log(filtered);
    return (
      <div className='main'>

        {
          filtered4.map((element) => {
            return (
              <Card src={element.coverPhoto.url}
                title={element.title}
                location={element.location[2].name}
                price={element.price} 
                rooms ={element.rooms}
                baths = {element.baths}/>
                
            )
          })
        }

      </div>
    )
  
}

export default Main