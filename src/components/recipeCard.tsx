import React from 'react'

import { Recipe } from '../types'

import { Card, CardHeader, CardContent, Typography, CardMedia } from '@mui/material'

function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <Card>
            <CardHeader title={recipe.title}/>
            <CardMedia 
                component="img"
                src={recipe.image}
                alt={recipe.title}
            />
            <CardContent>
                <Typography variant="subtitle1" color="text.secondary">
                    {`Source: ${recipe.sourceName}`}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default RecipeCard