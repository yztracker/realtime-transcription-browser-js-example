import type { NextPage } from "next";
import FormContainer from "./form-container";
import Property1Default4 from "./property1-default4";
import TextButtonS from "./text-button-s";

const Container: NextPage = () => {
  return (
    <div className="flex flex-col items-end justify-start gap-[1.5rem]">
      <FormContainer
        lastNameInput="姓"
        inputPlaceholder="請輸入姓"
        firstNameInput="名字"
        nameInputPlaceholder="請輸入名字"
      />
      <FormContainer
        lastNameInput="Email"
        inputPlaceholder="請輸入電子信箱"
        firstNameInput="手機"
        nameInputPlaceholder="請輸入手機號碼"
      />
      <Property1Default4
        inputPlaceholderText="輸入任何想說的..."
        imagePlaceholderText="/iconsic-info.svg"
        property1DefaultPosition="unset"
        property1DefaultWidth="unset"
        property1DefaultAlignSelf="stretch"
        inputBackgroundColor="#fff"
      />
      <TextButtonS textButtonSPosition="unset" />
    </div>
  );
};

export default Container;
