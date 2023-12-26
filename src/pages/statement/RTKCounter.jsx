import { useDispatch, useSelector } from "react-redux";
import { decrement, defaultCounter, increment, incrementByAmount } from "../../store/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      {counter}
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        {/* 여기서 counter가 action내의 payload */}
        <button onClick={() => dispatch(incrementByAmount(counter))}>현재 store내 counter값 만큼 더하기</button>
      </div>
      <div>
        <button onClick={() => dispatch(defaultCounter())}>초기화</button>
      </div>
    </>
  );
};

export default Counter;
