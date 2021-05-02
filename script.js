/* const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams";

const resultsContainer = document.querySelector(".results");
async function fetchApi() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    const teams = results.data;
    resultsContainer.innerHTML = "";
    for (let i = 0; i < teams.length; i++) {
      if (i === 15) {
        break;
      }
      const teamName = teams[i].full_name;
      const city = teams[i].city;
      if (teamName.startsWith("c") || teamName.startWith("C")) {
        continue;
      }
      resultsContainer.innerHTML += `<div class="results">
                                            <h4>${teamName}</h4>
                                            <p>${city}</p>
                                        </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchApi();
 */
const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams";

const resultsContainer = document.querySelector(".results");
async function fetchApi() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    const teams = results.data;
    resultsContainer.innerHTML = "";
    for (let i = 0; i < teams.length; i++) {
      if (i === 15) {
        break;
      }

      const teamName = teams[i].full_name;
      const city = teams[i].city;
      if (teamName.startsWith("c") || teamName.startsWith("C")) {
        continue;
      }

      resultsContainer.innerHTML += `<div class="card">
                                            <h4>${teamName}</h4>
                                            <p>${city}</p>
                                        </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchApi();
