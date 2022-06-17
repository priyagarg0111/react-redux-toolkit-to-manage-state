import React from 'react';
import { counterActions } from '../store/index';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const isShow = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(10));
  };

  return (
    <div className={classes.counter}>
      <h1 className={classes.mainHeading}>Redux Counter</h1>
      {isShow && <h2 className={classes.subHeading}>{count}</h2>}
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={increaseHandler}>+ by 5</button>
      <button onClick={decreaseHandler}>- by 10</button>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </div>
  );
};

export default Counter;
