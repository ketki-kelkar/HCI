import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Calender.css";

const BookNow = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [finalConfirmation, setFinalConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for validation error message
  const [bookingConfirmed, setBookingConfirmed] = useState(false); // State for booking confirmation

  const today = new Date();
  const navigate = useNavigate();

  // Function to generate the days of the month dynamically
  const generateCalendar = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendar = [];
    let dayCounter = 1;

    for (let week = 0; week < 6; week++) {
      const daysInWeek = [];
      for (let day = 0; day < 7; day++) {
        if (week === 0 && day < firstDayOfMonth) {
          daysInWeek.push(null);
        } else if (dayCounter > daysInMonth) {
          daysInWeek.push(null);
        } else {
          daysInWeek.push(dayCounter);
          dayCounter++;
        }
      }
      calendar.push(daysInWeek);
    }
    return calendar;
  };

  const handleDateClick = (day) => {
    if (day) {
      const newSelectedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      if (newSelectedDate >= today) {
        setSelectedDate(newSelectedDate);
        setSelectedTimeSlot(null);
        setErrorMessage(""); // Clear error message on valid date selection
      }
    }
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTimeSlot(time);
    setErrorMessage(""); // Clear error message on valid time selection
  };

  const handleConfirm = () => {
    if (!selectedDate || !selectedTimeSlot) {
      setErrorMessage("Please select both a date and a time slot before confirming.");
    } else {
      const formattedDate = selectedDate.toDateString();
      setConfirmationMessage(`You have successfully selected ${formattedDate} at ${selectedTimeSlot}`);
      setFinalConfirmation(true);
    }
  };

  const handleFinalConfirm = (confirm) => {
    if (confirm) {
      // If user confirms the booking
      setBookingConfirmed(true);
      setFinalConfirmation(false); // Close the final confirmation dialog
    } else {
      setConfirmationMessage(null);
      setFinalConfirmation(false); // Allow modifications
    }
  };

  const calendar = generateCalendar(currentDate);

  return (
    <div className="overall">
      <div className="booking-container">
        {!confirmationMessage && (
          <>
            <div className="calendar-container">
              <div className="calendar-header">
                <button onClick={handlePrevMonth}>&lt;</button>
                <h3>
                  {currentDate.toLocaleString("default", { month: "long" })}{" "}
                  {currentDate.getFullYear()}
                </h3>
                <button onClick={handleNextMonth}>&gt;</button>
              </div>
              <table className="calendar">
                <thead>
                  <tr>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th></tr></thead>
                <tbody>
                  {calendar.map((week, index) => (
                    <tr key={index}>
                      {week.map((day, idx) => {
                        const date = new Date(
                          currentDate.getFullYear(),
                          currentDate.getMonth(),
                          day
                        );
                        const isPast = date < today;
                        return (
                          <td
                            key={idx}
                            className={
                              day === selectedDate?.getDate() &&
                              currentDate.getMonth() === selectedDate?.getMonth()
                                ? "selected"
                                : ""
                            }
                            onClick={() => handleDateClick(day)}
                            style={{
                              color: isPast ? "#B8B8B8" : "black",
                              cursor: isPast ? "not-allowed" : "pointer",
                            }}
                          >
                            {day || ""}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="time-slot-container">
              <h2>{selectedDate ? selectedDate.toDateString() : "Select a date"}</h2>
              <p>Available Times:</p>
              <div className="time-slots">
                {[
                  "10:00 - 12:00",
                  "12:00 - 14:00",
                  "14:00 - 16:00",
                  "16:00 - 18:00",
                  "18:00 - 20:00",
                  "20:00 - 22:00",
                ].map((time, index) => (
                  <button
                    key={index}
                    className={`time-slot ${time === selectedTimeSlot ? "selected" : ""}`}
                    onClick={() => handleTimeSlotClick(time)}
                    disabled={!selectedDate}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <button className="confirm-button" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          </>
        )}

        {/* Booking Confirmed Dialog */}
        {bookingConfirmed && (
          <div className="modal-dialog">
            <div className="modal-content">
              <h2>Booking Confirmed!</h2>
              <p>Your booking for {selectedDate?.toDateString()} at {selectedTimeSlot} has been confirmed.</p>
              <button className="go-home-button" onClick={() => navigate("/")}>
                Go to Home
              </button>
            </div>
          </div>
        )}

        {/* Error Message Dialog */}
        {errorMessage && (
          <div className="modal-dialog">
            <div className="modal-content">
              <h2>Error</h2>
              <p>{errorMessage}</p>
              <button className="close-button" onClick={() => setErrorMessage("")}>
                Close
              </button>
            </div>
          </div>
        )}

        {/* Final Confirmation Dialog */}
        {confirmationMessage && finalConfirmation && (
          <div className="modal-dialog">
            <div className="modal-content">
              <p>{confirmationMessage}</p>
              <div className="final-confirmation-buttons">
                <button className="confirm-button" onClick={() => handleFinalConfirm(true)}>
                  Yes, Confirm
                </button>
                <button className="cancel-button" onClick={() => handleFinalConfirm(false)}>
                  No, Change
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookNow;
