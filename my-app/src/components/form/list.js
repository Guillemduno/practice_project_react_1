import React from "react";
import Card from "../ui/Card";
import style from "./list.module.css";

const List = (props) => {
  return (
    <Card className={style.list}>
      <ul>
        {props.listOfUsers.map((user) => {
          return (
            <li>
              {user.nom} ( {user.edad} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default List;
