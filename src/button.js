import React, { useState } from 'react';
import { useSpring, useSprings, useTrail, animated } from 'react-spring';
import './button.css';

function Button() {
  const [clicked, setClicked] = useState(false);

  const buttonProps = useSpring({
    background: clicked ? 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)' : 'linear-gradient(to right, #72c4e8, #98c08f, #f9a05c)',
    config: { tension: 150, friction: 10 }
  });

  const sparkleProps = useTrail(5, {
    transform: clicked ? 'translate3d(0,0,0)' : 'translate3d(50px, 0, 0)',
    opacity: clicked ? 1 : 0,
    from: { opacity: 0, transform: 'translate3d(50px, 0, 0)' },
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  const particleProps = useSprings(3, Array.from({ length: 3 }).map(() => ({
    from: { opacity: 0, transform: 'translate3d(0,0,0)' },
    to: async (next) => {
      await next({ opacity: 1, transform: 'translate3d(0,-100px,0)' });
      await next({ opacity: 0, transform: 'translate3d(0,0,0)' });
    },
    delay: 100,
    config: { mass: 5, tension: 2000, friction: 200 },
  })));

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <animated.button style={buttonProps} onClick={handleClick}>
      <span>Click me!</span>
      <div className="sparkles">
        {sparkleProps.map((props, i) => (
          <animated.div key={i} style={props} />
        ))}
      </div>
      <div className="particles">
        {particleProps.map((props, i) => (
          <animated.div key={i} className="particle" style={props} />
        ))}
      </div>
    </animated.button>
  );
}

export default Button;