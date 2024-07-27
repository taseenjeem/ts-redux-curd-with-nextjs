"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  decrement,
  increment,
  incrementByValue,
} from "@/redux/features/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);

  return (
    <>
      <section className="min-h-screen w-full flex items-center justify-center">
        <div>
          <button
            className="bg-white hover:bg-gray-300 duration-300 text-black mx-2 p-2"
            onClick={() => dispatch(increment())}
          >
            Increase +
          </button>
          <button
            className="bg-white hover:bg-gray-300 duration-300 text-black mx-2 p-2"
            onClick={() => dispatch(incrementByValue(10))}
          >
            Increase by 10 +
          </button>
          <span className="mx-10">{value}</span>
          <button
            className="bg-white hover:bg-gray-300 duration-300 text-black mx-2 p-2"
            onClick={() => dispatch(decrement())}
          >
            Decrease -
          </button>
        </div>
      </section>
    </>
  );
};

export default Counter;
