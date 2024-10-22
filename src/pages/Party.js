import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import logo from "../images/logo.svg";
import home from "../images/home.svg";
import party from "../images/party.svg";
import "../css/party.css";

const Party = () => {
  const [showConfirmation, setShowConfirmation] = useState(false); // State to show confirmation message
  const [bookingConfirmed, setBookingConfirmed] = useState(false); // State for booking confirmation
  const navigate = useNavigate(); // useNavigate for redirection

  // Function to handle booking button click
  const handleBookClick = () => {
    setShowConfirmation(true); // Show confirmation message
  };

  // Function to handle final confirmation
  const handleConfirm = (isConfirmed) => {
    if (isConfirmed) {
      // If user confirms the booking, show the "Booking Confirmed" message
      setShowConfirmation(false); // Hide the confirmation dialog
      setBookingConfirmed(true); // Show booking confirmation message
    } else {
      // If user cancels, hide confirmation message and stay on the same page
      setShowConfirmation(false);
    }
  };

  // Function to handle navigation after confirmation
  const handleGoHome = () => {
    navigate("/"); // Redirect to home page after user sees the confirmation
  };

  return (
    <div className="party-container">
      <header className="header">
        <img src={logo} alt="logo" />
        <div className="home1">
          <a href="./">
            <img src={home} alt="home" />
          </a>
        </div>
      </header>

      <div className="party-content">
        <div className="text-content">
          <div className="party-header">
            <h1>
              December and
              <br />
              Christmas
              <br />
              Parties!
            </h1>
          </div>
          <p>
            You can see all the information you need on our poster. Party never
            stops!
          </p>
        </div>
        <div className="image-content">
          <img className="party-imag1" src={party} alt="Party-Invite" />
        </div>
      </div>

      {/* Button to book a seat in the party */}
      {!bookingConfirmed && (
        <div className="book-container">
          <button className="book-button" onClick={handleBookClick}>
            Book seat in Party
          </button>
        </div>
      )}

      {/* Confirmation message shown after clicking book button */}
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p className="dialog-text">
            Confirm booking for the party dated 25th December 2024 and timings 8pm to 2am?
          </p>
          <button className="confirm-button" onClick={() => handleConfirm(true)}>
            Yes
          </button>
          <button className="cancel-button" onClick={() => handleConfirm(false)}>
            No
          </button>
        </div>
      )}

      {/* Booking confirmed message */}
      {bookingConfirmed && (
        <div className="booking-confirmation">
          <h2 className="book1">Booking Confirmed!</h2>
          <p className="text1">Your seat for the party dated 25th December 2024 from 8pm to 2am is confirmed!</p>
          <button className="go-home-button" onClick={handleGoHome}>
            Go to Home Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Party;
