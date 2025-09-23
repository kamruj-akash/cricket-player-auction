const Spinner = () => {
  return (
    <div class="flex justify-center items-center">
      <div class="w-32 h-32 border-5 border-solid border-transparent rounded-full border-t-red-500 animate-spin">
        <div class="absolute inset-0 rounded-full border-5 border-t-blue-500 animate-spin"></div>
        <div class="absolute inset-0 rounded-full border-5 border-t-green-500 animate-spin animation-delay-150"></div>
        <div class="absolute inset-0 rounded-full border-5 border-t-yellow-500 animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
};

export default Spinner;
