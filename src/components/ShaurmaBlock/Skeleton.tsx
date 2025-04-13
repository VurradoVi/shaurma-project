const Skeleton = () => {
  return (
    <div className="flex flex-col items-center w-2xs animate-pulse">
      <div className="size-64 bg-gray-200 rounded"></div>
      <h4 className="mb-3 mt-2.5 w-50 h-6 rounded bg-gray-200"></h4>
      <div className="bg-gray-200 rounded-xl w-70 h-15">
        <div className="font-bold">
          <div className="flex justify-around items-center px-2 py-2.5"></div>
          <div className="flex items-center justify-around px-2 pb-2.5"></div>
        </div>
      </div>
      <div className="flex items-center justify-around w-full mt-4">
        <h4 className="w-20 h-10 rounded bg-gray-200"></h4>
        <button className="w-30 h-10 rounded-2xl bg-gray-200"></button>
      </div>
    </div>
  );
};

export default Skeleton;
