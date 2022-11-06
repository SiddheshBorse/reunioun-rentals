import * as React from 'react';
import './Filter.css'
import rentalData from '../Data/data.json'
const Filter = ({setLocation,setfurnish, setrooms,setBath,location}) => {
  console.log(rentalData.hits[0])
  const uniquelocations = new Set();
  const furnishFiltered = new Set();
  const noRooms = new Set();
  const completionStatus = new Set();
  // console.log(rentalData.hits[0])
  rentalData.hits.map((element) => {
    return uniquelocations.add(element.location[2].name)
  })
  rentalData.hits.map((element) => {
    return furnishFiltered.add(element.furnishingStatus)
  })
  rentalData.hits.map((element) => {
    return noRooms.add(element.rooms +1)
  })
  rentalData.hits.map((element) => {
    return completionStatus.add(element.baths)
  })

  const array = [...uniquelocations]
  const array2 =[...furnishFiltered]
  const array3 = [...noRooms]
  const array4 = [...completionStatus]
  return (
    <div className='filter_component'>
      <select id='location_select' name="Locations" onChange={(e) => {
        setLocation(e.target.value)
        
      }} >
        
        <option value='none'>Filter Location</option>
        {array.map((element) => {
          return(
            <option value={element} >{element}</option>
          )
        })}
      </select>
      {/* {console.log(location)} */}
      <div className="line"></div>
      <select id='Furnishing_select' onChange={(e) => {
        setfurnish(e.target.value)
        // console.log(location)
      }} >
        <option value='none'>Select furnishing status</option>
        {array2.map((element) => {
          return (
            <option value={element}>{element}</option>
          )
        })}
      </select>
      <div className="line"></div>
      <select id='rooms_select' onChange={(e) => {
        setrooms(e.target.value)
        // console.log(location)
      }} >
        <option value='none'>Select Number of Rooms</option>
        {array3.map((element) => {
          return (
            <option value={element}>{element}</option>
          )
        })}
      </select>
      <div className="line"></div>
      <select id='baths_select' onChange={(e) => {
        setBath(e.target.value)
        // console.log(location)
      }} >
        <option value='none'>Select number of baths</option>
        {array4.map((element) => {
          return (
            <option value={element}>{element}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Filter