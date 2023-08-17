import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type BackGroundType = {
  /** Style props */
  backGroundPosition?: CSSProperties["position"];
  backGroundTop?: CSSProperties["top"];
  backGroundLeft?: CSSProperties["left"];
};

const BackGround: NextPage<BackGroundType> = ({
  backGroundPosition,
  backGroundTop,
  backGroundLeft,
}) => {
  const backGroundStyle: CSSProperties = useMemo(() => {
    return {
      position: backGroundPosition,
      top: backGroundTop,
      left: backGroundLeft,
    };
  }, [backGroundPosition, backGroundTop, backGroundLeft]);

  return (
    <div
      className="relative [background:linear-gradient(174.44deg,_#000,_#00020a_28.15%,_#030023_34.8%,_#0d0026_53.69%,_#00020a_69.2%,_#000_96.87%)] w-[1440px] h-[4525px] overflow-hidden opacity-[0.8] text-left text-13xl text-gainsboro font-h1-headline"
      style={backGroundStyle}
    >
      <div className="absolute top-[4560px] left-[0px] w-[1920px] h-[280px] overflow-hidden">
        <div className="absolute top-[121px] left-[908px] leading-[38px] font-semibold">
          Footer
        </div>
      </div>
    </div>
  );
};

export default BackGround;
