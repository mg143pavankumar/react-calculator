import React, { Component } from "react";
import {
  clearStyle,
  equalsStyle,
  operatorStyle,
} from "../../constants/constants";
import Button from "../Button";

export default class Buttons extends Component {
  render() {
    return (
      <div className="allButtons">
        <Button
          symbol="AC"
          className="jumbo"
          id="clear"
          onClick={this.props.initialize}
          style={clearStyle}
        />
        <Button
          symbol="/"
          id="divide"
          onClick={this.props.operators}
          style={operatorStyle}
        />
        <Button
          symbol="x"
          id="multipy"
          onClick={this.props.operators}
          style={operatorStyle}
        />
        <Button symbol="7" id="seven" onClick={this.props.numbers} />
        <Button symbol="8" id="eight" onClick={this.props.numbers} />
        <Button symbol="9" id="nine" onClick={this.props.numbers} />
        <Button
          symbol="-"
          id="subtract"
          onClick={this.props.operators}
          style={operatorStyle}
        />
        <Button symbol="4" id="four" onClick={this.props.numbers} />
        <Button symbol="5" id="five" onClick={this.props.numbers} />
        <Button symbol="6" id="six" onClick={this.props.numbers} />

        <Button
          symbol="+"
          id="add"
          onClick={this.props.operators}
          style={operatorStyle}
        />
        <Button symbol="1" id="one" onClick={this.props.numbers} />
        <Button symbol="2" id="two" onClick={this.props.numbers} />
        <Button symbol="3" id="three" onClick={this.props.numbers} />
        <Button
          symbol="0"
          id="zero"
          className="jumbo"
          onClick={this.props.numbers}
        />
        <Button symbol="." id="decimal" onClick={this.props.decimal} />
        <Button
          symbol="="
          id="eqauls"
          onClick={this.props.evaluate}
          style={equalsStyle}
        />
      </div>
    );
  }
}
