import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from './meals-grid'
export default function Meal(){
    return <>
    <header className={classes.header}>
        <h1>Delicious meals, created {' '}<span className={classes.highlight}>by you</span></h1>
        <p>Choose your favourite recipe and cook it by yourself. It is easy and fun!</p>
        <p className={classes.cta}>
            <Link href="/meals/share">Share your favourite recipe!</Link>
        </p>
    </header>
    <main className={classes.main}>
        <MealsGrid meals={[]}/></main>
        </>
}