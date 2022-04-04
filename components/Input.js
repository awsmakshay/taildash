const Input = (props) => {
  return (
    <input
      {...props}
      className="w-full p-3 pr-12 text-sm border-gray-200 rounded-md shadow-sm focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-300"
    />
  );
};

export default Input;
