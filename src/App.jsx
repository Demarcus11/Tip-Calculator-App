export default function App() {
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
                <div className="relative">
                  <input
                    type="radio"
                    name="tips"
                    className="tips hidden"
                    value="5%"
                    id="tip-5%"
                  />
                  <label
                    htmlFor="tip-5%"
                    className="flex min-h-[3rem] cursor-pointer items-center justify-center rounded bg-clr-nuetral-600 font-space-mono text-clr-nuetral-200 transition duration-300 ease-in-out hover:bg-clr-primary-300 hover:text-clr-nuetral-600"
                  >
                    <span className="tip-button" aria-hidden="true">
                      5%
                    </span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="radio"
                    name="tips"
                    className="tips hidden"
                    value="10%"
                    id="tip-10%"
                  />
                  <label
                    htmlFor="tip-10%"
                    className="flex min-h-[3rem] cursor-pointer items-center justify-center rounded bg-clr-nuetral-600 font-space-mono text-clr-nuetral-200 transition duration-300 ease-in-out hover:bg-clr-primary-300 hover:text-clr-nuetral-600"
                  >
                    <span className="tip-button" aria-hidden="true">
                      10%
                    </span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="radio"
                    name="tips"
                    className="tips hidden"
                    value="15%"
                    id="tip-15%"
                  />
                  <label
                    htmlFor="tip-15%"
                    className="flex min-h-[3rem] cursor-pointer items-center justify-center rounded bg-clr-nuetral-600 font-space-mono text-clr-nuetral-200 transition duration-300 ease-in-out hover:bg-clr-primary-300 hover:text-clr-nuetral-600"
                  >
                    <span className="tip-button" aria-hidden="true">
                      15%
                    </span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="radio"
                    name="tips"
                    className="tips hidden"
                    value="25%"
                    id="tip-25%"
                  />
                  <label
                    htmlFor="tip-25%"
                    className="flex min-h-[3rem] cursor-pointer items-center justify-center rounded bg-clr-nuetral-600 font-space-mono text-clr-nuetral-200 transition duration-300 ease-in-out hover:bg-clr-primary-300 hover:text-clr-nuetral-600"
                  >
                    <span className="tip-button" aria-hidden="true">
                      25%
                    </span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="radio"
                    name="tips"
                    className="tips hidden"
                    value="50%"
                    id="tip-50%"
                  />
                  <label
                    htmlFor="tip-50%"
                    className="flex min-h-[3rem] cursor-pointer items-center justify-center rounded bg-clr-nuetral-600 font-space-mono text-clr-nuetral-200 transition duration-300 ease-in-out hover:bg-clr-primary-300 hover:text-clr-nuetral-600"
                  >
                    <span className="tip-button" aria-hidden="true">
                      50%
                    </span>
                  </label>
                </div>

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
