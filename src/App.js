import { useState } from 'react';
import './App.css';
import { v4 } from 'uuid';

function App() {
  // id는 uuid를 사용한다.
  const uuid = () => {
    const tokens = v4().split('-')
    return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
  }

  // todo list state
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([{ id: uuid(), content: 'react를 배워봅시다.' }]);

  // todo state change
  const todoChangeHandler = (event) => {
    setTodo(event.target.value)
  }

  // 추가하기 버튼(todoList에 추가)
  const addBtnHandler = () => {
    const newTodo = {id: uuid(), content : todo};

    setTodoList([...todoList, newTodo])

    setTodo('')
  }

  return (
    <>
      <div className='input-stage'>
        <input value={todo} onChange={todoChangeHandler} />
        <button onClick={addBtnHandler}>추가하기</button>
      </div>
      <h1 className='title'>Todo List</h1>
      <div className='todo-container'>
        {
          todoList.map((item) => {
            return <TodoBox key={item.id} item={item}></TodoBox>
          })
        }
      </div>

    </>
  );
}

// todo box component
const TodoBox = ({item}) => {
  return <div key={item.id} className='todo-box'>{item.content}</div>
}

export default App;
