import { useState } from 'react';
import './index.css';

function App() {
  const [item, setItem] = useState([]);
  const [task, setTask] = useState("");

  const [isActive, setActive] = useState([]);
  const toggle = (i) => {
    if (isActive.indexOf(i) === -1) {
      setActive([...isActive, i]);
    }
  };

  function Change(e) {
    setTask(e.target.value)
  }

  function HandleAdd() {
    if (task == "") {
      alert("შეიყვანეთ ტექსტი")
    } else {
      setItem([...item, task])
      setTask("")
    }
  }

  return (
    <>
      <input type="text"
        placeholder='რა არის გასაკეთებელი?'
        value={task}
        onChange={Change}
      />
      <button onClick={HandleAdd}>დამატება</button>
      <ul>
        {item.map((task, i) =>
          <li className={isActive.indexOf(i) !== -1 ? "done" : "notDone"} onClick={() => toggle(i)}>{task}</li>

        )}
      </ul>

    </>
  );
}

export default App;
