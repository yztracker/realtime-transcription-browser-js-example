import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1LeftIcon1Type = {
  property1LeftIconProperty?: string;

  /** Style props */
  property1LeftIconPosition?: CSSProperties["position"];
  property1LeftIconMargin?: CSSProperties["margin"];
  property1LeftIconTop?: CSSProperties["top"];
  property1LeftIconLeft?: CSSProperties["left"];
  property1LeftIconFlexShrink?: CSSProperties["flexShrink"];
  property1LeftIconZIndex?: CSSProperties["zIndex"];
};

const Property1LeftIcon1: NextPage<Property1LeftIcon1Type> = ({
  property1LeftIconProperty,
  property1LeftIconPosition,
  property1LeftIconMargin,
  property1LeftIconTop,
  property1LeftIconLeft,
  property1LeftIconFlexShrink,
  property1LeftIconZIndex,
}) => {
  const property1LeftIcon1Style: CSSProperties = useMemo(() => {
    return {
      position: property1LeftIconPosition,
      margin: property1LeftIconMargin,
      top: property1LeftIconTop,
      left: property1LeftIconLeft,
      flexShrink: property1LeftIconFlexShrink,
      zIndex: property1LeftIconZIndex,
    };
  }, [
    property1LeftIconPosition,
    property1LeftIconMargin,
    property1LeftIconTop,
    property1LeftIconLeft,
    property1LeftIconFlexShrink,
    property1LeftIconZIndex,
  ]);

  return (
    <img
      className="relative rounded-101xl w-[68px] h-[68px] overflow-hidden"
      alt=""
      src={property1LeftIconProperty}
      style={property1LeftIcon1Style}
    />
  );
};

export default Property1LeftIcon1;
