import React, { useState } from "react";
import CardCat from "../components/CardCat.jsx";
import '../assets/styles/month.css';

const Month = () => {
  const [month, setMonth] = useState(0);
  console.log(month);
  return (
    <div>
      <form>
        <select
          className="select-month"
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="0">Janury</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </form>
      <CardCat value={month} />
    </div>
  );
};

export default Month;
