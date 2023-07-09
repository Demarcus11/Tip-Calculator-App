import { useState } from "react";
import Result from "./components/Result.jsx";
import Form from "./components/Form.jsx";

const TIPS = [
  { amount: 0.05, id: 0 },
  { amount: 0.1, id: 1 },
  { amount: 0.15, id: 2 },
  { amount: 0.25, id: 3 },
  { amount: 0.5, id: 4 },
];

export default function App() {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [customTip, setCustomTip] = useState("");
  const [selectedId, setSelectedId] = useState(0);

  // Reactives
  let selectedTip =
    customTip !== ""
      ? { amount: parseFloat(customTip) / 100, id: -1 }
      : TIPS.find((tip) => tip.id === selectedId); // selectedTip will be updated when selectedId changes, if custom tip is inputted create a new object for it and give it an amount
  let tipAmount = (selectedTip.amount * bill) / numberOfPeople; // tipAmount will be updated when selectedTip,bill, and numberOfPeople change
  let total = Number(bill) / Number(numberOfPeople) + Number(tipAmount); // total will be updated when bill,tipAmount, and numberOfPeople change

  // Functions

  // Sets the selected tip index as new selectedId
  function handleTipChange(id) {
    setSelectedId(id);
    setCustomTip("");
  }

  function handleCustomTipChange(e) {
    let value = e.target.value;

    setCustomTip(value);
    if (value !== "") {
      setSelectedId(null);
    } else {
      setSelectedId(0);
    }
  }

  function handleResetClick() {
    setSelectedId(0);
    setCustomTip("");
    setBill(0);
    setNumberOfPeople(1);
  }

  return (
    <>
      <h1 className="grid place-content-center py-8">
        <img src="images/logo.svg" alt="" />
      </h1>
      <main className="grid max-w-4xl gap-8 rounded-3xl bg-clr-nuetral-100 p-8 lg:grid-cols-2">
        <Form
          bill={bill}
          setBill={setBill}
          TIPS={TIPS}
          handleCustomTipChange={handleCustomTipChange}
          handleTipChange={handleTipChange}
          selectedId={selectedId}
          customTip={customTip}
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
        />

        <Result
          tipAmount={tipAmount}
          total={total}
          handleResetClick={handleResetClick}
        />
      </main>
    </>
  );
}
