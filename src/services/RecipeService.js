import api from './api'

class RecipeService {
  getAllRecipes() {
    return api.get('/api/recipes').then(response => response.data)
  }

  getRecipesByTag(tag, page = 1) {
    return api
      .get('/api/recipes', {
        params: {
          tags: tag,
          page: page,
        },
      })
      .then(response => response.data)
  }

  getRecipeDetails(id) {
    return api.get(`/api/recipes/${id}`).then(res => res.data)
  }

  getRandomRecipe() {
  return api.get('/api/recipes/random').then(res => res.data);
  }

  getSearchResults(query){
    return api.get(`:9200/recipes/_search?q=name:${query}`)
    .then((response)=> response.hits.hits);
  }

  getRecipesByIngredients(ingredients) {
      const ingredientsStr = Array.isArray(ingredients) ? ingredients.join(',') : ingredients;
    return api.get('api/recipes/search', {
      params: {
        ingredients: ingredientsStr,
      }
    }).then(res => res.data)
  }


}

export default new RecipeService()
