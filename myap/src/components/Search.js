import React, { useState } from 'react'

const Search = () => {
    const [search,setSearch]=useState()
  return (
    <div>
      <input type="text"     placeholder='Search product ' style={{ width:""}}/>
      <button className='h'>Search</button>
    </div>
  )
}

export default Search
