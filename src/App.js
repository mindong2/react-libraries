import Counter from "./pages/statement/RTKCounter";
import Counter2 from "./pages/statement/RTKCounter2";

function App() {
  return (
    <>
      {/* 전역에서 counter가 관리된다 */}
      <Counter />
      <Counter2 />
    </>
  );
}

export default App;
