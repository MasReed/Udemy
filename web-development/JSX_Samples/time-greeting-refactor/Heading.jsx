import React from 'react';

function Heading() {

  let greeting = null;
  let customStyle = {
    color: null
  };

  const nowHours = new Date().getHours();

  if (nowHours >= 0 && nowHours < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (nowHours >= 12 && nowHours < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
