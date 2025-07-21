import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipe', {
  state: () => ({
    currentRecipeImage: null,
    currentRecipeAuthorName: null,
    currentRecipeAuthorLink: null,
  }),
  actions: {
    setPhotoAttribution(name, link) {
      this.currentRecipeAuthorName = name;
      this.currentRecipeAuthorLink = link;
    }
  }
});


