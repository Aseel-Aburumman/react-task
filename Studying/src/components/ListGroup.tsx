// import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  const items = ["joradn", "amman", "aqaba", "ny", "lv"];
  //   let selectedIndex = 0; //-1 no item is selceted , if we put it a 0 so that mean the first one is selected
  // hook -> how we tell the app the we have components that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0];//variable (selectedIndex)
  //   arr[1];//updater function

  // EVENT HANDLER
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}

      </ul>
    </>
  );
}

export default ListGroup;
