const searchForm = document.querySelector("form");
      const searchResultDiv = document.querySelector(".search-result");
      const container = document.querySelector(".container1");
      let searchQuery = "";
      const APP_ID = "{Your API ID}";
      const APP_key = "{Your API KEY}";

      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        searchQuery = e.target.querySelector("input").value;
        fetchAPI();
      });

      

      async function fetchAPI() {
        const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}`;
        const response = await fetch(baseURL);
        const data = await response.json();
        generateHTML(data.hits);
        console.log(data);
      }

      

      function generateHTML(results) {
        container.classList.remove("initial");
        let generatedHTML = "";
        results.map((result) => {
          generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container1">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
          <br>
          
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
        });
        searchResultDiv.innerHTML = generatedHTML;
      }