import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1LeftIconType = {
  property1LeftIcon1Propert?: string;

  /** Style props */
  property1LeftIconPosition?: CSSProperties["position"];
  property1LeftIconMargin?: CSSProperties["margin"];
  property1LeftIconTop?: CSSProperties["top"];
  property1LeftIconLeft?: CSSProperties["left"];
  property1LeftIconFlexShrink?: CSSProperties["flexShrink"];
  property1LeftIconZIndex?: CSSProperties["zIndex"];
};

const Property1LeftIcon: NextPage<Property1LeftIconType> = ({
  property1LeftIcon1Propert,
  property1LeftIconPosition,
  property1LeftIconMargin,
  property1LeftIconTop,
  property1LeftIconLeft,
  property1LeftIconFlexShrink,
  property1LeftIconZIndex,
}) => {
  const property1LeftIconStyle: CSSProperties = useMemo(() => {
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
      src={property1LeftIcon1Propert}
      style={property1LeftIconStyle}
    />
  );
};

export default Property1LeftIcon;
