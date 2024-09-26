import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../redux/action";
import { increment, decrement } from "../redux/action";

export const Counter = () => {
  let count = useSelector((state) => state.count);

  let dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
};
