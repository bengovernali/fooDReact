export interface Recipe {
    id: number,
    title: string,
    image: string,
    imageType: string,
    servings: number
    readyInMinutes: number,
    license: string,
    sourceName: string,
    sourceUrl: string,
    spoonaculareSourceUrl: string,
    healthScore: number,
    spoonacularScore: number,
    pricePerServing: number,
    analyzedInstructions: [],
    cheap: boolean,
    creditsText: string,
    cuisines: [],
    dairyFree: false,
    diets: [],
    gaps: string,
    glutenFree: boolean,
    instructions: string,
    ketogenic: boolean,
    lowFodmap: boolean,
    occasions: [],
    sustainable: boolean,
    vegan: boolean,
    vegtetarian: boolean,
    veryHealthy: boolean,
    veryPopular: boolean,
    whole30: boolean,
    weightWatchersSmartPoints: number,
    dishTypes: [],
    extendedIngredients: [],
    summary: string,
    winePairing: winePairing,
}

interface winePairing {
    pairedWines: string[],
    pairingText: string,
    productMatches: product[]
}

interface product {
    id: number,
    title: string,
    description: string,
    price: string,
    imageUrl: string,
    averageRating: number,
    ratingCount: number,
    score: number,
    link: string
}