import React from "react";
import classNames from "classnames";
import { AiOutlineLoading } from "react-icons/ai";
import { classPrefix } from "../style/classes";
import "./style/index.scss";
import { LoadingIconProps } from "./types";

const prefix = classPrefix + "-loading-icon";

function Icon(props: LoadingIconProps) {
  const classes = classNames(prefix);
  return (
    <div className={classes} {...props}>
      <AiOutlineLoading />
    </div>
  );
}

export default Icon;
