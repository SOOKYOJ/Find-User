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
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      const changeData = await res.data;
      setFindUser(changeData);
    }
    jsondata();
  }, []);

  const findData = () => {
    if (user === findUser.username) {
      console.log(findUser.name);
    } else {
      console.log('잘못 입력하였습니다.');
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
