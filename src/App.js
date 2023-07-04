import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

let newOperation = false;

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");

  function handleAddNumber(number) {
    if (newOperation) {
      setCurrentNumber(number);
      newOperation = false;
    } else {
      setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
      if (firstNumber !== "") setSecondNumber((prev) => `${prev}${number}`);
    }
  }

  function handleOperation(clicked) {
    if (firstNumber !== "") return;
    setOperation(clicked);
    setFirstNumber(currentNumber);
    setCurrentNumber((prev) => `${prev} ${clicked} `);
    newOperation = false;
  }

  function handleOnClear() {
    setCurrentNumber("0");
    newOperation = false;
    reset();
  }

  function reset() {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
  }

  function handleEquals() {
    newOperation = true;
    switch (operation) {
      case "+":
        setCurrentNumber(Number(firstNumber) + Number(secondNumber));
        reset();
        break;
      case "-":
        setCurrentNumber(Number(firstNumber) - Number(secondNumber));
        reset();
        break;
      case "x":
        setCurrentNumber(Number(firstNumber) * Number(secondNumber));
        reset();
        break;
      case "÷":
        setCurrentNumber(Number(firstNumber) / Number(secondNumber));
        reset();
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="C" onClick={handleOnClear} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>

        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="x" onClick={() => handleOperation("x")} />
          <Button label="÷" onClick={() => handleOperation("÷")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
