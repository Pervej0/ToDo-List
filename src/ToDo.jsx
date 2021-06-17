import React, { useState, useEffect, createElement } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddIcon from "@material-ui/icons/Add";
import ListItem from "./ListItem";
import EditIcon from "@material-ui/icons/Edit";

const storageData = () => {
  const Item = localStorage.getItem("Name");
  console.log("This " + Item);
  if (Item) {
    return JSON.parse(localStorage.getItem("Name"));
  } else {
    return [];
  }
};

let isClick = false;

const ToDo = () => {
  const [Input, setInput] = useState("");
  const [list, setList] = useState(storageData());
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(null);

  const UniqNum = { id: new Date().getTime().toString(), name: Input };

  const InputFun = (event) => {
    setInput(event.target.value);
  };

  const ClickFun = () => {
    if (!Input) {
      alert("Please input value on field");
    } else if (edit && Input) {
      setList(
        list.map((value) => {
          if (value.id === editValue) {
            return { ...value, name: Input };
          } else {
            return value;
          }
        })
      );
      setInput("");
      isClick = true;
      setEdit(false);
    } else {
      setList((prev) => {
        setInput("");
        isClick = true;
        return [...prev, UniqNum];
      });
    }
  };

  const ResetFun = () => {
    setList(() => {
      return [];
    });
    isClick = false;
  };

  useEffect(() => {
    const Button = localStorage.setItem("Element", "reset");
    localStorage.setItem("Name", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <div className="container-fluid text-center">
        <h1 className="text-center my-3 text-light">ToDo-Item</h1>
        <div className="border toDoField">
          <div className="mainBox p-3 d-flex align-content-center justify-content-center">
            <input
              type="text"
              name="search"
              placeholder="Enter here..."
              value={Input}
              onChange={InputFun}
            />
            {edit ? (
              <button
                type="button"
                className="d-flex align-content-center justify-content-center"
                onClick={ClickFun}
              >
                <EditIcon />
              </button>
            ) : (
              <button
                type="button"
                className="d-flex align-content-center justify-content-center"
                onClick={ClickFun}
              >
                <AddIcon />
              </button>
            )}
          </div>
          <ListItem
            valueItem={list}
            id={UniqNum.id}
            editInput={setInput}
            editLogic={setEdit}
            editVal={setEditValue}
          />
          {(() => {
            if (isClick) {
              return (
                <button className="btn btn-danger px-4 my-2" onClick={ResetFun}>
                  Reset
                </button>
              );
            }
            return null;
          })()}
        </div>
      </div>
    </>
  );
};

export default ToDo;
