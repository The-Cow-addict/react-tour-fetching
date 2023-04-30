import { useEffect, useState } from 'react'
import './index.css'
import { Loading } from './Loading'
import { Tours } from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setloading] = useState(true)
  const [tours, settours] = useState([])

  const removeTour = (id) => {
    settours(currentTours => currentTours.filter(tour => tour.id !== id))
  }

  //second way of writing it
  // const removeTour = (id) => {
  //   const newTours = tours.filter(tour => tour.id !== id)
  //   settours(newTours)
  // }

  const fetchTours = async () => {
    setloading(true)
    try {
      const response = await fetch(url)   //response value has been passed in with fetch
      const tours = await response.json() //the passed down value is then passed into "tours" as a js object
      setloading(false)
      settours(tours)
    }
    catch(error){
      setloading(false)
      console.log(error)
      return <h4>Oops! something went Wrong</h4>
    }
  }

  //this is just another way of writing if we are to not use async
  // const fetchTours = () => {
  //   setloading(true)
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       setloading(false)
  //       settours(data)
  //     })
  //     .catch(error => {
  //       setloading(false)
  //       console.log(error)
  //     })
  // }

  useEffect(() => {
    fetchTours()
  },[])

  if(loading === true){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0){
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    </>
  )
}

export default App
