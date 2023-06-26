import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);
  const baseURL = 'https://64901c9c1e6aa71680ca9a2f.mockapi.io/Players';
  useEffect(() => {
    fetch(baseURL)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Club</th>
            <th>Image</th>
            <th>Clip</th>
            <th>Famous</th>
            <th>Nation</th>
            <th>Info</th>
            <th>ID</th>
            <th>Description</th>
            <th>Top</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.cost}</td>
              <td>{item.club}</td>
              <td>
                <img src={item.img} alt={item.name} style={{ width: '240px', height: '240px' }} />
              </td>
              <td>
                <a href={item.clip} target="_blank" rel="noopener noreferrer">
                  Watch
                </a>
              </td>
              <td>{item.famous ? 'Yes' : 'No'}</td>
              <td>{item.nation}</td>
              <td>{item.info}</td>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td>{item.top ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
