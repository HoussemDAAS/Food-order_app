import React, { useEffect , useState} from 'react'
import { getMeals } from '../http'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const meals = await  getMeals();
                setMeals(meals);
                console.log(meals);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMeals();
    }, [])
  return (
    <div id='meals'>
      {meals.map((meal) => (
      <div className='meal-item' key={meal.id}>
   <article>
    
       <img src={`http://localhost:3000/${meal.image}`} alt={meal.strMeal} />
       <h3>{meal.name}</h3>
       <p className='meal-item-description'>{meal.description}</p>
       <p className='meal-item-price'>{meal.price}</p>
       <button className='meal-item-actions'>Add to cart</button>
   </article>
      </div>
      ))}
    </div>
  )
}

export default Meals
