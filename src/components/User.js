import { useEffect, useState } from "react";

const User = (props) => {
  console.log(props);
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Useffect Timer activated ");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const { name, email, designation } = props;
  return (
    <div>
      <h2>Count: {count}</h2>
      <h1>{name}</h1>
      <h2>{designation}</h2>
      <h3>{email}</h3>
      <button
        onClick={() => {
          setCount(count++);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default User;
