// src/components/FruitList.js

import React from 'react';
import useFetch from '../Hooks/useFetch';
import { getData } from '../../api/fakeapi';


const UserList = () => {
  const { loading, data, error, refetchData} = useFetch(getData, []);

  return (
    <div style={{backgroundColor:'beige',paddingLeft:'50%' , paddingTop:'20px'}}>
      <h3 >Users</h3>

      {loading && <p style={{color:'blue'}}>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {data && data.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <button onClick={refetchData}>Reload</button>
    </div>
  );
};

export default UserList;
