import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Default4Type = {
  inputPlaceholderText?: string;
  imagePlaceholderText?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultWidth?: CSSProperties["width"];
  property1DefaultAlignSelf?: CSSProperties["alignSelf"];
  inputBackgroundColor?: CSSProperties["backgroundColor"];
};

const Property1Default4: NextPage<Property1Default4Type> = ({
  inputPlaceholderText,
  imagePlaceholderText,
  property1DefaultPosition,
  property1DefaultWidth,
  property1DefaultAlignSelf,
  inputBackgroundColor,
}) => {
  const property1Default4Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      width: property1DefaultWidth,
      alignSelf: property1DefaultAlignSelf,
    };
  }, [
    property1DefaultPosition,
    property1DefaultWidth,
    property1DefaultAlignSelf,
  ]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: inputBackgroundColor,
    };
  }, [inputBackgroundColor]);

  return (
    <div
      className="relative w-80 h-60 flex flex-col items-start justify-start gap-[4px] text-left text-sm text-error-main font-h1-headline"
      style={property1Default4Style}
    >
      <div className="flex flex-row items-start justify-start gap-[2px]">
        <div className="relative leading-[22px] hidden">*</div>
        <div className="relative leading-[22px] text-common-white">Label</div>
      </div>
      <div
        className="self-stretch rounded-lg box-border h-[214px] flex flex-col py-4 px-3.5 items-end justify-start gap-[4px] text-base text-text-light-disabled border-[1px] border-solid border-components-input-outlined"
        style={inputStyle}
      >
        <div className="self-stretch flex-1 relative leading-[24px]">
          <p className="m-0">{inputPlaceholderText}</p>
          <p className="m-0">&nbsp;</p>
        </div>
        <div className="relative text-sm leading-[22px] text-right hidden">
          0/50
        </div>
      </div>
      <div className="self-stretch hidden flex-row py-0 pr-0 pl-3 items-center justify-start gap-[4px] text-xs text-grey-600">
        <img
          className="relative w-4 h-4 hidden"
          alt=""
          src={imagePlaceholderText}
        />
        <div className="relative leading-[18px]">
          Caption text, description, notification
        </div>
      </div>
    </div>
  );
};

export default Property1Default4;
