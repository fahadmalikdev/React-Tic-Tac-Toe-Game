function Square({ value, onSquareClick }) {
  return (
    <>
      <button className="square" onClick={onSquareClick} data-value={value}>
        {value}
      </button>
    </>
  );
}

export default Square;
