import type { NextPage } from "next";
import Property1Default1 from "./property1-default1";
import Property1LeftIcon from "./property1-left-icon";
import Property1LeftIcon1 from "./property1-left-icon1";

const LatestArticlesContainer: NextPage = () => {
  return (
    <div className="absolute top-[56.25rem] left-[0rem] [background:linear-gradient(180deg,_#000105,_rgba(0,_0,_1,_0))] w-[90rem] overflow-hidden flex flex-col py-[5rem] px-[12.5rem] box-border items-center justify-start gap-[0.63rem] text-left text-[2rem] text-gainsboro font-h1-headline">
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[1.5rem] z-[0]">
        <div className="flex flex-row items-center justify-start gap-[1rem]">
          <div className="relative leading-[2.38rem] font-semibold flex items-center w-[8rem] shrink-0">
            最新文章
          </div>
          <img
            className="relative w-[0.06rem] h-[1.5rem]"
            alt=""
            src="/vector-3.svg"
          />
          <div className="relative text-[1.13rem] leading-[1.5rem] text-silver-100">
            AI運用新知
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[2.5rem]">
          <Property1Default1
            prop="最新消息最新消息最新消息最新消息最"
            property1DefaultPosition="unset"
          />
          <Property1Default1
            prop="最新消息最新消息最新消息最新消息最新消息最新消息最新消息最新消最新消最新消息最新消息最新消息最新消息最新消息最新消息最新消息最新消最新消"
            property1DefaultPosition="unset"
          />
          <Property1Default1
            prop="最新消息最新消息最新消息最新消息最新消息最新消息最新消息最新消最新消最新消息最新消息最新消息最新消息最新消息最新消息最新消息最新消最新消"
            property1DefaultPosition="unset"
          />
        </div>
      </div>
      <Property1LeftIcon
        property1LeftIcon1Propert="/arrow-buttons.svg"
        property1LeftIconPosition="absolute"
        property1LeftIconMargin="0 !important"
        property1LeftIconTop="calc(50% - 17px)"
        property1LeftIconLeft="7.38rem"
        property1LeftIconFlexShrink="0"
        property1LeftIconZIndex="1"
      />
      <Property1LeftIcon1
        property1LeftIconProperty="/arrow-buttons1.svg"
        property1LeftIconPosition="absolute"
        property1LeftIconMargin="0 !important"
        property1LeftIconTop="calc(50% - 17px)"
        property1LeftIconLeft="78.38rem"
        property1LeftIconFlexShrink="0"
        property1LeftIconZIndex="2"
      />
    </div>
  );
};

export default LatestArticlesContainer;
