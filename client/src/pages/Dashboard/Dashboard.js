import React from "react";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
// import css from "./Dashboard"

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    borderstyle: "ridged-border",
  },
  content: {
    padding: 20,
  },
  container: {
    backgroundImage:
      "url(https://i.pinimg.com/originals/2e/58/0d/2e580defbf8302e39bf43fee02c7453a.jpg)",
    padding: " 150px",
  },
  header: {
    fontSize: "50px",
    color: "Pink",
  },
};

function Dashboard() {
  return (
    <div style={styles.container}>
      <div styles={styles.header}>Dashboard</div>
      <div style={styles.card}>
        <div style={styles.heading}>Tasks / To-Do List</div>
        <div style={styles.content}>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </div>
      </div>
    </div>
  );
}

// constructing a newPost object to hand to the database
// const newPost = {
//     title: titleInput.val().trim(),
//     location: locationInput.val().trim(),
//     email: emailInput.val().trim(),
//     body: bodyInput.val().trim(),
//     image: uploadImageInput.val().trim(),
//     category: categorySelect.val().trim(),
//     userId: userId
//   };
//   // if we're updating a post run updatePost to update a post
//   // otherwise run submitPost to create a whole new post
//   if (updating) {
//     newPost.id = postId;
//     updatePost(newPost);
//   } else {
//     submitPost(newPost);
//     postEmail(newPost);
//   }
// ;

// // submits a new post and brings user to members page upon completion
// function submitPost(Post) {
//   $.post("/api/posts/", Post, () => {
//     window.location.href = "/members";
//   });
// }
// // sends user an email after post is created
// function postEmail(Post) {
//   $.post("/api/email/", Post);
// }

// // gets post data for a post if we're editing
// function getPostData(postId) {
//   $.get("/api/posts/" + postId).then(data => {
//     if (data) {
//       // if this post exists, prefill our pet post form with its data
//       titleInput.val(data.title);
//       bodyInput.val(data.body);
//       emailInput.val(data.email);
//       bodyInput.val(data.body);
//       locationInput.val(data.location);
//       categorySelect.val(data.category);
//       uploadImageInput.val(data.image);
//       // if we have a post with this id, set a flag for us to know to update the post when we hit submit
//       updating = true;
//     }
//   });
// }
// // calling the above function
// getPostData();

// // update a given post, bring user to the members page where the post will be generated
// function updatePost(post) {
//   $.ajax({
//     method: "PUT",
//     url: "/api/posts",
//     data: post
//   }).then(() => {
//     window.location.href = "/members";
//   });

export default Dashboard;
