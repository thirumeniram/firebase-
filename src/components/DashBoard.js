// import React, { useState } from "react"
// import { Card, Button, Alert } from "react-bootstrap"
// import { useAuth } from "../ContextApi/Auth"
// import { Link, useHistory } from "react-router-dom"

// export default function Dashboard() {
//   const [error, setError] = useState("")
//   const { currentUser, logout } = useAuth()
//   const history = useHistory()

//   async function handleLogout() {
//     setError("")

//     try {
//       await logout()
//       history.push("/login")
//     } catch {
//       setError("Failed to log out")
//     }
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Profile</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <strong>Email:</strong> {currentUser.email}
//           <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
//             Update Profile
//           </Link>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         <Button variant="link" onClick={handleLogout}>
//           Log Out
//         </Button>
//       </div>
//     </>
//   )
// }

import React, { useState } from "react";
import { useAuth } from "../ContextApi/Auth";
import { Link,useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useNavigate ();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-center mb-4 text-xl font-semibold">Profile</h2>
      {error && <div className="text-red-500">{error}</div>}
      <p className="mb-4"><strong>Email:</strong> {currentUser.email}</p>
      <Link
        to="/update-profile"
        className="block bg-blue-500 text-white rounded-lg px-4 py-2 text-center"
      >
        Update Profile
      </Link>
      <div className="text-center mt-4">
        <button
          className="text-blue-500 underline"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
