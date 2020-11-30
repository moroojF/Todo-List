import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToList from './components/AddToList.jsx';
import ShowList from './components/ShowList.jsx';


function App() {
  const [myList, setMyList] = useState([]);
  const createList = myItem => {
    setMyList([...myList, myItem])
  }
  const toggle = i => {
    let temp = [...myList]
    temp[i].taskState = !temp[i].taskState
    setMyList(temp)
  }
  const cleanList = i => {
    let temp = [...myList]
    temp.map((item, i) => item.taskState ? temp.splice(i, 1) : item.myTasK)
    setMyList(temp)
  }
  return (
    <>
      <nav className="nav justify-content-center py-3 bg-dark text-light">
        <h2>Todo List</h2>
      </nav>

      <div className="container">
        <div class="row my-5">
          <div class="col-3"></div>
          <div class="col-6">
            <AddToList setTask={createList} /></div>
          <div class="col-3"></div>
        </div>
        <div class="row">
        <p>This is Your Todo List:</p>
        </div>
        <div class="row">
          <ShowList myList={myList} toggle={toggle} cleanList={cleanList} />
        </div>
      </div>
    </>
  );
}

export default App;
