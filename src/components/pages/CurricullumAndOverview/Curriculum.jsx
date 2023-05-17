import React, { useState } from 'react';
import './Curriculum.css';

export default function Curriculum() {
  const [selectedYear, setSelectedYear] = useState('1st Year');
  const [selectedSemester, setSelectedSemester] = useState('Semester I');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleShowButtonClick = () => {
    alert(`You selected: ${selectedYear} - ${selectedSemester}`);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="column">Curriculum</div>
        <div className="dropdown-container">
          <select
            className="dropdown"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
          <div className="gap"></div>
          <select
            className="dropdown"
            value={selectedSemester}
            onChange={handleSemesterChange}
          >
            <option value="Semester I">Semester I</option>
            <option value="Semester II">Semester II</option>
          </select>
        </div>
        <br />
        <button className="button" onClick={handleShowButtonClick}>
          Show
        </button>
      </div>
    </div>
  );
}
