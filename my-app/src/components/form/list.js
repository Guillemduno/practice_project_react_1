import React from "react";
import Card from "../ui/Card";
import style from "./list.module.css";

const List = (props) => {
  return (
    <Card className={style.list}>
      {/* <ul> */}
      {props.listOfUsers.map((user) => {
        return (
          // <li>
          <p>
            {user.nom} ( {user.edad} years old)
          </p>

          // </li>
        );
      })}
      {/* </ul> */}
    </Card>
  );
};

export default List;
