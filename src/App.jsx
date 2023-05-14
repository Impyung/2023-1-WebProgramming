import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [row, setRow] = useState([]);

  useEffect(() => {
    console.log('mount or update');

    return () => {
      console.log('내용이 지워짐');
    };
  });

  useEffect(() => {
    console.log('mount only');
  }, []);

  useEffect(() => {
    console.log('update only', row);
  }, [row]);

  const btn = () => {
    fetch(
      'http://openapi.seoul.go.kr:8088/45426a744570797539356a4f4b6956/json/RealtimeCityAir/1/25/'
    ).then(function (res2) {
      res2.json().then(function (res3) {
        setRow(res3.RealtimeCityAir.row);
      });
    });
  };

  // function alter(value) {
  //   return isNaN(value) || value === 0 ? '-' : value;
  // }

  return (
    <>
      <h1>미세먼지</h1>
      <button onClick={btn}>API 호출</button>
      <table>
        <thead>
          <tr>
            <th>권역</th>
            <th>이름</th>
            <th>PM10</th>
            <th>O3</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {row.map((gu, idx) => (
            <tr key={idx}>
              <td>{gu.MSRRGN_NM}</td>
              <td>{gu.MSRSTE_NM}</td>
              <td>{gu.PM10}</td>
              <td>{gu.O3}</td>
              <td>{gu.IDEX_NM}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
