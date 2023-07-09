import Input from "./Input.jsx";
import Tips from "./Tips.jsx";

export default function Form({
  bill,
  setBill,
  TIPS,
  handleCustomTipChange,
  handleTipChange,
  selectedId,
  customTip,
  numberOfPeople,
  setNumberOfPeople,
}) {
  return (
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
  );
}
