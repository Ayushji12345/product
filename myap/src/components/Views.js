import React from 'react'

const Views = (props) => {
  // console.log(props.item)
 const arr = props.item 
 console.log(arr)

  return (
    <div>
    <div style={{display:"flex",flexDirection:"row"}}>
     {arr.map(i=>{
      return(
        <div key={i.id}>
          <div>{i.product}</div>
          <div className='c'>{i.price}</div>
        </div>
      )
     })}
    </div>
    </div>
  )
}

export default Views
