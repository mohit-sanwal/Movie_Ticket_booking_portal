import React from "react";
import { Redirect, Route } from "react-router-dom";
import { LOCAL_STORAGE_DATA } from "../../constants";


const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = 123
    return <Route {...rest} render={(props) => (
        user !== null
            ? <Component {...props} user={user} />
            : <Redirect to='/' />
        )}
    />
}

export default  PrivateRoute;



// export default function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }
