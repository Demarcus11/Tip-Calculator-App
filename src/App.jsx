import { useState } from "react";

const INITIAL_TIPS = [
  { amount: 0.05, id: 0 },
  { amount: 0.1, id: 1 },
  { amount: 0.15, id: 2 },
  { amount: 0.25, id: 3 },
  { amount: 0.5, id: 4 },
];

export default function App() {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tips, setTips] = useState(INITIAL_TIPS);
  const [selectedId, setSelectedId] = useState(0);

  // Reactives
  const selectedTip = tips.find((tip) => tip.id === selectedId); // selectedTip will be updated when selectedId changes

  // Functions

  // Sets the selected tip index as new selectedId
  function handleTipChange(id) {
    setSelectedId(id);
  }

  return (
    <>
      <h1 className="grid place-content-center py-8">
        <img src="images/logo.svg" alt="" />
      </h1>
      <main className="grid max-w-4xl gap-8 rounded-3xl bg-clr-nuetral-100 p-8 lg:grid-cols-2">
        <div className="grid gap-8">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="mb-2 font-space-mono text-base text-clr-nuetral-500 empty:hidden">
                Bill
              </h2>
            </div>
            <div className="relative">
              <input
                className="w-full rounded bg-clr-nuetral-200 px-4 py-1.5 text-right font-space-mono text-clr-nuetral-600 placeholder:text-nuetral-400 focus:outline-clr-primary-400"
                type="text"
                placeholder="0.00"
                id="billInput"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
              <img
                className="absolute left-3 top-3.5"
                src="images/icon-dollar.svg"
                alt=""
              />
            </div>
          </div>

          <div>
            <h2 className="mb-2 font-space-mono text-base text-clr-nuetral-500">
              Select Tip %
            </h2>
            <fieldset aria-labelledby="tips">
              <legend className="sr-only" id="tips">
                Tips
              </legend>

              <div
                className="mt-4 grid grid-cols-2 lg:grid-cols-3 gap-4"
                role="radiogroup"
              >
                {tips.map((tip, index) => {
                  return (
                    <div className="relative" key={index}>
                      <input
                        type="radio"
                        name="tips"
                        className="tips hidden"
                        value={`${tip.amount}%`}
                        onChange={() => handleTipChange(index)}
                        id={`tip-${tip.amount}%`}
                      />
                      <label
                        htmlFor={`tip-${tip.amount}%`}
                        className={`flex min-h-[3rem] cursor-pointer items-center justify-center rounded bg-clr-nuetral-600 font-space-mono text-clr-nuetral-200 transition duration-300 ease-in-out hover:bg-clr-primary-300 hover:text-clr-nuetral-600 ${
                          selectedId === index ? "bg-clr-primary-400" : ""
                        }`}
                      >
                        <span className="tip-button" aria-hidden="true">
                          {`${tip.amount * 100}%`}
                        </span>
                      </label>
                    </div>
                  );
                })}

                <div>
                  <input
                    className="w-full rounded bg-clr-nuetral-200 px-4 py-1.5 text-right font-space-mono text-clr-nuetral-600 placeholder:text-nuetral-400 focus:outline-clr-primary-400"
                    type="text"
                    placeholder="Custom"
                    id="customInput"
                  />
                </div>
              </div>
            </fieldset>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h2 className="mb-2 font-space-mono text-base text-clr-nuetral-500 empty:hidden">
                Number of People
              </h2>
              {status === "error" && (
                <p className="text-sm text-red-500 font-space-mono empty:hidden">
                  Can't be zero
                </p>
              )}
            </div>
            <div className="relative">
              <input
                className="w-full rounded bg-clr-nuetral-200 px-4 py-1.5 text-right font-space-mono text-clr-nuetral-600 placeholder:text-nuetral-400 focus:outline-clr-primary-400"
                type="text"
                placeholder="1"
                id="numberOfPeopleInput"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
              />
              <img
                className="absolute left-3 top-3.5"
                src="images/icon-person.svg"
                alt=""
              />
            </div>
          </div>
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
                $0.00
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
                $0.00
              </p>
            </div>
          </div>

          <button className="mt-8 w-full cursor-pointer rounded bg-clr-primary-400 pb-1.5 pt-2 uppercase text-clr-nuetral-600 transition-all hover:bg-clr-primary-300 lg:pb-3 lg:pt-3">
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
