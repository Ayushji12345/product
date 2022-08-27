import React, { useState,useEffect } from 'react'
import Search from './components/Search'
import Views from './components/Views'

const Addproduct = () => {

  const getDatafromLs=()=>{
    const data = localStorage.getItem('item')
    if(data){
      return JSON.parse(data)
    } else{
      return []
    }
  }
  

  const [item,setItem]=useState(getDatafromLs())

  const [product,setProduct]=useState("")
  const [price,setPrice]=useState("")

  const handleSubmit=(e)=>{
     e.preventDefault()

     let items={
      product:product,
      price:price
     }
     setItem([...item,items])
     setProduct("")
     setPrice("")
  }
  useEffect(()=>{
localStorage.setItem("item",JSON.stringify(item))
  },[item])



  
  return (
  
<div>
      <h1>welcome to Add_Product</h1>
      <form onSubmit={handleSubmit}>
     Product: <input type="text" placeholder='Enter your Product' onChange={(e)=>setProduct(e.target.value)} value={product}/><br></br><br></br>
     Price: <input type="text" placeholder='Enter Price'  onChange={(e)=>setPrice(e.target.value)} value={price}/><br></br><br></br>
     <button >Add</button>
     </form>
     <div>
     <Search/>
      <table>
        <thead>
          <tr>
            <th >Product</th>
            <th className='d' >price</th>
          </tr>
        </thead>
        <tbody>
          <Views item={item}/>
        </tbody>
      </table>
     {item.length < 1 &&<div> no product added</div>}</div>
    </div>
  )
}

export default Addproduct
