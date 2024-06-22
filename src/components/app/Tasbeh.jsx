import "../app/Tasbeh.scss";
import React, { useState, useEffect, useRef } from 'react';
import tasbehImg from "../../images/tasbeh.png";
import ringtone from '../../music/ringtone.mp3';

const Tasbeh = () => {
  const [count, setCount] = useState(0);
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (count === 33 || count === 66 || count === 99) {
      playSound();
    }

    if (count === 34 || count === 67 || count === 0) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Musiqani boshidan boshlash
      }
    }
  }, [count]);

  const addBtn = () => {
    setCount(prevCount => (prevCount + 1) % 100); // 99 dan oshganda 0 ga qaytarish uchun
  }

  const deleteBtn = () => {
    setCount(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }

  return (
    <div className='container'> 
      <img src={tasbehImg} alt="Tasbeh" />

      <p className='screen'>{count}</p>

      <button className='addBtn' onClick={addBtn}></button>

      <button className='deleteBtn' onClick={deleteBtn}></button>

      <audio ref={audioRef} src={ringtone} />
    </div>
  );
}

export default Tasbeh;