import React from 'react';
import './Loader.css';

const Loading = () => {
  return (
    <div className="window">
      <div className="logo">
        <p className="top"> CodeFusion </p>
        <p className="mid"> DevMura <span>01</span></p>
        <p className="bottom"> Welcome! </p>
      </div>
      <div className="container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Loading;
