// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../ContextApi/Auth"
// import { Link, useHistory } from "react-router-dom"

// export default function UpdateProfile() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { currentUser, updatePassword, updateEmail } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()

//   function handleSubmit(e) {
//     e.preventDefault()
//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match")
//     }

//     const promises = []
//     setLoading(true)
//     setError("")

//     if (emailRef.current.value !== currentUser.email) {
//       promises.push(updateEmail(emailRef.current.value))
//     }
//     if (passwordRef.current.value) {
//       promises.push(updatePassword(passwordRef.current.value))
//     }

//     Promise.all(promises)
//       .then(() => {
//         history.push("/")
//       })
//       .catch(() => {
//         setError("Failed to update account")
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Update Profile</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 ref={emailRef}
//                 required
//                 defaultValue={currentUser.email}
//               />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordRef}
//                 placeholder="Leave blank to keep the same"
//               />
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Password Confirmation</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordConfirmRef}
//                 placeholder="Leave blank to keep the same"
//               />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Update
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         <Link to="/">Cancel</Link>
//       </div>
//     </>
//   )
// }

import React, { useRef, useState } from "react";
import { useAuth } from "../ContextApi/Auth";
import { Link,useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-center mb-4 text-xl font-semibold">Update Profile</h2>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="w-full border rounded-lg px-3 py-2"
            required
            defaultValue={currentUser.email}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Leave blank to keep the same"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password-confirm">Password Confirmation</label>
          <input
            type="password"
            id="password-confirm"
            ref={passwordConfirmRef}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Leave blank to keep the same"
          />
        </div>
        <button
          disabled={loading}
          className="w-full bg-blue-500 text-white rounded-lg px-4 py-2"
          type="submit"
        >
          Update
        </button>
      </form>
      <div className="text-center mt-2">
        <Link to="/" className="text-blue-500">Cancel</Link>
      </div>
    </div>
  );
}
