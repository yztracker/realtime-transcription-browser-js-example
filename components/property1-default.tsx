import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1DefaultType = {
  prop?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
  property1DefaultWidth?: CSSProperties["width"];
  divFlex?: CSSProperties["flex"];
};

const Property1Default: NextPage<Property1DefaultType> = ({
  prop,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  divFlex,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      width: property1DefaultWidth,
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
  ]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      flex: divFlex,
    };
  }, [divFlex]);

  return (
    <div
      className="relative rounded-3xl bg-secondary flex flex-row py-2 px-[100px] items-center justify-center text-center text-xl text-gray-100 font-h1-headline"
      style={property1DefaultStyle}
    >
      <div className="relative leading-[28px] font-semibold" style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

export default Property1Default;
