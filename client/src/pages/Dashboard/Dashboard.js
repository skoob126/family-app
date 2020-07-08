import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import css from "./Dashboard"

function Dashboard() {
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>Test</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
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
