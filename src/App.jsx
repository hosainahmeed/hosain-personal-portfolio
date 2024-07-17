import { useState, useEffect } from "react";
import Loader from "./Loader";
import SectionResurve from "./SectionResurve";
import "./App.css";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="relative">
     {showLoader ?  <div className={`loader-container`}>
        <Loader />
      </div> : <div className={`section-container`}>
        <SectionResurve />
      </div>}
     
    </div>
  );
}

export default App;
