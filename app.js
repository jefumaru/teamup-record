const userIds = [
  ["488098500765024263", "Me, Ed"],
  ["516493086524964866", "__Henry__"],
  ["749516708099784824", "Goosebumps"],
  ["142797219341402112", "Rabbit"],
  ["178739102101929984", "Master Bates"],
  ["914284244434567188", "CookieDoh"],
  ["161114714170982400", "Mrs. Chippy"],
  ["807995974735364097", "Rohanisya"],
  ["871595637219659898", "Andrew-Morse"],
  ["451829170092376067", "igonnawrecku"],
  ["759971547141242933", "Michael722"],
  ["230873770053730315", "leftytehllama"],
  ["906374386423066684", "LeSinge"],
  ["641510334515118082", "PatsWhatImTalkinAbout"],
  ["130515887403958272", "Hamm"],
  ["918598727336345681", "McClary"],
  ["187245277076389888", "strangemusic"],
  ["149560980081344512", "jrichgames"],
  ["700821941724119062", "WoogieGeezer"],
  ["150728328867872768", "zetite"],
  ["901349011095683092", "🐙MistahKush"],
  ["700822583351705640", "The Mario Odyssey"],
  ["268964485555945473", "Splash"],
];

const list = document.querySelectorAll("[name='playerlist']");

userIds.forEach((item) => {
  let option = document.createElement("option");
  option.value = item[1];
  option.textContent = item[1];
  option.setAttribute("data-userid", item[0]);
  let option2 = option.cloneNode(true);
  let option3 = option.cloneNode(true);
  let option4 = option.cloneNode(true);
  list[0].appendChild(option);
  list[1].appendChild(option2);
  list[2].appendChild(option3);
  list[3].appendChild(option4);
});

// function results(r1, r2, r3, r4) {
//   console.log(`/game record leaderboard: MGSR 1v1 result: #1 ${r1} #2 ${r2}`);
// }

// results(players[0], players[1]);

function AddResult(button) {
  let resultsBox = document.getElementById("results");

  if (button.id == "1st") {
    resultsBox.value += ` #1 <@!${document
      .getElementById("firstplace")
      .selectedOptions[0].getAttribute("data-userid")}>`;
  }
  if (button.id == "2nd") {
    resultsBox.value += ` #2 <@!${document
      .getElementById("secondplace")
      .selectedOptions[0].getAttribute("data-userid")}>`;
  }
  if (button.id == "3rd") {
    resultsBox.value += " #3 " + document.getElementById("thirdplace").selectedOptions[0].getAttribute("data-userid");
  }
  if (button.id == "4th") {
    resultsBox.value += " #4 " + document.getElementById("fourthplace").selectedOptions[0].getAttribute("data-userid");
  }
}

function reset() {
  let fields = document.querySelectorAll("input");
  fields.forEach((e) => (e.value = ""));
  document.getElementById("results").value = "/game record leaderboard: MGSR 1v1 result:";
}

function copyClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("results");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}

/* Function below works on the leaderboard page, not actually this page.
I use it to get the list of users and IDs. It's more of a periodic thing.
This is for Pat and the Homies server.

async function getUsers() {
  var leaderboard = await fetch("https://teamupdiscord.com/api/api", {
    credentials: "include",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0",
      Accept: "application/json",
      "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "application/json",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
    },
    referrer: "https://teamupdiscord.com/leaderboard/server/670656871434027049/game/bWdzciUyMDF2MQ==/versus/1v1",
    body: '{"guildId":"670656871434027049","gameId":"mgsr 1v1","versus":"1v1","action":"leaderboardGuildGameVersus"}',
    method: "POST",
    mode: "cors",
  })
    .then((response) => response.json())
    .then((data) => [data.leaderboard, data.playerNames]);
  var namesArray = Object.entries(leaderboard[1]);
  var namesList = namesArray.map((u, i) => [namesArray[i][0], namesArray[i][1].username]);
	console.log(namesList) 
};
await getUsers()
*/
