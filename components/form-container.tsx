import type { NextPage } from "next";
import Property1Default3 from "./property1-default3";

type FormContainerType = {
  lastNameInput?: string;
  inputPlaceholder?: string;
  firstNameInput?: string;
  nameInputPlaceholder?: string;
};

const FormContainer: NextPage<FormContainerType> = ({
  lastNameInput,
  inputPlaceholder,
  firstNameInput,
  nameInputPlaceholder,
}) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[1.5rem]">
      <Property1Default3
        label="姓"
        value="請輸入姓"
        iconsicEye="/iconsic-eye.svg"
        selectArrow="/select-arrow.svg"
        iconsicInfo="/iconsic-info.svg"
        property1DefaultPosition="unset"
        valueColor="#919eab"
        iconButtonBoxSizing="border-box"
      />
      <Property1Default3
        label="名字"
        value="請輸入名字"
        iconsicEye="/iconsic-eye.svg"
        selectArrow="/select-arrow.svg"
        iconsicInfo="/iconsic-info.svg"
        property1DefaultPosition="unset"
        valueColor="#919eab"
        iconButtonBoxSizing="border-box"
      />
    </div>
  );
};

export default FormContainer;
