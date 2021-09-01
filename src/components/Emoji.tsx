import * as React from "react";

export interface EmojiProps extends React.HTMLProps<HTMLSpanElement> {
  label: string;
  symbol: string;
}

export const Emoji = (props: EmojiProps) => {
  const { label, symbol, ...restOfProps } = props;
  return (
    <span role="img" aria-label={label} title={label} {...restOfProps}>
      {symbol}
    </span>
  );
};
