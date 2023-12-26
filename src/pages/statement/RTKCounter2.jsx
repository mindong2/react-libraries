import { useSelector } from "react-redux";

const Counter2 = () => {
  const counter = useSelector((state) => state.counter.value);
  return <div>{counter}</div>;
};

export default Counter2;
