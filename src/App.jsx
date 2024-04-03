import { useState } from 'react'
import './App.css'
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['cow','dog','cat','dove','bird','horse','gator'];
  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {

  const[animals,setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals,getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}
    />;
  })

  return (
    <>
    <button className='add-animal' onClick={handleClick}>Add Animal</button>
      <div className='app'>
        
        <div className='animal-list'>{renderedAnimals}</div>
      </div>
    </>
  ); 
}

export default App
