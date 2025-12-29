export default function Toast({ show, message }) {
  return (
    <div
      className={`fixed left-1/2 bottom-8 -translate-x-1/2 z-[1001]
        min-w-[260px] max-w-[90%]
        bg-slate-800 text-white text-center
        px-6 py-4 rounded shadow-lg
        border-l-4 border-orange-500
        transition-all duration-500
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      {message}
    </div>
  );
}
