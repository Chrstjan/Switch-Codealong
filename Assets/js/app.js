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
      });

      const ulElement = document.createElement("ul");

      const categoryElements = `
      <h3>Eletronics</h3>
      <li>${eletronicsArray}</li>
      <h3>Fornite</h3>
      <li>${fortniteArray}</li>`;

      ulElement.innerHTML += categoryElements;

      categoryContainer.appendChild(ulElement);
      console.log("eletronicsArray");
      console.log(eletronicsArray);
      console.log("fortniteArray");
      console.log(fortniteArray);
}