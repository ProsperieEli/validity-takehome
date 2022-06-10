import React from 'react'
import PetRender from './PetRender.js'
import './Pet.css'

export default function PetList({pets}) {
  console.log(pets)
  
  return (
    <main className='pets'>
    {
     pets.map((pet, i) => (
        <ul key={pet.name + i}>
          <li>
            <PetRender {...pet} />
          </li>
        </ul>
      ))
    }
    </main>
  )

} 

