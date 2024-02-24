import React from 'react';

const StarBackground = () => {
  return (
    <div className="star-background">
      {Array.from({ length: 100 }, (_, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `-${Math.random() * 5}s`, // Spread out the animation start
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
