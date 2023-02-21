import React from 'react';
import { useSpring, animated } from 'react-spring';
import './background.css';

const colors = [
  ['#ffeb3b', '#fbc02d', '#f57f17'], // yellow-orange
  ['#00bcd4', '#26c6da', '#4dd0e1'], // teal
  ['#9c27b0', '#ab47bc', '#ba68c8'], // purple
];

const Background = () => {
  const [index, setIndex] = React.useState(0);

  // Define the color transitions using an array of colors and the index state variable
  const { background } = useSpring({
    from: { background: colors[0].join(', ') },
    to: { background: colors[index % colors.length].join(', ') },
    config: { duration: 5000 },
  });

  // Change the color index every 5 seconds
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => index + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return <animated.div className="background" style={{ background }} />;
};

export default Background;