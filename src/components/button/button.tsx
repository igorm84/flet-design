import React from "react";
import classNames from "classnames";
import { classPrefix } from "../style/classes";
import { ButtonProps, ButtonIconProps } from "./types";
import "./style/index.scss";
import { LoadingIcon } from "..";

const prefix = classPrefix + "-btn";

export function ButtonIcon(props: ButtonIconProps) {
  const side = props.config?.side === "right" ? "right" : "left";
  const classes = classNames(`${prefix}-icon`, {
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
  const classes = classNames(`${prefix}`, {
    [`${prefix}-${props.type}`]: props.type,
    [`${prefix}-${props.size}`]: props.size,
    [`${prefix}-block`]: props.block,
    [`${prefix}-${props.shape}`]: props.shape,
    [`${prefix}-outlined`]: props.outlined,
    [`${prefix}-ghost`]: props.ghost,
    [`${prefix}-loading`]: props.loading,
    ...(props.className ? { [`${props.className}`]: props.className } : {}),
  });
  const iconProp = props.loading ? (
    <LoadingIcon style={{ marginLeft: -4, marginRight: 2, fontSize: 14 }} />
  ) : (
    props.icon
  );
  const children = iconProp ? (
    <ButtonIcon icon={iconProp} config={props.iconConfig}>
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
