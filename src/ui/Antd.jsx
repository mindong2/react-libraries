// npm install antd --save
// 사이트 demo https://ant.design/components/date-picker
import { DatePicker } from "antd";
import { useState } from "react";
const { RangePicker } = DatePicker;
const Antd = () => {
  const [dates, setDates] = useState([]);
  const onChange = (value) => {
    setDates(value);
  };

  return (
    <>
      <RangePicker onChange={onChange} value={dates} />
      {dates.map((v, i) => (
        <p key={i}>{v.format("YYYY-MM-DD")}</p>
      ))}

      {dates.length > 0 ? (
        <p>
          여행 날짜 : {dates[0].format("YYYY-MM-DD")}일 부터 {dates[1].format("YYYY-MM-DD")}일 까지
        </p>
      ) : null}
    </>
  );
};

export default Antd;
