"use client";

import DatePicker from "react-datepicker";
import { BiMinus, BiPlus } from "react-icons/bi";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { addDays, addMonths } from "date-fns";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(startDate, 3));
  const [participants, setParticipants] = useState(1);
  //   const [dateRange, setDateRange] = useState([null, null]);
  //   const [startDate, endDate] = dateRange;

  const handleDecrement = () => {
    if (participants === 0) return;
    setParticipants((prev) => prev - 1);
  };

  const handleIncrement = () => {
    if (participants >= 20) return;
    setParticipants((prev) => prev + 1);
  };

  const onChange = (dates: any) => {
    const [start] = dates;
    setStartDate(start);
    setEndDate(addDays(start, 3));
  };

  return (
    <form className="flex flex-col gap-4">
      <DatePicker
        selected={startDate}
        onChange={onChange}
        className="min-w-full rounded-md p-2 text-xl text-third"
        // calendarIconClassName="text-xl"
        placeholderText="Select Date"
        selectsRange
        // showIcon
        minDate={new Date()}
        startDate={startDate}
        endDate={endDate}
        maxDate={addMonths(new Date(), 8)}
        wrapperClassName="min-w-full"
      />
      <div className="flex items-center gap-2">
        <label className="rounded-xl bg-primary px-4 py-2 text-secondary">
          <input type="radio" value="Private" className="hidden" /> Private
        </label>
        <label className="rounded-xl bg-primary px-4 py-2 text-secondary">
          <input type="radio" value="Joiners" className="hidden" /> Joiners
        </label>
      </div>
      <label className="flex items-center justify-between">
        Participants
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleDecrement}
            className="rounded-full bg-primary p-2 text-secondary"
          >
            <BiMinus />
          </button>
          <input
            type="number"
            value={participants}
            onChange={(e) => setParticipants(Number(e.target.value))}
            // disabled
            className="flex w-7 justify-center text-center"
          />
          <button
            type="button"
            onClick={handleIncrement}
            className="rounded-full bg-primary p-2 text-secondary"
          >
            <BiPlus />
          </button>
        </div>
      </label>
      <label>
        Notes
        <textarea
          name=""
          id=""
          className="h-36 w-full rounded-md p-2"
        ></textarea>
      </label>
      <div className="flex items-center justify-between bg-primary p-4 text-3xl font-semibold text-secondary">
        <span>TOTAL</span> <p>50,000</p>
      </div>
      <button className="w-full rounded-full bg-third p-4 font-bold uppercase tracking-widest text-secondary">
        BOOK THIS TRIP
      </button>
    </form>
  );
};

export default Form;
