<p align="center">
  <a href="https://flet.design">
    <img width="200" src="https://fletd.s3.amazonaws.com/fletd_vlogo.svg">
  </a>
</p>
<div align="center">
A React UI library with many solutions and components
<h3>This project is still under development</h3>
If you want to support in development, <a href="mailto:igormodesto.jf@gmail.com">mail me</a>
</div>

## Button usage

```jsx
import { Button } from "fletd";
import { FiDownloadCloud } from "react-icons/fi";

const App = () => (
  <Button
    type="primary"
    icon={<FiDownloadCloud />}
    iconConfig={{ side: "right" }}
    shape="rounded"
  >
    Download
  </Button>
);
```

### Props
```ts
export type SizeTypes = "small" | "sm" | "medium" | "md" | "large" | "lg";
export type ButtonIconConfigProps = {
  side?: "left" | "right";
};

export type ButtonIconProps = {
  icon: React.ReactNode;
  config?: ButtonIconConfigProps;
  children?: React.ReactNode;
};

export type ButtonProps = {
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default"
    | "dark";
  outlined?: boolean;
  block?: boolean;
  icon?: React.ReactNode;
  iconConfig?: ButtonIconConfigProps;
  shape?: "square" | "rounded" | "fat";
  size?: SizeTypes;
  loading?: boolean;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  children?: React.ReactNode;
} & RemoveT<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick">;
```
