import RecipeList from "../components/RecipeList"
import React from "react"
import { Container } from "react-bootstrap"
import {useParams } from "react-router"
import { useGetRecipesByIngredientQuery } from "../slices/recipesApiSlice"
import Loader from "../components/Loader"
import Message from "../components/Message"

const IngredientRecipes = () => {
    const {ingredient} = useParams()
    const {data:data, isLoading, error} = useGetRecipesByIngredientQuery(ingredient)
    const recipes = data?.recipes
    sessionStorage.setItem("recipes", JSON.stringify(recipes))

    return(
        <main>
            <Container>
            <h1 style = {{marginBottom: "2rem"}}>Recipes with {ingredient}</h1>
                {recipes ? (
                    <RecipeList recipes={recipes}/>
                ) : isLoading ? (<Loader/>) : (
                    <Message variant='dark'>There has been an error, please refresh the page.</Message>
                )}
            </Container>
        </main>
    )
}

export default IngredientRecipes