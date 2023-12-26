// 참고 https://velog.io/@easyhoon119/React%EC%97%90%EC%84%9C-MSW-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
// https://mswjs.io/
// npx msw init public/ --save

// api 테스트를 진행 할 수 있고, 후에 백엔드 api가 완성되었을때도 코드를 크게 바꾸지 않아도 되어 편하다
// 서비스 워커 사용: 네트워크 호출 인터셉트하는 방식
import { useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Mocking = () => {
  const Item = ({ name, email }) => {
    return (
      <li>
        이름은 {name}, 이메일은 {email}입니다.
      </li>
    );
  };
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [mswName, setMswName] = useState([]);
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(`오류가 발생했습니다: ${err}`));
  };

  const getMswData = () => {
    fetch("/users")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(`오류가 발생했습니다: ${err}`));
  };

  const getMswNameData = () => {
    fetch("/name")
      .then((res) => res.json())
      .then((json) => setMswName(json))
      .catch((err) => setError(`오류가 발생했습니다: ${err}`));
  };
  return (
    <>
      {error ? <p>{error}</p> : null}
      <button onClick={getData}>데이터 받아오기</button>
      <button onClick={getMswData}>msw로 데이터 받아보기</button>
      <button onClick={getMswNameData}>msw로 이름데이터 받아보기</button>

      <ul>{data ? data.map((user) => <Item key={user.id} name={user.name} email={user.email} />) : null}</ul>
      <ul>{mswName ? mswName.map((name) => <Item key={name.id} name={name.name} email={name.email} />) : null}</ul>
    </>
  );
};

export default Mocking;
