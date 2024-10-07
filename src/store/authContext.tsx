import { createContext, PropsWithChildren, useContext, useState } from "react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  isAdmin: boolean;
};

const testUser: User = {
  firstName: "test",
  lastName: "user",
  email: "test",
  userId: "test",
  // isAdmin: false,
  isAdmin: true,
};

// Create the AuthContext
export const AuthContext = createContext<{
  user: User | null;
  loginUser: () => void;
  logoutUser: () => void;
}>({
  user: null,
  loginUser: () => { },
  logoutUser: () => { },
});

// AuthContextProvider component
export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(testUser);

  const loginUser = () => {
    setUser(testUser);
  };

  const logoutUser = () => {
    setUser(null);
  };

  const authContextValues = {
    user,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider",
    );
  }

  return authContext;
};
