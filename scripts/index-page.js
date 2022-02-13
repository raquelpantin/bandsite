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

const commentSection = document.querySelector(".user-comment__all");

function displayComment(arr) {
  for (let i = 0; i < arr.length; i++) {
    let commentDivider = document.createElement("div");
    commentDivider.classList.add("user-comment__divider");
    commentSection.appendChild(commentDivider);

    let commentArticle = document.createElement("article");
    commentArticle.classList.add("user-comment__container");
    commentSection.appendChild(commentArticle);

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("user-comment__avatar");
    commentArticle.appendChild(imgDiv);

    let commentCard = document.createElement("div");
    commentCard.classList.add("user-comment__card");
    commentArticle.appendChild(commentCard);

    let commentList = document.createElement("ul");
    commentList.classList.add("user-comment__list");
    commentCard.appendChild(commentList);

    let commentListItem = document.createElement("li");
    commentListItem.classList.add("user-comment__list-item");
    commentListItem.innerHTML = arr[i].name;
    commentList.appendChild(commentListItem);

    let commentListDate = document.createElement("li");
    commentListDate.classList.add("user-comment__list-item--date");
    commentListDate.innerHTML = arr[i].date;
    commentList.appendChild(commentListDate);

    let comment = document.createElement("p");
    comment.classList.add("user-comment__input");
    comment.innerHTML = arr[i].comment;
    commentCard.appendChild(comment);
  }
}

displayComment(userComments);

const commentForm = document.querySelector(".comment__form");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let commentName = event.target.name.value;
  let today = new Date();
  let commentDate =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  let commentUser = event.target.text.value;

  let nameField = document.querySelector(".comment__name");

  if (commentName && commentDate && commentUser) {
    commentSection.innerText = "";
    userComments.unshift({
      name: commentName,
      date: commentDate,
      comment: commentUser,
    });
    displayComment(userComments);
    let clearName = document.querySelector(".comment__name");
    clearName.value = " ";

    let clearComment = document.querySelector(".comment__text");
    clearComment.value = " ";

    nameField.classList.remove("comment__error");
  }
  if (!commentName) {
    nameField.classList.add("comment__error");
  }
});
