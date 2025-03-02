import { useNavigate } from "react-router-dom";

/**
 * DevBtn Component
 * ----------------
 * A button that navigates the user to the "/developers" route when clicked.
 *
 * Functionality:
 * - Uses the `useNavigate` hook from React Router for client-side navigation.
 * - Scrolls to the top smoothly after navigation.
 */
const DevBtn = () => {
  const navigate = useNavigate(); // Initialize navigate function for routing

  const handleClick = () => {
    navigate("/developers");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Button with a click event to navigate and scroll to top
    <button className="dev-btn" onClick={handleClick}>
      Developers
    </button>
  );
};

export default DevBtn; // Exporting the button component for use in other parts of the app
