import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Default3Type = {
  label?: string;
  value?: string;
  iconsicEye?: string;
  selectArrow?: string;
  iconsicInfo?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  valueColor?: CSSProperties["color"];
  iconButtonBoxSizing?: CSSProperties["boxSizing"];
};

const Property1Default3: NextPage<Property1Default3Type> = ({
  label,
  value,
  iconsicEye,
  selectArrow,
  iconsicInfo,
  property1DefaultPosition,
  valueColor,
  iconButtonBoxSizing,
}) => {
  const property1Default3Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  const valueStyle: CSSProperties = useMemo(() => {
    return {
      color: valueColor,
    };
  }, [valueColor]);

  const iconButtonStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: iconButtonBoxSizing,
    };
  }, [iconButtonBoxSizing]);

  return (
    <div
      className="relative w-80 flex flex-col items-start justify-start gap-[4px] text-left text-sm text-error-main font-h1-headline"
      style={property1Default3Style}
    >
      <div className="flex flex-row items-start justify-start gap-[2px]">
        <div className="relative leading-[22px] hidden">*</div>
        <div className="relative leading-[22px] text-common-white">{label}</div>
      </div>
      <div className="self-stretch rounded-lg bg-common-white flex flex-row py-4 px-3.5 items-center justify-start relative gap-[8px] text-base text-text-light-disabled border-[1px] border-solid border-components-input-outlined">
        <div className="my-0 mx-[!important] absolute top-[-18px] right-[0px] h-28 hidden flex-row py-6 px-1 box-border items-start justify-start z-[0]">
          <div className="relative rounded-xl bg-grey-600 w-1.5 h-16 opacity-[0.48]" />
        </div>
        <div className="hidden flex-row py-0 pr-2 pl-0 items-start justify-start z-[1] border-r-[1px] border-solid border-components-input-outlined">
          <div className="relative leading-[24px]">NT$</div>
        </div>
        <div className="hidden flex-row items-center justify-start z-[2] text-center">
          <div className="relative w-1.5 h-px" />
          <div className="relative leading-[24px]">$</div>
          <div className="relative w-[7px] h-px" />
        </div>
        <div
          className="flex-1 relative leading-[24px] text-text-light-primary inline-block overflow-hidden text-ellipsis whitespace-nowrap h-6 z-[3]"
          style={valueStyle}
        >
          {value}
        </div>
        <div className="my-0 mx-[!important] absolute top-[calc(50%_-_20px)] right-[0px] hidden flex-row items-center justify-center z-[4]">
          <div
            className="rounded-31xl flex flex-row p-2 items-center justify-center"
            style={iconButtonStyle}
          >
            <img className="relative w-6 h-6" alt="" src={iconsicEye} />
          </div>
        </div>
        <div className="relative text-sm leading-[22px] text-right hidden z-[5]">
          0/50
        </div>
        <img
          className="relative w-5 h-5 hidden z-[6]"
          alt=""
          src={selectArrow}
        />
      </div>
      <div className="self-stretch hidden flex-row py-0 pr-0 pl-3 items-center justify-start gap-[4px] text-xs text-grey-600">
        <img className="relative w-4 h-4 hidden" alt="" src={iconsicInfo} />
        <div className="relative leading-[18px]">
          Caption text, description, notification
        </div>
      </div>
    </div>
  );
};

export default Property1Default3;
