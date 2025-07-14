import api from "./api";
class RecipeService{

    getAllRecipes(){
        return api.get('/recipes').then((response) => 
        { 
            return response.data;
        }).catch((err) => {
            return Promise.reject(err);
        });
    }

    getRecipeById(id){
        return api.get(`/recipes/${id}`).then((response) => {
            return response.data;
        }).catch((err) => {
            return Promise.reject(err);
        });
    }

    getRecipesByGenre(genre){
         return api.get(`/recipes?genre=${genre}`)
         .then((response) => {
            return response.data;
        }).catch((err) => {
            return Promise.reject(err);
        });
    }

}

export default new RecipeService();