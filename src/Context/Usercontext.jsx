import React, { useState , createContext } from 'react'
export let datacontext = createContext()
function Usercontext({ children }) {
    let[title , setTitle] = useState("")
    let[addListing , setaddListing] = useState(false)
    let[addImage1 , setaddImage1] = useState(null)
    let[addImage2 , setaddImage2] = useState(null)
    let[addImage3 , setaddImage3] = useState(null)
    let[price , setprice] = useState(null)

    let value = {
        title , setTitle ,
        addListing , setaddListing ,
        addImage1 , setaddImage1 ,
        addImage2 , setaddImage2 ,
        addImage3 , setaddImage3 ,
        price , setprice
    }







  return (
    <div>
       <datacontext.Provider value={value}>
           {children}
       </datacontext.Provider>
    </div>
  )
}

export default Usercontext
