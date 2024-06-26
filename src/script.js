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
    console.log(data.results);
    populateGames(data.results);
  } catch (error) {
    console.error("Unable to fetch data:", error);
  }
};

const createGameBlock = (game) => {
  const gameBlock = $("#nba-game").clone().show();
  gameBlock.find("#game-title").text(game.strEvent);
  gameBlock
    .find("#date p")
    .text(`${convertDateFormat(game.dateEvent)} ${game.strTime} PM`);
  gameBlock.find("#opponent p").text(game.strAwayTeam);
  gameBlock.find("#home-score").text(game.intHomeScore);
  gameBlock.find("#away-score").text(` - ${game.intAwayScore}`);

  // Set color for the home score
  if (game.intHomeScore < game.intAwayScore)
    gameBlock.find("#home-score").css("color", "red");
  else gameBlock.find("#home-score").css("color", "green");

  console.log(gameBlock);
  return gameBlock;
};

const populateGames = (gameData) => {
  $("#header-content img")
    .attr("src", gameData[0].strHomeTeamBadge)
    .attr("alt", `${gameData[0].strHomeTeam} logo`);
  $("#header-title").text(gameData[0].strHomeTeam.toUpperCase());

  $("title").text(`${gameData[0].strHomeTeam}'s Recent Game Summary`)

  const parentContainer = $("#nba-last-games");

  gameData.forEach((game) => {
    const gameBlock = createGameBlock(game);
    parentContainer.append(gameBlock);
  });
};

const convertDateFormat = (dateString) => {
  // Split the date string into components
  const [year, month, day] = dateString.split(" ")[0].split("-");

  // Convert to integers to remove leading zeros
  const formattedDate = `${parseInt(month)}/${parseInt(day)}/${year}`;

  return formattedDate;
};

fetchTeam();
