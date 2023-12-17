import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilterComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div>
      <label>Start Date:</label>
      <DatePicker selected={startDate} onChange={handleStartDateChange} />

      <label>End Date:</label>
      <DatePicker selected={endDate} onChange={handleEndDateChange} />

      <p>
        Start Date: {startDate && startDate.toDateString()}
        <br />
        End Date: {endDate && endDate.toDateString()}
      </p>
    </div>
  );
};

export default DateFilterComponent;
