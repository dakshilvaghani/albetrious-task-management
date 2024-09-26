import React from "react";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="my-4">
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default DatePicker;
