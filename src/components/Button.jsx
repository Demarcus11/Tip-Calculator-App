export default function Button({ handleResetClick, text }) {
  return (
    <button
      className="mt-8 w-full cursor-pointer rounded bg-clr-primary-400 pb-1.5 pt-2 uppercase text-clr-nuetral-600 transition-all hover:bg-clr-primary-300 lg:pb-3 lg:pt-3"
      onClick={handleResetClick}
    >
      {text}
    </button>
  );
}
