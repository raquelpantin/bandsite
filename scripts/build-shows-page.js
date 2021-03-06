const apiKey = "1e2adea7-0680-4c90-a680-774c62dfd9ca";

const commentURL =
  "https://project-1-api.herokuapp.com/showdates?api_key=1e2adea7-0680-4c90-a680-774c62dfd9ca";

axios.get(commentURL).then((response) => {
  console.log(response.data);
  let showArray = response.data;
  showArray.forEach((shows) => {
    displayShows(shows);
  });
  const tableRow = document.querySelectorAll(".shows__individual");

  for (let i = 0; i < tableRow.length; i++) {
    tableRow[i].addEventListener("click", function (e) {
      e.preventDefault();
      tableRow[i].classList.toggle("shows__individual-active");
    });
  }
});

const showMain = document.querySelector(".shows__main");

function displayTitles() {
  let showTblt = document.createElement("ul");
  showTblt.classList.add("shows__list-tblt");
  showMain.appendChild(showTblt);

  let date = document.createElement("li");
  date.classList.add("shows__list-tblt--date");
  date.innerText = "DATE";
  showTblt.appendChild(date);

  let venue = document.createElement("li");
  venue.classList.add("shows__list-tblt--venue");
  venue.innerText = "VENUE";
  showTblt.appendChild(venue);

  let location = document.createElement("li");
  location.classList.add("shows__list-tblt--location");
  location.innerText = "LOCATION";
  showTblt.appendChild(location);
}

displayTitles();

function displayShows(shows) {
  let showSection = document.createElement("section");
  showSection.classList.add("shows__individual");
  showMain.appendChild(showSection);

  let showList = document.createElement("ul");
  showList.classList.add("shows__list");
  showSection.appendChild(showList);

  let showListDate = document.createElement("li");
  showListDate.classList.add("shows__list-date");
  showListDate.innerText = "DATE";
  showList.appendChild(showListDate);

  let showListDateInfo = document.createElement("li");
  showListDateInfo.classList.add("shows__list-date--info");
  let numberDate = parseInt(shows.date);
  let newDate = new Date(numberDate);
  let daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  showListDateInfo.innerText =
    daysofWeek[newDate.getDay()] +
    " " +
    months[newDate.getMonth()] +
    " " +
    newDate.getDate() +
    " " +
    newDate.getFullYear();

  showList.appendChild(showListDateInfo);

  let showListVenue = document.createElement("li");
  showListVenue.classList.add("shows__list-venue");
  showListVenue.innerText = "VENUE";
  showList.appendChild(showListVenue);

  let showListVenueInfo = document.createElement("li");
  showListVenueInfo.classList.add("shows__list-venue--info");
  showListVenueInfo.innerText = shows.place;
  showList.appendChild(showListVenueInfo);

  let showListLocation = document.createElement("li");
  showListLocation.classList.add("shows__list-location");
  showListLocation.innerText = "LOCATION";
  showList.appendChild(showListLocation);

  let showListLocationInfo = document.createElement("li");
  showListLocationInfo.classList.add("shows__list-location--info");
  showListLocationInfo.innerText = shows.location;
  showList.appendChild(showListLocationInfo);

  let showButton = document.createElement("a");
  showButton.classList.add("shows__button");
  showButton.innerText = "BUY TICKETS";
  showButton.setAttribute("href", "./shows.html");
  showSection.appendChild(showButton);

  let showDivider = document.createElement("div");
  showDivider.classList.add("shows__divider");
  showMain.appendChild(showDivider);
}
