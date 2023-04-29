import { useState } from 'react'
import './App.css'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setloading] = useState(true)
  const [tours, settours] = useState([])

  const removeTour = (id) => {
    settours(currentTours => currentTours.filter((tour) => tour.id !== id))
  }

  //second way of writing it
  // const removeTour = (id) => {
  //   const newTours = tours.filter(tour => tour.id !== id)
  //   settours(newTours)
  // }

  const fetchTours = async () => {
    setloading(true)
    try {
      const response = await fetch(url)
      const tours = response.json
      setloading(false)
      settours(tours)
    }
    catch{
      setloading(false)
      console.log(error)
    }
  }


  return (
    <>
      
    </>
  )
}

export default App
