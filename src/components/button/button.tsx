import React from "react";
import { ButtonProps, ButtonIconProps } from "./types";
import "./style/index.scss";
import className from "classnames";
import { classPrefix } from "../../styles/classes";

const prefix = classPrefix + "-btn";

export function ButtonIcon(props: ButtonIconProps) {
  const side = props.config?.side === "right" ? "right" : "left";
  const classes = className(`${prefix}-icon`, {
    [`${prefix}-icon-${side}`]: true,
  });
  const icon = <div className={classes}>{props.icon}</div>;
  return (
    <div className={`${prefix}-icon-wrapper`}>
      {side === "right" ? [props.children, icon] : [icon, props.children]}
    </div>
  );
}

function Button(props: ButtonProps) {
  const classes = className(`${prefix}`, {
    [`${prefix}-${props.type}`]: props.type,
    [`${prefix}-${props.size}`]: props.size,
    [`${prefix}-block`]: props.block,
    [`${prefix}-${props.shape}`]: props.shape,
    [`${prefix}-outlined`]: props.outlined,
    [`${prefix}-ghost`]: props.ghost,
  });

  const children = props.icon ? (
    <ButtonIcon icon={props.icon} config={props.iconConfig}>
      {props.children}
    </ButtonIcon>
  ) : (
    props.children
  );

  const extra = { disabled: props.disabled };

  return (
    <button className={classes} style={props.style} {...extra}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  type: "default",
  size: "md",
  shape: "square",
  fill: true,
};

ButtonIcon.defaultProps = {
  config: { side: "left" },
};

export default Button;
