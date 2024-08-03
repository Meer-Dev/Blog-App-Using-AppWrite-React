import React, { Children } from "react";

function Button({
  Children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <Button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
      {Children}
    </Button>
  );
}

export default Button;
