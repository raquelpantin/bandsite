const showListing = [
  {
    dateTitle: "DATE",
    date: "Mon Sept 06 2021",
    venueTitle: "VENUE",
    venue: "Ronald Lane",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
  },
  {
    dateTitle: "DATE",
    date: "Tue Sept 21 2021",
    venueTitle: "VENUE",
    venue: "Pier 3 East",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
  },
  {
    dateTitle: "DATE",
    date: "Fri Oct 15 2021",
    venueTitle: "VENUE",
    venue: "View Lounge",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
  },
  {
    dateTitle: "DATE",
    date: "Sat Nov 06 2021",
    venueTitle: "VENUE",
    venue: "Hyatt Agency",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
  },
  {
    dateTitle: "DATE",
    date: "Fri Nov 26 2021",
    venueTitle: "VENUE",
    venue: "Moscow Center",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
  },
  {
    dateTitle: "DATE",
    date: "Wed Dec 15 2021",
    venueTitle: "VENUE",
    venue: "Press Club",
    locationTitle: "LOCATION",
    location: "San Francisco, CA",
  },
];

console.log(showListing);

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

function displayShows(arr) {
  for (let i = 0; i < arr.length; i++) {
    let showSection = document.createElement("section");
    showSection.classList.add("shows__individual");
    showMain.appendChild(showSection);

    let showList = document.createElement("ul");
    showList.classList.add("shows__list");
    showSection.appendChild(showList);

    let showListDate = document.createElement("li");
    showListDate.classList.add("shows__list-date");
    showListDate.innerText = arr[i].dateTitle;
    showList.appendChild(showListDate);

    let showListDateInfo = document.createElement("li");
    showListDateInfo.classList.add("shows__list-date--info");
    showListDateInfo.innerText = arr[i].date;
    showList.appendChild(showListDateInfo);

    let showListVenue = document.createElement("li");
    showListVenue.classList.add("shows__list-venue");
    showListVenue.innerText = arr[i].venueTitle;
    showList.appendChild(showListVenue);

    let showListVenueInfo = document.createElement("li");
    showListVenueInfo.classList.add("shows__list-venue--info");
    showListVenueInfo.innerText = arr[i].venue;
    showList.appendChild(showListVenueInfo);

    let showListLocation = document.createElement("li");
    showListLocation.classList.add("shows__list-location");
    showListLocation.innerText = arr[i].locationTitle;
    showList.appendChild(showListLocation);

    let showListLocationInfo = document.createElement("li");
    showListLocationInfo.classList.add("shows__list-location--info");
    showListLocationInfo.innerText = arr[i].location;
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
}

displayShows(showListing);

const tableRow = document.querySelectorAll(".shows__individual");

for (let i = 0; i < tableRow.length; i++) {
  tableRow[i].addEventListener("click", function (e) {
    e.preventDefault();
    tableRow[i].classList.toggle("shows__individual-active");
  });
}
