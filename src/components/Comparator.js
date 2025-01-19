import React, { useState } from 'react';
import Block from './Block';

const Comparator = () => {
  const [startButton, setStartButton] = useState(null);
  const [lines, setLines] = useState([]);

  const handleMouseDown = (e) => {

    const buttonId = e.target.id;

    console.log('buttonId:', buttonId);
    console.log('startButton:', startButton);




    if (startButton || !buttonId) return;

    const rect = e.target.getBoundingClientRect();

    setStartButton({ id: buttonId, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  };

  const handleMouseUp = (e) => {
    if (!startButton) return;

    const buttonId = e.target.id;
    if (!buttonId || buttonId === startButton.id) {
      setStartButton(null);
      return;
    }

    const isCorrectLine = (startButton.id === 'top1' && buttonId === 'bottom2')
      || (startButton.id === 'top2' && buttonId === 'bottom1')
      || (startButton.id === 'bottom1' && buttonId === 'top2')
      || (startButton.id === 'bottom2' && buttonId === 'top1');

    if (!isCorrectLine) {
      setStartButton(null);
      return;
    }

    const rect = e.target.getBoundingClientRect();

    const newLine = {
      start: startButton,
      end: { id: buttonId, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
    };

    console.log('newLine:', newLine);

    setLines([...lines, newLine]);
    setStartButton(null);
    alert('done');
  };

  const handleMouseMove = (e) => {
    if (!startButton) return;

    const line = document.getElementById('in-progress-line');
    line.setAttribute('x2', e.clientX);
    line.setAttribute('y2', e.clientY);
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen bg-gray-100"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {lines.map((line, index) => (
          <line key={index} x1={line.start.x} y1={line.start.y} x2={line.end.x} y2={line.end.y} stroke="#0ea5e9" strokeWidth="8" />
        ))}
        {startButton && <line id="in-progress-line" x1={startButton.x} y1={startButton.y} x2={startButton.x} y2={startButton.y} stroke="#0ea5e9" strokeWidth="8" />}
      </svg>
      <div className="w-[700px] h-[600px] bg-white grid grid-cols-3">
        <div className="flex items-center justify-center">
          <input type="text" value="1" className="w-20 h-10 border-2 border-gray-300 rounded-md text-center font-bold" />
        </div>
        <div className="flex items-center justify-center">
          <button className="w-20 h-10 bg-sky-200 rounded-md m-1">Autoline</button>
          <button className="w-20 h-10 bg-sky-200 rounded-md m-1">Options</button>
        </div>
        <div className="flex items-center justify-center">
          <input type="text" value="10" className="w-20 h-10 border-2 border-gray-300 rounded-md text-center font-bold" />
        </div>
        <div className="flex flex-col items-center justify-center ">

          <button id="bottom1" className="w-10 h-10 bg-sky-500 rounded-full m-1 text-white text-xl" onMouseDown={handleMouseDown}>►</button>
          <Block />
          <button id="top1" className="w-10 h-10 bg-sky-500 rounded-full m-1 text-white text-xl" onMouseDown={handleMouseDown}>►</button>

        </div>
        <div className="flex items-center justify-center text-9xl text-sky-500"> &lt; </div>
        <div className="flex flex-col-reverse items-center justify-center">
          <button id="bottom2" className="w-10 h-10 bg-sky-500 rounded-full m-1 text-white text-xl" onMouseDown={handleMouseDown}>◄</button>
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
          <button id="top2" className="w-10 h-10 bg-sky-500 rounded-full m-1 text-white text-xl " onMouseDown={handleMouseDown}>◄</button>
        </div>
      </div>
    </div>
  );
};

export default Comparator;
