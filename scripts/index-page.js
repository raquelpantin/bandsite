const userComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2021",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

console.log(userComments);

function addElement(tag, str) {
  const newElement = document.createElement(tag);
  newElement.setAttribute("class", str);
  const mainContainer = document.querySelector(".user-comment__all");
  mainContainer.appendChild(newElement);
}

function addList(tag, str, str2) {
  const newList = document.createElement(tag);
  newList.setAttribute("class", str);
  const parentContainer = document.querySelector("." + str2);
  parentContainer.appendChild(newList);
}

addElement("hr", "divider-first");
addElement("div", "user-comment__container");
addElement("div", "no-avatar__image");
addElement("div", "user-comment__card");
addList("ul", "user-comment__list", "user-comment__card");

addElement("hr", "divider-first");
addElement("div", "user-comment__container");
addElement("div", "no-avatar__image");
addElement("div", "user-comment__card");
addList("ul", "user-comment__list", "user-comment__card");

addElement("hr", "divider-first");
addElement("div", "user-comment__container");
addElement("div", "no-avatar__image");
addElement("div", "user-comment__card");
addList("ul", "user-comment__list", "user-comment__card");

// addList("li", "user-comment__list-item", "user-comment__card");

const unorderedList = document.querySelector(".user-comment__list");
const userCommentCard = document.querySelector(".user-comment__card");

for (let index = 0; index < userComments.length; index++) {
  let userNames = document.createElement("li");
  userNames.setAttribute("class", "user-comment__list-item");
  userNames.innerText = userComments[index].name;
  unorderedList.appendChild(userNames);
  console.log(userComments[index].name);
}

for (let index = 0; index < userComments.length; index++) {
  let commentDate = document.createElement("li");
  commentDate.setAttribute("class", "user-comment__list-item--date");
  commentDate.innerText = userComments[index].date;
  unorderedList.appendChild(commentDate);
  console.log(userComments[index].date);
}

for (let index = 0; index < userComments.length; index++) {
  let comment = document.createElement("p");
  comment.setAttribute("class", "user-comment__input");
  comment.innerText = userComments[index].comment;
  userCommentCard.appendChild(comment);
  console.log(userComments[index].comment);
}
