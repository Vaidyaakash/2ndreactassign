import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import Result from './Submit'
import './Style.css'

function App() {

  const [nameInput, setNameInput] = useState();
  const [dept, setDeptInput] = useState();
  const [rate, setRateInput] = useState();

  const [data, setData] = useState([]);


  const formSubmit = (e) => {
    e.preventDefault();
    setData([{ name: nameInput, department: dept, rating: rate, id: uuidv1()},
      ...data]);
      setNameInput('');
      setDeptInput('');
      setRateInput(0);
};


  return (
    <>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form className="inputs" onSubmit={formSubmit}>

        <span>Name :
          <input
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
            className="input_width"
            type='text'
            required /></span>
        <span className="width">Department :
          <input
            onChange={(e) => setDeptInput(e.target.value)}
            value={dept}
            className="input_width"
            type='text'
            required /></span>
        <span>Rating :
          <input
            onChange={(e) => setRateInput(e.target.value)}
            value={rate}
            className="input_width"
            type='number' 
            required
            max={10}
            min={0}/></span>
        <input
          className="submit"
          type='submit'
        />
      </form>
      <div className="parent_result">
        <div className="result">
           <Result submitData={data} />
        </div>
      </div>
    </>
  );
}

export default App;
