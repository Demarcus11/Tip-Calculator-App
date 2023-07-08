export default function Tips({
  TIPS,
  handleCustomTipChange,
  handleTipChange,
  selectedId,
  customTip,
}) {
  return (
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
          {TIPS.map((tip, index) => {
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
              value={customTip}
              onChange={handleCustomTipChange}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}
