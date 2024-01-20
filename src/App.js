import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [findUser, setFindUser] = useState('');

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  useEffect(() => {
    async function jsondata() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const changeData = await res.data;
        const fUser = await changeData.filter((name) => name.username.includes(user));
        setFindUser(fUser);
      } catch (error) {
        console.log(error);
      }
    }
    jsondata();
  }, [user]);

  const findData = () => {
    if (user === findUser) {
      console.log(findUser);
    }
  };

  return (
    <div className="App">
      <input value={user} onChange={handleUser} placeholder="이름을 입력해주세요"></input>
      <button onClick={findData}>확인</button>
    </div>
  );
}

export default App;
