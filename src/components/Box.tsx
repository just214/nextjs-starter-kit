import React from "react";
import type * as Polymorphic from "@radix-ui/react-polymorphic";

type PolymorphicBox = Polymorphic.ForwardRefComponent<"div", {}>;

export const Box = React.forwardRef(
  ({ as: Comp = "div", ...props }, forwardedRef) => (
    <Comp {...props} ref={forwardedRef} />
  )
) as PolymorphicBox;
