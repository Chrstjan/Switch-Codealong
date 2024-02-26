const categoryContainer = document.getElementById("category-container");

sortCategory();

function sortCategory() {
  let allCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];

  let eletronicsArray = [];
  let cosmeticsArray = [];
  let homeDecorArray = [];
  let womensClothesArray = [];
  let mensClothesArray = [];
  let accessoriesArray = [];
  let fortniteArray = [];

  allCategories.forEach((category) => {
    switch (category) {
      case "smartphones":
      case "laptops": {
        eletronicsArray.push(category);
        break;
      }

      case "fragrances":
      case "skincare": {
        cosmeticsArray.push(category);
        break;
      }

      case "home-decoration":
      case "furniture":
      case "lighting": {
        homeDecorArray.push(category);
        break;
      }

      case "womens-dresses":
      case "womens-shoes": {
        womensClothesArray.push(category);
        break;
      }

      case "mens-shirts":
      case "mens-shoes": {
        mensClothesArray.push(category);
        break;
      }

      case "mens-watches":
      case "womens-watches":
      case "womens-bags":
      case "womens-jewellery":
      case "sunglasses": {
        accessoriesArray.push(category);
        break;
      }

      default: {
        fortniteArray.push(category);
        break;
      }
    }
  });

  let navigationArray = [
    {
      supCategoryName: "Eletronics",
      subCategories: eletronicsArray,
    },
    {
      supCategoryName: "Cosmetics",
      subCategories: cosmeticsArray,
    },
    {
      supCategoryName: "Decor",
      subCategories: homeDecorArray,
    },
    {
      supCategoryName: "Clothes",
      subCategories: [womensClothesArray, mensClothesArray],
    },
    {
      supCategoryName: "Accessories",
      subCategories: accessoriesArray,
    },
    {
      supCategoryName: "Fortnite",
      subCategories: fortniteArray,
    },
  ];
  buildNavigation(navigationArray);
}

function buildNavigation(navigationData) {
  console.log(navigationData);

  navigationData.forEach((supCategory) => {
    let subCategories = "<ul>";
    supCategory.subCategories.forEach((subCategory) => {
      let listElement = `<li><div onclick="navCallback('${subCategory}')">${subCategory}</div></li>`;
      subCategories += listElement;
    });
    subCategories += "</ul>";

    let supHTML = `<div><h3 onclick="navCallback('${supCategory.supCategoryName}')">${supCategory.supCategoryName}</h3>${subCategories}</div>`;

    categoryContainer.innerHTML += supHTML;
  });
}

function navCallback(clickedItem) {
  console.log(clickedItem);
}
