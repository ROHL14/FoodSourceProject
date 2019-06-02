const appId = "99789f2d";
const appKey = "f127013882151d0efa414261addd5a0c";

let recipeCont = $(".recipe-container");

let categorieArea = $(".categories-holder");

categorieArea.on("click", ".img-thumbnail", function() {
  let chosenCategory = $(this).text();
  recipeCont.html("");
  let queryURL = `https://api.edamam.com/search?q=${chosenCategory}&app_id=${appId}&app_key=${appKey}&from=0&to=15`;
  $.ajax({
    url: queryURL,
    success: function(result) {
      let data = result.hits;

      for (var index in data) {
        let recipe = data[index].recipe;

        let nameRecipe = recipe.label;
        console.log(nameRecipe);

        let image = recipe.image;
        console.log(image);

        let calories = recipe.calories;
        console.log(calories);

        let ingredients = recipe.ingredientLines;
        console.log(ingredients);

        let newName = $("<h1 class='title'>" + nameRecipe + "</h1>");
        let newIngredients = $("<ol class='ingredients'>");

        for (var i in ingredients) {
          newIngredient = $("<li>" + ingredients[i] + "</li>");
          newIngredients.append(newIngredient);
        }

        let newCalories = $(
          "<p class='calories'>Calories: " + calories + "</p>"
        );
        let newImg = $("<img class='image' src='" + image + "'/>");

        let newRecipe = $("<div class='recipe'></div>").append(
          newName,
          newIngredients,
          newCalories,
          newImg
        );

        recipeCont.append(newRecipe);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
});
