import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, auth, getUser} from "./app/feature/AuthSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(addUser(user));
      dispatch(getUser(user.email))
    } else {
    }
  });

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
