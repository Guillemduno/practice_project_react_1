import React from "react";
import Card from "../ui/Card";
import style from "./list.module.css";

const List = (props) => {
  return (
    <Card className={style.list}>
      <ul>
        <li>list test</li>
      </ul>
    </Card>
  );
};

export default List;
