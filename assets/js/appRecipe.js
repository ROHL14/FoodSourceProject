const appId = "99789f2d";
const appKey = "f127013882151d0efa414261addd5a0c";

/*let recipeCont = $(".recipe-container");
let categorieArea = $(".items");

categorieArea.on("click", ".entry", function() {
  console.log(this);
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

        let url = recipe.url;
        console.log(url);

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

        let newInstructions = $(
          "<a href='" + url + "'>How to cook " + nameRecipe + ".</a>"
        );

        let newRecipe = $("<div class='recipe'></div>").append(
          newName,
          newIngredients,
          newCalories,
          newImg,
          newInstructions
        );

        recipeCont.append(newRecipe);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
});*/
/*
let recipeCont = $("#items");
let categorieArea = $(".items");

categorieArea.on("click", ".entry", function() {
  console.log(this);
  let entry = $("<div  class='entry' id='entry></div>");
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

        let url = recipe.url;
        console.log(url);

        let newName = $("<p class='name'>" + nameRecipe + "</p>");
        let newIngredients = $("<ol class='ingredients'>");

        for (var i in ingredients) {
          newIngredient = $("<li>" + ingredients[i] + "</li>");
          newIngredients.append(newIngredient);
        }

        let newCalories = $(
          "<p class='calories'>Calories: " + calories.toFixed(2) + "</p>"
        );
        let newImg = $("<img class='image' src='" + image + "'/>");

        let newInstructions = $(
          "<a href='" + url + "'>How to cook " + nameRecipe + ".</a>"
        );

        let dropdown = $("<div class='dropdown-content'></div>").append(
          newIngredients,
          newInstructions
        );

        let newRecipe = $("<div class='entry'></div>").append(
          newName,
          newImg,
          newCalories,
          dropdown
        );

        recipeCont.append(newRecipe);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
});*/

let categorieArea = $(".items");

let recipeCont = $(".section-recipe");
recipeCont.hide();

categorieArea.on("click", ".entry", function() {
  let chosenCategory = $(this).text();

  recipeCont.show();

  let queryURL = `https://api.edamam.com/search?q=${chosenCategory}&app_id=${appId}&app_key=${appKey}&from=0&to=15`;
  $.ajax({
    url: queryURL,
    success: function(result) {
      let data = result.hits;

      for (var index in data) {
        let recipe = data[index].recipe;

        let nameRecipe = recipe.label;

        let image = recipe.image;

        let calories = recipe.calories;

        let ingredients = recipe.ingredientLines;

        let url = recipe.url;

        let newName = $("<p class='name'>" + nameRecipe + "</p>");
        let newIngredients = $("<ol class='ingredients'>");

        for (var i in ingredients) {
          newIngredient = $("<li>" + ingredients[i] + "</li>");
          newIngredients.append(newIngredient);
        }

        let newCalories = $(
          "<p class='calories'>Calories: " + calories.toFixed(2) + "</p>"
        );
        let newImg = $("<img class='image' src='" + image + "'/>");

        let newInstructions = $(
          "<a href='" + url + "'>How to cook " + nameRecipe + ".</a>"
        );

        let hideSection = $(
          "<div class='hidden-section' id='" + index + "'></div>"
        ).append(newIngredients, newInstructions);

        let newRecipe = $(
          "<div class='container-recipe' id='" + index + "'></div>"
        ).append(newName, newImg, newCalories);

        if (index == 0) {
          $(".item-0").html("");
          $(".item-0").append(newRecipe);
          instructions0 = hideSection;
        }
        if (index == 1) {
          $(".item-1").html("");
          $(".item-1").append(newRecipe);
          instructions1 = hideSection;
        }
        if (index == 2) {
          $(".item-2").html("");
          $(".item-2").append(newRecipe);
          instructions2 = hideSection;
        }
        if (index == 3) {
          $(".item-3").html("");
          $(".item-3").append(newRecipe);
          instructions3 = hideSection;
        }
        if (index == 4) {
          $(".item-4").html("");
          $(".item-4").append(newRecipe);
          instructions4 = hideSection;
        }
        if (index == 5) {
          $(".item-5").html("");
          $(".item-5").append(newRecipe);
          instructions5 = hideSection;
        }
        if (index == 6) {
          $(".item-6").html("");
          $(".item-6").append(newRecipe);
          instructions6 = hideSection;
        }
        if (index == 7) {
          $(".item-7").html("");
          $(".item-7").append(newRecipe);
          instructions7 = hideSection;
        }
        if (index == 8) {
          $(".item-8").html("");
          $(".item-8").append(newRecipe);
          instructions8 = hideSection;
        }
        if (index == 9) {
          $(".item-9").html("");
          $(".item-9").append(newRecipe);
          instructions9 = hideSection;
        }
        if (index == 10) {
          $(".item-10").html("");
          $(".item-10").append(newRecipe);
          instructions10 = hideSection;
        }
        if (index == 11) {
          $(".item-11").html("");
          $(".item-11").append(newRecipe);
          instructions11 = hideSection;
        }
        if (index == 12) {
          $(".item-12").html("");
          $(".item-12").append(newRecipe);
          instructions12 = hideSection;
        }
        if (index == 13) {
          $(".item-13").html("");
          $(".item-13").append(newRecipe);
          instructions13 = hideSection;
        }
        if (index == 14) {
          $(".item-14").html("");
          $(".item-14").append(newRecipe);
          instructions14 = hideSection;
        }
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
});

let ingredientsContainer = $(".section-ingredient");
ingredientsContainer.hide();

recipeCont.on("click", ".recipe", function() {
  let chosenRecipe = this;

  ingredientsContainer.show();

  switch (chosenRecipe.id) {
    case "0":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions0);
      break;
    case "0":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions0);
      break;
    case "1":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions1);
      break;
    case "2":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions2);
      break;
    case "3":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions3);
      break;
    case "4":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions4);
      break;
    case "5":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions5);
      break;
    case "6":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions6);
      break;
    case "7":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions7);
      break;
    case "8":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions8);
      break;
    case "9":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions9);
      break;
    case "10":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions10);
      break;
    case "11":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions11);
      break;
    case "12":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions12);
      break;
    case "13":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions13);
      break;
    case "14":
      ingredientsContainer.html("");
      ingredientsContainer.append(instructions14);
      break;
  }
});
