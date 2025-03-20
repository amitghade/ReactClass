import { createContext, useState } from "react";

const UserContext = createContext();
console.log("UserContext", UserContext);

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("");
  console.log("Children", children);
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
