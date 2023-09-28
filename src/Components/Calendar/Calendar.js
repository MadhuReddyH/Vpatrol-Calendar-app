import "./Calendar.css";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/index";
import WeekTable from "../WeekTable/index";
import IntroModal from "../IntroOfCalendar/index";
import Footer from "../Footer/index";

function Calendar() {
  const [ShowIntroModal, setShowIntroModal] = useState(false);

  useEffect(() => {
    const hasModalBeenShown = localStorage.getItem("introModalShown");
    if (!hasModalBeenShown) {
      localStorage.setItem("introModalShown", "true");
      setShowIntroModal(true);
    }
  }, []);

  return (
    <>
      {ShowIntroModal && (
        <IntroModal onClose={() => setShowIntroModal(false)} />
      )}
      <div className="App">
        <Navbar />
        <WeekTable />
      </div>
      <Footer />
    </>
  );
}

export default Calendar;
