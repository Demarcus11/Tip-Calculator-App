import Button from "./Button.jsx";

export default function Result({ tipAmount, total, handleResetClick }) {
  return (
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
          <p className="text-2xl text-clr-primary-400 lg:text-4xl" id="total">
            $
            {isNaN(total.toFixed(2)) || total === Infinity
              ? "0.00"
              : total.toFixed(2)}
          </p>
        </div>
      </div>

      <Button handleResetClick={handleResetClick} text="Reset" />
    </div>
  );
}
