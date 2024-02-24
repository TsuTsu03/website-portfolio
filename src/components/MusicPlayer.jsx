// MusicPlayer.jsx

import React, { useState } from 'react';
import backgroundMusic from '../assets/background_music.mp3';
import { PiSpeakerSlash } from 'react-icons/pi';
import { PiSpeakerSimpleHigh } from 'react-icons/pi';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const playAudio = () => {
    const audio = document.getElementById('background-music');

    if (audio) {
      audio.play().then(() => {
        setIsPlaying(true);
        setShowModal(false);
      }).catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  const toggleMusic = () => {
    const audio = document.getElementById('background-music');

    if (audio) {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error('Error playing audio:', error);
        });
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-primary p-8 rounded-3xl text-center border-4 border-text_light">
            <h2 className="text-4xl my-4 text-text_light font-bold mb-4 ">Do you want to chill while browsing my website?</h2>
            <button
              onClick={playAudio}
              className="bg-blue-500 mt-4 text-text_light px-4 py-2 rounded-md font-bold hover:bg-blue-700"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 flex items-center space-x-4">
        <audio id="background-music" loop className="hidden">
          <source src={backgroundMusic} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <button
          id="toggle-music"
          onClick={toggleMusic}
          className="bg-transparent border-none cursor-pointer"
        >
          {isPlaying ? (
            <PiSpeakerSimpleHigh className="text-text_light text-3xl" />
          ) : (
            <PiSpeakerSlash className="text-text_light text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
