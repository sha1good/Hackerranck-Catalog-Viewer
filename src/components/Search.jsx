import React, { useEffect, useRef, useState } from "react";
import { STUDENTS } from "../StudentList";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search({ onAddStudent, onAddError }) {
  const [studentName, setStudentName] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const formRef = useRef();

  // const handleChange = (event) => {
  //   setStudentInput({
  //     ...studentInput,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleClick = (event) => {
    event.preventDefault();
    const dataItem = STUDENTS.find(
      (item) => item.name.toLowerCase() === studentName.toLowerCase()
    );

    const name = dataItem?.name ? dataItem?.name : undefined;
    const validDate = dataItem?.validityDate
      ? dataItem?.validityDate
      : undefined;

    if (name === undefined && validDate === undefined) {
      return onAddError(`Sorry, ${studentName} is not a verified student!`);
    }

    const dateIsValid = checkValidity(joinDate, validDate);
    if (dateIsValid && name) {
      onAddStudent(studentName);
    } 
    if(!dateIsValid){
      onAddError(`Sorry, ${studentName}'s  validity has expired!`);
    }

    setStudentName("");
    setJoinDate("");
  };

  useEffect(() => {
    if (!onAddStudent) {
      formRef.current?.reset();
    }
  }, [onAddStudent]);

  //console.log(studentInput.studentName)
  //  console.log(joinDate)
  return (
    <div className="search">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            name="studentName"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="dateInput"
            name="joinDate"
            value={joinDate}
            onChange={(event) => setJoinDate(event.target.value)}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={handleClick}
        ref={formRef}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
