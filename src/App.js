import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, {useState} from 'react';

function App() {
  
  const onDelete = (todo)=>{
    console.log("I am onDelete of todo", todo);
    //let index = todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(todos.filter((e)=>{
    return e!==todo;
    }));
  }
  const [todos, setTodos] = useState([
  {
    sno: 1,
    title: "Go to the market",
    desc: "You need to go to the market to get this job done."
  },
  {
    sno: 2,
    title: "Go to the mall",
    desc: "You need to go to the mall to get this job done."
  },
  {
    sno: 3,
    title: "Go to the park",
    desc: "You need to go to the park to get this job done."
  },
  ]);
  const addTodo = (title, desc)=>{
    console.log("I am adding a todo", title, desc);
    let sno;
    if(todos.length ===0)
    {
        sno = 0;
    }
    else{
    sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  return (
    <>
      <Header title = "My Todos List" searchBar = {true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
