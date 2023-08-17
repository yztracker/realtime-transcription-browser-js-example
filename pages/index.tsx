import type { NextPage } from "next";
import Head from "next/head";
import BackGround from "../components/back-ground";
import Property1Default from "../components/property1-default";
import Header from "../components/header";
import LatestArticlesContainer from "../components/latest-articles-container";
import MediaMessageSection from "../components/media-message-section";
import Footer from "../components/footer";
import ContactFormContainer from "../components/contact-form-container";
import Container from "../components/container";

const HomePageTest: NextPage = () => {
  return (
    <a className="[text-decoration:none] relative w-full h-[192.25rem] overflow-y-auto sm:w-[90rem]">
      <main className="absolute top-[0rem] left-[0rem] w-[90rem] h-[282.81rem] overflow-hidden text-center text-[4rem] text-gainsboro font-h1-headline">
        <BackGround
          backGroundPosition="absolute"
          backGroundTop="0rem"
          backGroundLeft="calc(50% - 720px)"
        />
        <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[56.25rem] overflow-hidden bg-[url(/frame-35440@3x.png)] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[calc(50%_-_106px)] left-[calc(50%_-_314px)] w-[39.25rem] flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem]">
              <div className="self-stretch relative tracking-[0.01em] leading-[4.38rem] font-semibold">
                <p className="m-0">進入未來，無需等待</p>
                <p className="m-0 text-secondary">現成式AI解決方案</p>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-[0.25rem] text-[1.13rem]">
                <div className="self-stretch relative leading-[1.5rem]">
                  讓AI運用，結合你的工作流程，迎接新改變！
                </div>
                <div className="self-stretch relative leading-[1.5rem]">
                  ChatGPT 百科 X AI 應用 X Homer AI
                </div>
              </div>
            </div>
          </div>
          <Property1Default
            prop="開始體驗"
            property1DefaultPosition="absolute"
            property1DefaultTop="39.75rem"
            property1DefaultLeft="calc(50% - 140px)"
            property1DefaultWidth="17.5rem"
            divFlex="1"
          />
        </div>
      </main>
      <div className="absolute top-[0rem] left-[0rem] w-[90rem] h-[192.25rem] overflow-hidden">
        <Header
          headerPosition="absolute"
          headerJustifyContent="space-between"
          headerGap="unset"
          headerTop="0rem"
          headerLeft="calc(50% - 720px)"
        />
        <LatestArticlesContainer />
        <MediaMessageSection />
        <Footer
          footerPosition="absolute"
          footerBottom="0rem"
          footerLeft="calc(50% - 720px)"
        />
        <div className="absolute top-[132.25rem] left-[calc(50%_-_720px)] w-[90rem] h-[42.75rem] overflow-hidden flex flex-row py-[5rem] px-[12.5rem] box-border items-start justify-start gap-[6.25rem]">
          <ContactFormContainer />
          <Container />
        </div>
      </div>
    </a>
  );
};

export default HomePageTest;
