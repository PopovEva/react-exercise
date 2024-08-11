import React, { useState, useEffect } from "react";
import RandomColorButton from "./RandomColorButton";
import MovingButton from "./MovingButton";
import InputUser from "./InputUser";
import SuperMarket from "./SuperMarket";
import Market2 from "./Market2";
import Useeffect from "./Useeffect";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>Please wait...</div>
    );
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <RandomColorButton />
      <MovingButton />
      <InputUser></InputUser>
      <SuperMarket></SuperMarket>
      <Market2></Market2>
      <Useeffect></Useeffect>
    </div>
  );
};

export default App;
