import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FooterType = {
  /** Style props */
  footerPosition?: CSSProperties["position"];
  footerBottom?: CSSProperties["bottom"];
  footerLeft?: CSSProperties["left"];
};

const Footer: NextPage<FooterType> = ({
  footerPosition,
  footerBottom,
  footerLeft,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      position: footerPosition,
      bottom: footerBottom,
      left: footerLeft,
    };
  }, [footerPosition, footerBottom, footerLeft]);

  return (
    <div
      className="relative w-[1440px] flex flex-row py-10 px-[200px] box-border items-start justify-start gap-[80px] text-left text-base text-common-white font-h1-headline"
      style={footerStyle}
    >
      <div className="flex-1 relative h-[196px]">
        <div className="absolute top-[36px] left-[-2px] leading-[22px] font-medium">
          <p className="m-0">🤖 分享 #ChatGPT 教學和 AI 工具使用技巧</p>
          <p className="m-0">📌 最新最酷的 AI 知識</p>
          <p className="m-0">🙀 減少對於科技的焦慮</p>
          <p className="m-0">{`🚝 幫助你10倍提升你的工作&學習效率`}</p>
        </div>
        <div className="absolute bottom-[0px] left-[0px] flex flex-row py-0 pr-[451.780029296875px] pl-0 items-start justify-start gap-[8px]">
          <div className="relative rounded-9980xl bg-gray-200 box-border w-12 h-12 z-[1] border-[1px] border-solid border-darkslategray">
            <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_5px)] flex flex-row items-start justify-start">
              <img
                className="relative w-2.5 h-4 overflow-hidden shrink-0"
                alt=""
                src="/facebook7954660bsvg.svg"
              />
            </div>
          </div>
          <div className="relative rounded-9980xl bg-gray-200 box-border w-12 h-12 z-[0] border-[1px] border-solid border-darkslategray">
            <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] flex flex-row items-start justify-start">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/instagrame8c9a8cfsvg.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[-2px] w-[100px] h-7 text-center text-xl text-mediumspringgreen">
          <div className="absolute top-[0px] left-[0px] w-[100px] h-7">
            <div className="absolute top-[0px] left-[calc(50%_-_50px)] leading-[28px] font-semibold opacity-[0.6]">
              HOMER AI
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[340px] h-[196px] text-center">
        <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_170px)] flex flex-row items-center justify-start gap-[28px]">
          <div className="relative w-16 h-[22px]">
            <div className="absolute top-[0px] left-[-0.5px] leading-[22px] font-medium">
              服務項目
            </div>
          </div>
          <div className="relative w-16 h-[22px]">
            <div className="absolute top-[0px] left-[-0.5px] leading-[22px] font-medium">
              文章分享
            </div>
          </div>
          <div className="relative w-16 h-[22px]">
            <div className="absolute top-[0px] left-[-0.5px] leading-[22px] font-medium">
              關於我們
            </div>
          </div>
          <div className="relative w-16 h-[22px]">
            <div className="absolute top-[0px] left-[-0.5px] leading-[22px] font-medium">
              聯繫我們
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
