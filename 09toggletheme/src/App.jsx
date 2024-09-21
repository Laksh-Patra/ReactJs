import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  //Functionality of theme changing no relationship with context

  useEffect(() => {
    // Reset classes on the html element
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);

    // Change body background and text colors based on the themeMode
    if (themeMode === 'dark') {
      document.body.classList.add('bg-black', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-black', 'text-white');
    }
    
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      
   

    
     
    <div className="flex justify-center  items-center w-max h-max">
    
      <div className="w-full">
   
      

        
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
         
         <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
        <Card/>
        </div>
        </div>
      </div>
    
   
    
    </ThemeProvider>
  );
}

export default App;
