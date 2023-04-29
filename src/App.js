import './App.css';

function App() {
  return (
    <>
      <div className='input-stage'>
        <input /> 
        <button>추가하기</button>
      </div>
      <h1 className='title'>Todo List</h1>
      <div className='todo-container'>
        <div className='todo-box'>react를 배워봅시다.</div>
        <div className='todo-box'>내용</div>
      </div>

    </>
  );
}

export default App;
