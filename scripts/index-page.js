const apiKey = "1e2adea7-0680-4c90-a680-774c62dfd9ca";

const commentURL =
  "https://project-1-api.herokuapp.com/comments?api_key=1e2adea7-0680-4c90-a680-774c62dfd9ca";

// axios
//   .get(commentURL)
//   .then((response) => {
//     console.log(response);
//     let userArray = response.data;

//     userArray.forEach((com) => {
//       displayComment(com);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const commentSection = document.querySelector(".user-comment__all");

function displayComment(com) {
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
  commentListItem.innerHTML = com.name;
  commentList.appendChild(commentListItem);

  let commentListDate = document.createElement("li");
  commentListDate.classList.add("user-comment__list-item--date");
  commentListDate.innerHTML = new Date(com.timestamp);
  commentList.appendChild(commentListDate);

  let comment = document.createElement("p");
  comment.classList.add("user-comment__input");
  comment.innerHTML = com.comment;
  commentCard.appendChild(comment);
}

axios
  .get(commentURL)
  .then((response) => {
    let commentArray = response.data.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    commentArray.forEach((comment) => {
      displayComment(comment);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const commentForm = document.querySelector(".comment__form");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let commentName = event.target.name.value;
  let commentUser = event.target.text.value;

  let newComment = {
    name: commentName,
    comment: commentUser,
  };

  let nameField = document.querySelector(".comment__name");
  let commentField = document.querySelector(".comment__text");

  if (commentName && commentUser) {
    commentSection.innerText = "";
    axios
      .post(commentURL, newComment)
      .then((response) => {
        axios
          .get(commentURL)
          .then((response) => {
            console.log(response.data);
            let commentArray = response.data;
            commentArray.forEach((comment) => {
              displayComment(comment);
              nameField.value = "";
              commentField.value = "";
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    form.reset();
  }
});

// commentForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let commentName = event.target.name.value;
//   let today = new Date();
//   let commentDate =
//     ("0" + (today.getMonth() + 1)).slice(-2) +
//     "/" +
//     today.getDate() +
//     "/" +
//     today.getFullYear();
//   let commentUser = event.target.text.value;

//   let nameField = document.querySelector(".comment__name");
//   let commentField = document.querySelector(".comment__text");

//   if (commentName && commentDate && commentUser) {
//     commentSection.innerText = "";
//     userComments.unshift({
//       name: commentName,
//       date: commentDate,
//       comment: commentUser,
//     });

//     displayComment(userComments);
//     let clearName = document.querySelector(".comment__name");
//     clearName.value = " ";

//     let clearComment = document.querySelector(".comment__text");
//     clearComment.value = " ";

//     nameField.classList.remove("comment__error");
//   }
//   if (!commentName) {
//     nameField.classList.add("comment__error");
//   }
//   if (!commentUser) {
//     commentField.classList.add("comment__error");
//     console.log("no comment from user");
//   }
// });

// let time = new Date(timestamp);
// let = time.getMonth() + 1 + "/" + time.getDate() + "/" + time.getFullYear();
// console.log(date);
