// let value = 100;

// switch (value) {
//     case 50:
//         console.log(`Value is: ${value}`);
//         break;
        
//     case 100:
//         console.log(`Value is: ${value}`);
//         break;

//     default:
//         console.log("Fortnite Thanos");
//         break;
// }

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
    "lighting"
  ]

  let eletronicsArray = [];
  let fortniteArray = [];

  allCategories.forEach(category => {
    switch(category) {
        case "smartphones":
        case "laptops": {
            eletronicsArray.push(category);
            break;
        }

        default: {
            fortniteArray.push(category);
            break;
        }
    }
  })

  console.log("eletronicsArray");
  console.log(eletronicsArray);
  console.log("fortniteArray");
  console.log(fortniteArray);