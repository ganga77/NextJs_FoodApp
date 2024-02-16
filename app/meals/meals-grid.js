import classes from './meals-grip.module.css'
import MealItem from './meal-item'
export default function MealsGrid({meals}){
    return <ul className={classes.meals}>
        {meals.map(meal =><li key={meal.id}>
            <MealItem {...meal}/>
        </li>)}
    </ul>
}