import "./CounterDisplay.scss";

type CounterDisplayProps = {
  counter: Number;
  handleIncrementCounter: () => void;
  handleDecrementCounter: () => void;
};

const CounterDisplay = ({
  counter,
  handleIncrementCounter,
  handleDecrementCounter,
}: CounterDisplayProps) => {
  return (
    <div className="counter-display">
      <h3>Counter</h3>
      <div className="counter-display__button-container">
        <button
          className="counter-display__button counter-display__button--minus"
          onClick={handleDecrementCounter}
        >
          -
        </button>
        <h2 className="counter-display__count-number">{`${counter}`}</h2>
        <button
          className="counter-display__button counter-display__button--plus"
          onClick={handleIncrementCounter}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterDisplay;
