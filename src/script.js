// Fork this codesandbox

// Visit thesportsdb.com sign up for free to get an api key.

// Download the sample-client.psd from: https://drive.google.com/file/d/1mpCvUpdfCrruhgBkz8mqyWcbZWzKvJv8/view?usp=sharing

// Match your results as closely to Finished_Test_HTML_Example.jpg as you can.

// Goodluck!

const fetchTeam = async () => {
  try {
    response = await fetch(
      "https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=134863"
    );
    if (!response.ok) {
      throw new Error(`Error status: ${res.status}`);
    }
    const data = await response.json();
    console.log(data.results[0]);
    populateGames(data.results[0]);
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
};

const populateGames = () => {
  
};

fetchTeam();
