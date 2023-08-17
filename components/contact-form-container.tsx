import type { NextPage } from "next";

const ContactFormContainer: NextPage = () => {
  return (
    <div className="relative w-[23.44rem] h-[17.75rem] text-left text-[1rem] text-common-white font-h1-headline">
      <div className="absolute top-[0rem] left-[0rem] overflow-hidden flex flex-col items-start justify-start text-[2rem] text-gainsboro">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[2.38rem] font-semibold flex items-center w-[8rem] shrink-0">
            聯絡我們
          </div>
        </div>
      </div>
      <div className="absolute top-[4.13rem] left-[0rem] leading-[1.38rem] font-medium flex items-center w-[21.88rem]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">🤖 分享 #ChatGPT 教學和 AI 工具使用技巧</p>
          <p className="m-0">📌 最新最酷的 AI 知識</p>
          <p className="m-0">🙀 減少對於科技的焦慮</p>
          <p className="m-0">{`🚝 幫助你10倍提升你的工作&學習效率`}</p>
        </span>
      </div>
      <div className="absolute top-[11.38rem] left-[0rem] flex flex-row flex-wrap items-start justify-start gap-[1.5rem]">
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/icoutlineemail.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[1.38rem] font-medium">Email</div>
            <div className="relative text-[1.13rem] leading-[1.5rem]">
              homer.20230210@gmail.com
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/mdiinstagram.svg"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[1.38rem] font-medium">
              Instagram
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormContainer;
