const modalBtn = document.getElementById("btn-modal");
const factPara = document.getElementById("fact");

let facts = [];
async function fetchDataWithStatusCheck() {
  try {
    let response = await fetch("https://dogapi.dog/api/v1/facts?number=2");
    console.log("accessing..");
    if (!response.ok) {
      throw new Error("HTTP-error! Status: " + response.status);
    }
    let data = await response.json();
    facts = data.facts; // The API returns.. { facts: ... }
    console.log("facts: ", facts);
    console.log("data: ", data);
  } catch (error) {
    console.error("Can't access the data, ", error);
  }
}

modalBtn.addEventListener("click", async () => {
  console.log("button pressed");
  const factsData = await fetchDataWithStatusCheck();

  if (factsData && factsData.length() > 0) {
    // join the two facts with line breaks or bullets  ?
    factPara.textContent = factsData.join("\n\n");
  } else {
    factPara.textContent = "No facts found. :(";
  }
});
