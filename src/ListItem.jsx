import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";

const ListItem = (props) => {
  const eraseFun = (event) => {
    const Element = document.getElementById(event);
    //  Element.remove(event);
    Element.style.backgroundColor = "#999";
    Element.style.opacity = ".2";
  };

  const editIcon = (event) => {
    const elem = document.getElementById(event);
    props.editInput(elem.textContent);
    props.editLogic(true);
    props.editVal(event);
  };

  return (
    <>
      <div className="itemBox p-4 ">
        <ul className="m-0 p-0">
          {props.valueItem.map((value) => {
            return (
              <li
                id={value.id}
                key={value.id}
                className="d-flex justify-content-between align-items-center bg-warning p-2 my-3"
              >
                <div>
                  <span>{value.name}</span>
                </div>
                <div>
                  <span
                    type="button"
                    onClick={() => {
                      editIcon(value.id);
                    }}
                  >
                    <EditIcon />
                  </span>
                  &nbsp;
                  <span
                    type="button"
                    onClick={() => {
                      eraseFun(value.id);
                    }}
                  >
                    <HighlightOffIcon />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListItem;
