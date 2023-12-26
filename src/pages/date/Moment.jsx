// npm install moment --save

// moment는 용량이 매우크다
import moment from "moment";
import { useState } from "react";

const Moment = () => {
  // 데이트 추가 후 format을 해야 원하는 형식으로 출력
  const momentDate = moment();
  const [day, setDay] = useState("");
  const handleDate = (e) => {
    setDay(moment(e.target.value).format("dddd"));
  };
  return (
    <>
      <h1>Moment</h1>

      <p>{momentDate.format()}</p>
      {/* 날짜 더하기 */}
      <p>{momentDate.add(1, "hour").format()}</p>
      <p>{momentDate.add(1, "week").format("YYYY-MM-DD, h:mm:ss")}</p>
      <p>{momentDate.add(1, "week").format("dddd")}</p>

      {/* 날짜 빼기 */}
      <p>{momentDate.subtract(1, "hour").format()}</p>
      <p>{momentDate.subtract(2, "day").format()}</p>

      <div>
        생일은 무슨 요일일까?
        <div>
          <input type="date" name="date" id="date" onChange={handleDate} />
          <p>{day}</p>
        </div>
      </div>

      <br />

      <div>
        두 날짜 차이 알아보기
        <div>{moment("2023-12-17").diff(moment("2021-08-20"), "days")}</div>
      </div>
    </>
  );
};

export default Moment;
