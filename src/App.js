import {withAuthenticator} from '@aws-amplify/ui-react'
import { API } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { createPet, deletePet } from './graphql/mutations'
import { listPets } from "./graphql/queries"
function App() {
  const [petData, setPetData] = useState([])
  useEffect(() => {
    const fetchPets = async () => {
      const res = await API.graphql({query: listPets})
      
      return res.data.listPets.items
    }

    fetchPets().then(pets => setPetData(pets))
  }, [])
  const handleSubmit = async(e) => {
    e.preventDefault()
    const { target } = e

    try {
      const {data} = await API.graphql({
        query: createPet,
        variables: {
          input: {
            name: target.petName.value,
            description: target.petDescription.value, 
            petType: target.petType.value,
          }
        }
      })

      setPetData((currPetList) => {
        return [... currPetList, data.createPet]
      })
    }catch(e) {
      console.log(e)
    }
  }

  const handlePetDelete = async (petID) => {
    const newPetsList = petData.filter((pet) => pet.id !== petID)
    await API.graphql({
      query: deletePet,
      variables: {
        input: {
          id: petID
        }
      }
    })

    setPetData(newPetsList)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="enter a name" name="petName" />
        <input placeholder="enter a decription" name="petDescription" />
        <select name="petType">
        <option value="none" disabled>PLease Select a pet</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="rabbit">Rabbit</option>
        <option value="turtle">Turtle</option>
        <option value="fish">Fish</option>
        </select>
        <button>Create Pet</button>
      </form>
      <main>
        <ul>
          {petData.map((pet) => (
            <li
            onClick={() => handlePetDelete(pet.id)}
              key={pet.id}
              style={{
                listStyle: 'none',
                border: '1px solid black',
                margin: '10px',
                width: '200px',
              }}
            >
              <article>
                <h3>{pet.name}</h3>
                <h5>{pet.type}</h5>
                <p>{pet.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default withAuthenticator(App);
