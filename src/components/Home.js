import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './css/home.css'

const Home = (props) => {

  const [apiResponse, setApiResponse] = useState({})

  useEffect(() => { //fetch data when the application first runs 
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
      setApiResponse(response.data)
    }
    fetchData()
  }, [])//looking for dependebcies in the function since it is empty it will run only once. KEEP IT EMPTY
  
  return (
    <div className='style'>
      <ul>
        {
          Object.keys(apiResponse).length > 0 ?
            apiResponse.results.map((pokemon, index) => {
              return(
                <li key={index} onClick={() => { //starting point 
                  props.fetch(pokemon.url)
                }}>{pokemon.name}</li>
              )
            })
          : null
        }
      </ul>
    </div>
  )
}

export default Home