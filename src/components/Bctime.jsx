import { useEffect, useState } from "react";

function BCtime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date()
    );
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <p><h3>
      This is the current time:{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
      </h3>
    </p>
  );
}

export default BCtime;
