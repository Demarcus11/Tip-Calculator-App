import { useState } from "react";
import Input from "./components/Input.jsx";
import Tips from "./components/Tips.jsx";

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
        <div className="grid gap-8">
          <Input
            title="Bill"
            placeholder="0.00"
            id="billInput"
            icon="images/icon-dollar.svg"
            value={bill}
            onChange={setBill}
          />

          <Tips
            TIPS={TIPS}
            handleCustomTipChange={handleCustomTipChange}
            handleTipChange={handleTipChange}
            selectedId={selectedId}
            customTip={customTip}
          />

          <Input
            title="Number of People"
            placeholder="1"
            id="numberOfPeopleInput"
            icon="images/icon-person.svg"
            value={numberOfPeople}
            onChange={setNumberOfPeople}
            error="Can't be zero"
          />
        </div>

        <div className="flex h-full flex-col justify-between rounded-2xl bg-clr-nuetral-600 px-4 py-8 font-space-mono text-base text-clr-nuetral-200 lg:px-8 lg:py-12">
          <div className="grid gap-4 lg:gap-10">
            <div className="flex items-center justify-between">
              <p>
                Tip Amount
                <span className="mt-1 block text-xs text-clr-nuetral-400">
                  / person
                </span>
              </p>
              <p
                className="text-2xl text-clr-primary-400 lg:text-4xl"
                id="tipAmount"
              >
                $
                {isNaN(tipAmount.toFixed(2)) || tipAmount === Infinity
                  ? "0.00"
                  : tipAmount.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p>
                Total
                <span className="mt-1 block text-xs text-clr-nuetral-400">
                  / person
                </span>
              </p>
              <p
                className="text-2xl text-clr-primary-400 lg:text-4xl"
                id="total"
              >
                $
                {isNaN(total.toFixed(2)) || total === Infinity
                  ? "0.00"
                  : total.toFixed(2)}
              </p>
            </div>
          </div>

          <button
            className="mt-8 w-full cursor-pointer rounded bg-clr-primary-400 pb-1.5 pt-2 uppercase text-clr-nuetral-600 transition-all hover:bg-clr-primary-300 lg:pb-3 lg:pt-3"
            onClick={handleResetClick}
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
