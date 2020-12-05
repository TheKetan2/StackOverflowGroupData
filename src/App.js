import React, { useState, useEffect } from "react";
import "./style.css";
const data = [
  ["Poorna", 11000.0],
  ["Kumar", 2900.0],
  ["Ashok", 20000.0],
  ["Kumar", 3020.0],
  ["Poorna", 15000.0]
];
export default function App() {
  const [initialData, setInitialData] = useState(data);
  const [group, setGroup] = useState([]);

  const groupData = () => {
    let sol = {};

    for (let a of initialData) {
      if (sol[a[0]]) {
        sol[a[0]] += a[1];
      } else {
        sol[a[0]] = a[1];
      }
    }
    setGroup(Object.entries(sol));
  };

  useEffect(() => {
    groupData();
  }, []);

  return (
    <div>
      <table>
        <tr>
          {" "}
          <th>Name</th>
          <th>Amount</th>
        </tr>
        {initialData.map(d => (
          <tr>
            {" "}
            <td>{d[0]}</td>
            <td>{d[1]}</td>
          </tr>
        ))}
      </table>
      <h2>Grouped data</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Amount</th>
        </tr>
        {group &&
          group.map(d => (
            <tr>
              <td>{d[0]}</td>
              <td>{d[1]}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
