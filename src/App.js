import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState('');
  const [resultUser, setResultUser] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    async function jsonData() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    jsonData();
  }, []);

  const searchUsers = () => {
    const filteredUser = users.filter((user) => user.username.includes(inputValue));
    setResultUser(filteredUser);
  };

  useEffect(() => {
    console.log(resultUser);
  }, [resultUser]);

  return (
    <div className="App">
      <input value={inputValue} onChange={handleInputValue} placeholder="이름을 입력해주세요"></input>
      <button onClick={searchUsers}>확인</button>
      <li style={{ listStyle: 'none' }}>
        {resultUser.map((user) => (
          <ol key={user.id}>{user.username}</ol>
        ))}
      </li>
    </div>
  );
}

export default App;
