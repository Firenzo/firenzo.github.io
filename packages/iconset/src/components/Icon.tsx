import React from "react";

// if the import fails run the build script first to generate a .ts file containing this type in dist
import type { IconClassName, IconSize, IconColor } from "../../dist/getIcon";

export type IconProps = {
  icon: IconClassName;
  size?: IconSize;
  color?: IconColor;
};

const Icon = (props: IconProps) => {
  const { icon, size = 24, color = "primary" } = props;
  const classes = `${icon} icon-size-${size} icon-color-${color}`;

  return <i className={classes} aria-hidden="true" />;
};

export default Icon;
