/*
Has made the api work, the modal is showing up and connected with my button, and its nicely done? 

Check to do!

*/
const modalBtn = document.getElementById("btn-modal");
const factPara = document.getElementById("fact");
const modal = document.getElementById("modal");

//

let facts = [];
async function fetchDataWithStatusCheck() {
  try {
    // Waits for the connection to api and stores it in a var
    let response = await fetch("https://dogapi.dog/api/v1/facts?number=2");
    console.log("accessing..");
    if (!response.ok) {
      // if no response is made, an error is given
      throw new Error("HTTP-error! Status: " + response.status);
    }
    let data = await response.json(); // makes the result from the api into a json file
    console.log("facts: ", facts);
    console.log("data: ", data);
    return (facts = data.facts); // The API returns.. { facts: ... }
  } catch (error) {
    console.error("Can't access the data, ", error);
    return [];
  }
}

modalBtn.addEventListener("click", async () => {
  // button is clicked
  console.log("button pressed");
  const factsData = await fetchDataWithStatusCheck(); //! bruh, why not used?
  modal.style.display = "block"; // make the invisible modal visible
  // if (factsData && factsData.length() === 2) {
  // join the two facts with line breaks or bullets  ?
  for (let i = 0; i < facts.length; i++) {
    factPara.textContent += facts[i] + "\n\n\n";
    // }
    // } else {
    // factPara.textContent = "No facts found. :(";
  }
});

window.onclick = function (event) {
  // makes the modal disappear when anywhere not on the modal is clicked
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
