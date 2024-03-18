function Button({ children }) {
  return (
    <button className="w-64 mb-4  dark:text-white bg-gradient-to-r hover:bg-gradient-to-t font-medium from-red-500 to-pink-300 rounded-xl drop-shadow-2xl px-4 py-2 transition-all duration-500">
      {children}
    </button>
  );
}

export default Button;
