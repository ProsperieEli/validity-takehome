import React from 'react'
import './Pet.css'

export default function PetRender({name, type, likes, dislikes}) {

  return (
    <>
     
    <h3>{name}</h3>

    <div>
    <p>Species: {type} 
    <hr/>
    likes: {likes} 
    <br/>Dislikes: {dislikes}</p>

    </div>

    </>
  )
}
