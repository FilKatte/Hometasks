import React from "react";
import useFetch from "./hook";

const People = () => {
  const list = useFetch("people");

  return (
    <div>
      <div>People</div>
      {list && list.length > 0 && (
        <ul>
          {list.map(obj => (
            <li key={obj.name}>{obj.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default People;
