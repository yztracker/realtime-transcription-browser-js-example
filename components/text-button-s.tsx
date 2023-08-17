import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TextButtonSType = {
  /** Style props */
  textButtonSPosition?: CSSProperties["position"];
};

const TextButtonS: NextPage<TextButtonSType> = ({ textButtonSPosition }) => {
  const textButtonSStyle: CSSProperties = useMemo(() => {
    return {
      position: textButtonSPosition,
    };
  }, [textButtonSPosition]);

  return (
    <div
      className="relative rounded-lg bg-primary flex flex-row py-2.5 px-6 items-center justify-end text-center text-xl text-common-white font-h1-headline"
      style={textButtonSStyle}
    >
      <div className="relative leading-[28px] font-semibold">送出</div>
    </div>
  );
};

export default TextButtonS;
