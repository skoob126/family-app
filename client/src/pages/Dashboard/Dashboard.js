import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn/index";
import Jumbotron from "../../components/Jumbotron/index";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid/index";
import { List, ListItem } from "../../components/List/index";
import { Input, FormBtn } from "../../components/Form/index";

function Todos() {
  // Setting our component's initial state
  const [todos, setTodos] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Todos and store them with setTodos
  useEffect(() => {
    loadTodos()
  }, [])

  // Loads all Todos and sets them to Todos
  function loadTodos() {
    API.getTodos()
      .then(res => 
        setTodos(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a Todo from the database with a given id, then reloads Todos from the db
  function deleteTodo(id) {
    API.deleteTodo(id)
      .then(res => loadTodos())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveTodo method to save the Todo data
  // Then reload Todos from the database
  function handleFormSubmit(event) {
    console.log("test");
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveTodo({
        title: formObject.title,
        author: formObject.author
      })
        .then(res => loadTodos())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What do I need to do?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Todo (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
             
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Todo
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Todos On My List</h1>
            </Jumbotron>
            {Todos.length ? (
              <List>
                {todos.map(todo => (
                  <ListItem key={todo._id}>
                    <Link to={"/todos/" + todo._id}>
                      <strong>
                        {todo.title} by {todo.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteTodo(todo._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Todos;
