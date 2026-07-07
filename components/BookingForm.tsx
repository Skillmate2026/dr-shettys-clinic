"use client";

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from '@formspree/react';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [isClient, setIsClient] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // TODO: Replace 'YOUR_FORM_ID' with actual Formspree ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID"); 

  const availableTimeSlots = [
    "06:00 PM", "06:30 PM", "07:00 PM", 
    "07:30 PM", "08:00 PM", "08:30 PM", 
    "09:00 PM", "09:30 PM"
  ];

  // Fixes the "Loading..." bug by properly ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isPastSlot = (timeString: string, selectedDate: Date) => {
    const now = new Date();
    if (
      selectedDate.getFullYear() !== now.getFullYear() ||
      selectedDate.getMonth() !== now.getMonth() ||
      selectedDate.getDate() !== now.getDate()
    ) {
      return false;
    }

    const [time, modifier] = timeString.split(' ');
    let [hours, minutes] = time.split(':');
    let parsedHours = parseInt(hours, 10);
    
    if (parsedHours === 12) {
      parsedHours = modifier === 'AM' ? 0 : 12;
    } else if (modifier === 'PM') {
      parsedHours += 12;
    }

    const slotTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parsedHours, parseInt(minutes, 10));
    return slotTime < now;
  };

  useEffect(() => {
    if (selectedTime && isPastSlot(selectedTime, startDate)) {
      setSelectedTime(null);
    }
  }, [startDate, selectedTime]);

  const hasDisabledSlots = availableTimeSlots.some(time => isPastSlot(time, startDate));

  if (state.succeeded) {
    return (
      <div className="p-6 sm:p-8 bg-[#009ffa]/10 border-2 border-[#009ffa] text-[#001321] rounded-2xl font-bold text-center flex flex-col items-center">
        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#009ffa] mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p className="text-base sm:text-lg">Thank you! Your request has been sent.</p>
        <p className="text-xs sm:text-sm font-medium text-gray-600 mt-2">Our team will verify availability and contact you.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 relative z-10">
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="appointment_date" value={startDate.toDateString()} />
      <input type="hidden" name="appointment_time" value={selectedTime || 'No time selected'} />

      {/* 1. Patient Details */}
      <div className="space-y-3 sm:space-y-4">
        <h4 className="text-[10px] sm:text-[11px] font-bold text-[#009ffa] uppercase tracking-widest border-b pb-1.5 sm:pb-2">1. Child & Parent Details</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <input name="patient_name" type="text" placeholder="Child's Full Name" required className="w-full sm:col-span-2 px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-[#009ffa] focus:ring-2 focus:ring-[#009ffa]/20 transition-all" />
          <input name="email" type="email" placeholder="Parent's Email Address" required className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-[#009ffa] focus:ring-2 focus:ring-[#009ffa]/20 transition-all" />
          <input name="phone" type="tel" placeholder="Phone Number" required className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-[#009ffa] focus:ring-2 focus:ring-[#009ffa]/20 transition-all" />
        </div>
      </div>
      
      {/* 2. Date Selection - Only renders DatePicker after client mounts */}
      <div className="space-y-3 sm:space-y-4 flex flex-col">
        <h4 className="text-[10px] sm:text-[11px] font-bold text-[#009ffa] uppercase tracking-widest border-b pb-1.5 sm:pb-2">2. Pick a Date</h4>
        <div className="border border-gray-200 rounded-2xl p-3 sm:p-4 bg-gray-50 shadow-inner flex justify-center w-full sm:inline-block sm:w-auto overflow-hidden min-h-[250px]">
          {isClient ? (
            <DatePicker 
              selected={startDate} 
              onChange={(date: Date | null) => date && setStartDate(date)}
              minDate={new Date()}
              inline 
            />
          ) : (
            <div className="flex items-center justify-center h-full text-sm text-gray-400">Loading calendar...</div>
          )}
        </div>
      </div>

      {/* 3. Time Selection */}
      <div className="space-y-3 sm:space-y-4">
        <h4 className="text-[10px] sm:text-[11px] font-bold text-[#009ffa] uppercase tracking-widest border-b pb-1.5 sm:pb-2">3. Select a Time</h4>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
          {availableTimeSlots.map((time) => {
            const isDisabled = isPastSlot(time, startDate);
            return (
              <button
                key={time}
                type="button"
                disabled={isDisabled}
                onClick={() => setSelectedTime(time)}
                className={`py-2.5 sm:py-3 px-1 sm:px-2 rounded-xl text-xs sm:text-sm font-bold transition-all border-2 flex items-center justify-center
                  ${isDisabled 
                    ? 'bg-gray-100 border-gray-100 text-gray-400 opacity-60 cursor-not-allowed' 
                    : selectedTime === time 
                      ? 'bg-[#009ffa] border-[#009ffa] text-white shadow-md scale-[1.02] cursor-pointer' 
                      : 'bg-white border-gray-200 text-gray-600 hover:border-[#009ffa] hover:text-[#009ffa] cursor-pointer'
                  }`}
              >
                {time}
              </button>
            );
          })}
        </div>
        
        <div className="flex flex-col space-y-1 mt-1 sm:mt-2">
          {hasDisabledSlots && (
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium flex items-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
              Some slots are grayed out because that time has already passed today.
            </p>
          )}
        </div>
      </div>

      {/* Submit Area */}
      <div className="pt-5 sm:pt-6 border-t mt-6 sm:mt-8">
        <button 
          type="submit" 
          disabled={state.submitting || !selectedTime}
          className="w-full flex items-center justify-center gap-2 px-4 py-3.5 sm:py-4 bg-[#009ffa] hover:bg-[#008be0] text-white rounded-xl text-sm sm:text-base font-black transition-all shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {state.submitting 
            ? 'Sending Request...' 
            : `Confirm Booking for ${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at ${selectedTime || '...'}`
          }
        </button>
      </div>
    </form>
  );
}