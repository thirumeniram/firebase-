// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../ContextApi/Auth"
// import { Link } from "react-router-dom"

// export default function ForgotPassword() {
//   const emailRef = useRef()
//   const { resetPassword } = useAuth()
//   const [error, setError] = useState("")
//   const [message, setMessage] = useState("")
//   const [loading, setLoading] = useState(false)

//   async function handleSubmit(e) {
//     e.preventDefault()

//     try {
//       setMessage("")
//       setError("")
//       setLoading(true)
//       await resetPassword(emailRef.current.value)
//       setMessage("Check your inbox for further instructions")
//     } catch {
//       setError("Failed to reset password")
//     }

//     setLoading(false)
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Password Reset</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           {message && <Alert variant="success">{message}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Reset Password
//             </Button>
//           </Form>
//           <div className="w-100 text-center mt-3">
//             <Link to="/login">Login</Link>
//           </div>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Need an account? <Link to="/signup">Sign Up</Link>
//       </div>
//     </>
//   )
// }

import React, { useRef, useState } from "react";
import { useAuth } from "../ContextApi/Auth";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-center mb-4 text-xl font-semibold">Password Reset</h2>
      {error && <div className="text-red-500">{error}</div>}
      {message && <div className="text-green-500">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>
        <button
          disabled={loading}
          className="w-full bg-blue-500 text-white rounded-lg px-4 py-2"
          type="submit"
        >
          Reset Password
        </button>
      </form>
      <div className="text-center mt-3">
        <Link to="/login" className="text-blue-500">Login</Link>
      </div>
      <div className="text-center mt-2">
        Need an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
      </div>
    </div>
  );
}
