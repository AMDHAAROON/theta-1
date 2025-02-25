import { useNavigate } from "react-router-dom";

/**
 * DevBtn Component
 * ----------------
 * A button that navigates the user to the "/developers" route when clicked.
 *
 * Functionality:
 * - Uses the `useNavigate` hook from React Router for client-side navigation.
 * - On button click, the user is redirected to the Developers page.
 */
const DevBtn = () => {
  const navigate = useNavigate(); // Initialize navigate function for routing

  return (
    // Button with a click event to navigate to "/developers"
    <button className="dev-btn" onClick={() => navigate("/developers")}>
      Developers
    </button>
  );
};

export default DevBtn; // Exporting the button component for use in other parts of the app
