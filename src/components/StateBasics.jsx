import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setName]=useState("Nevin");
    const changeName=()=>{
        console.log("btn clicked")
        setName("Hary")
    }
  return (
    <div>
      <Typography variant='h4'>My name is {name}</Typography>
      <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics
