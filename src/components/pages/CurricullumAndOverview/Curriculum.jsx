import React, { useState } from 'react';
import './Curriculum.css';
export default function Curriculum() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
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
    <div className="containers">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          Curriculum
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          Schedule
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content active-content' : 'content'}
        >
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
                <span></span>
                Show
              </button>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? 'content active-content' : 'content'}
        >
          <div className="container">
            <div className="box">
              <div className="column">Schedule</div>
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
        </div>
      </div>
    </div>
  );
}
