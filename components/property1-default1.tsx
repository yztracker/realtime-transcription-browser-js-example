import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Default1Type = {
  prop?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
};

const Property1Default1: NextPage<Property1Default1Type> = ({
  prop,
  property1DefaultPosition,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  return (
    <div
      className="relative w-80 flex flex-col items-start justify-start gap-[16px] text-left text-lg text-whitesmoke font-h1-headline"
      style={property1Default1Style}
    >
      <div className="relative rounded-2xl shadow-[0px_0px_0px_1px_rgba(255,_255,_255,_0.05)_inset] w-80 h-[210px] overflow-hidden shrink-0">
        <img
          className="absolute top-[0px] left-[0px] w-80 h-80 object-cover"
          alt=""
          src="/0-6@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] w-80 h-[210px] overflow-hidden" />
      </div>
      <div className="self-stretch relative leading-[24px] [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
        {prop}
      </div>
    </div>
  );
};

export default Property1Default1;
