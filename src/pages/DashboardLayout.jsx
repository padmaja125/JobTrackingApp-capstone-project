import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import { createContext, useContext, useState } from "react";

//create global context to send props to the child components

const DashboardContext = createContext();

const DashboardLayout = () => {
  //temp variables or placeholders
  const user = { name: "john" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // arrow function to toggle btwn dark and white
  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
    setIsDarkTheme(!isDarkTheme);
  };

  //arrow function to toggle small and big sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  //arrow function to show username or not
  const logoutUser = async () => {
    console.log("logout User");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <BigSidebar />
          <SmallSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

//export the custom hook
export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export default DashboardLayout;
