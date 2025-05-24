import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'boxicons/css/boxicons.min.css';

export function CustomDatePicker({ label, id, selectedDate, onChange }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <label htmlFor={id}>{label}</label>
      <div className="datepicker-wrapper">
        <DatePicker
          id={id}
          selected={selectedDate}
          onChange={onChange}
          showIcon
        />
      </div>
    </div>
  );
}
