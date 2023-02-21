import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function ClickableText() {
  const [isClicked, setIsClicked] = useState(false);

  const textProps = useSpring({
    opacity: isClicked ? 0 : 1,
    fontSize: isClicked ? '4rem' : '2rem',
    color: isClicked ? 'white' : 'black',
    from: { opacity: 0, fontSize: '2rem', color: 'black' },
  });

  const cloudProps = useSpring({
    opacity: isClicked ? 1 : 0,
    from: { opacity: 0 },
  });

  const bgProps = useSpring({
    from: { background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)' },
    to: async (next, cancel) => {
      while (isClicked) {
        await next({ background: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' });
        await next({ background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)' });
        await next({ background: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)' });
        await next({ background: 'linear-gradient(120deg, #667eea 0%, #764ba2 100%)' });
      }
      cancel();
    },
  });

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <animated.div onClick={handleClick} style={bgProps}>
      <animated.h1 style={textProps}>
        {isClicked ? '' : ''}
      </animated.h1>
      <animated.div style={cloudProps}>
        <span role="img" aria-label="cloud">
          ☁️
        </span>
      </animated.div>
    </animated.div>
  );
}

export default ClickableText;