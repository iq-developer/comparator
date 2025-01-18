import React, { useState } from 'react';
import './Block.css';

const Block = () => {

  return (
    <div class="container">
      <div class="cube">
        <div class="face top"></div>
        <div class="face bottom"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face front"></div>
        <div class="face back"></div>
      </div>
    </div>
  );
};

export default Block;
