import Block from './Block';

const Comparator = () => {

  return (
    <div className="flex justify-center flex-col items-center h-screen bg-gray-100">
      <div className="w-[700px] h-[600px] bg-white grid grid-cols-3">
        <div className="flex items-center justify-center">
          <input type="text" value="1" className="w-20 h-10 border-2 border-gray-300 rounded-md text-center font-bold" />
        </div>
        <div className="flex items-center justify-center">
          <button className="w-20 h-10 bg-blue-200 rounded-md m-1">Line</button>
          <button className="w-20 h-10 bg-blue-200 rounded-md m-1">Set</button>
        </div>
        <div className="flex items-center justify-center">
          <input type="text" value="10" className="w-20 h-10 border-2 border-gray-300 rounded-md text-center font-bold" />
        </div>
        <div className="flex flex-col items-center justify-center "><Block /></div>
        <div className="flex items-center justify-center text-9xl text-cyan-500"> &lt; </div>
        <div className="flex flex-col flex-col-reverse items-center justify-center">
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
          <Block />
        </div>
      </div>
    </div>
  );
};

export default Comparator;
