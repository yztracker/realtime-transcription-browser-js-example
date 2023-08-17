import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Property1Default2Type = {
  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
};

const Property1Default2: NextPage<Property1Default2Type> = ({
  property1DefaultPosition,
}) => {
  const property1Default2Style: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  return (
    <div
      className="relative w-[225px] flex flex-col items-start justify-start gap-[16px] text-left text-lg text-whitesmoke font-h1-headline"
      style={property1Default2Style}
    >
      <div className="relative rounded-2xl w-[225px] h-[400px] overflow-hidden shrink-0">
        <img
          className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_112.5px)] w-56 h-[400px] object-cover"
          alt=""
          src="/frame-13939-1@2x.png"
        />
        <div className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_112.5px)] w-56 h-[400px] overflow-hidden" />
      </div>
      <div className="self-stretch relative leading-[24px] [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
        最新消息最新消息最新消息最新消息最新消息最新消息最新消息最新消最新消最新消息最新消息最新消息最新消息最新消息最新消息最新消息最新消最新消
      </div>
    </div>
  );
};

export default Property1Default2;
