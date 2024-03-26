import { UserProvider } from "./fetch";

const AppProvider = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppProvider;
