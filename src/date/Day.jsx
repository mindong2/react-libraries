import dayjs from "dayjs";

const Day = () => {
  const day = dayjs();
  const afterWeekDay = dayjs().add(1, "week");
  return (
    <>
      <h1>Day.js</h1>

      <p>{day.format()}</p>
      <p>{afterWeekDay.format()}</p>
    </>
  );
};

export default Day;
