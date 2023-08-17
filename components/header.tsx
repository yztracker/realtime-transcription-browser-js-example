import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type HeaderType = {
  /** Style props */
  headerPosition?: CSSProperties["position"];
  headerJustifyContent?: CSSProperties["justifyContent"];
  headerGap?: CSSProperties["gap"];
  headerTop?: CSSProperties["top"];
  headerLeft?: CSSProperties["left"];
};

const Header: NextPage<HeaderType> = ({
  headerPosition,
  headerJustifyContent,
  headerGap,
  headerTop,
  headerLeft,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      position: headerPosition,
      justifyContent: headerJustifyContent,
      gap: headerGap,
      top: headerTop,
      left: headerLeft,
    };
  }, [headerPosition, headerJustifyContent, headerGap, headerTop, headerLeft]);

  return (
    <div
      className="relative [background:linear-gradient(180deg,_rgba(26,_26,_26,_0.2),_rgba(7,_7,_7,_0.04)_52.6%,_rgba(0,_0,_0,_0))] [backdrop-filter:blur(11px)] box-border w-[1440px] flex flex-row py-10 px-[200px] items-center justify-start gap-[28px] text-center text-lg text-common-white font-futura border-b-[1px] border-solid border-silver-200"
      style={headerStyle}
    >
      <div className="relative w-[55px] h-[22px] z-[0]">
        <div className="absolute top-[0px] left-[0px] leading-[22px] font-medium">
          Homer
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[calc(50%_-_11px)] left-[calc(50%_-_170px)] flex flex-row items-center justify-start gap-[28px] z-[1] text-base font-h1-headline">
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
  );
};

export default Header;
