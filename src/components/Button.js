import React from "react";

const Button = ({ symbol, id, onClick, className, style }) => {
  return (
    <div>
      <button
        className={className ? `${className}` : null}
        onClick={onClick}
        id={id}
        value={symbol}
        style={style ? style : null}
      >
        {symbol}
      </button>
    </div>
  );
};

export default Button;
