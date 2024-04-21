// import React from "react"
// import { Route, Navigate} from "react-router-dom"
// import { useAuth } from "../ContextApi/Auth"

// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth()

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser ? <Component {...props} /> : <Navigate to="/login" />
//       }}
//     ></Route>
//   )
// }

// import React from "react";
// import { Route,Routes ,Navigate } from "react-router-dom";
// import { useAuth } from "../ContextApi/Auth";

// export default function PrivateRoute({ children, ...rest }) {
//   const { currentUser } = useAuth();

//   return (
//     <Routes>
//     <Route
//       {...rest}
//       element={currentUser ? children : <Navigate to="/login" />}
//     />
//     </Routes>
//   );
// }

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../ContextApi/Auth";

export default function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}
