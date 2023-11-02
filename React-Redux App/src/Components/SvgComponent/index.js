import React from "react";
// import { ReactComponent as EyeOpen } from "../../Svgs/Eye.svg";
import { ReactComponent as EyeOpen } from "../Svgs/Eye.svg";
import { ReactComponent as EyeClose } from "../Svgs/EyeClose.svg";
import { ReactComponent as CaretRight } from "../Svgs/CaretRight.svg";
import {ReactComponent as Uparrow} from "../Svgs/Uparrow.svg"
import { ReactComponent as CaretDown } from "../Svgs/CaretDown.svg";
import { ReactComponent as RadioBulb } from "../Svgs/RadioBulb.svg";
import { ReactComponent as DropDown } from "../Svgs/DropDown.svg";
import { ReactComponent as SaveFloppy } from "../Svgs/SaveFloppy.svg";
import { ReactComponent as Theme } from "../Svgs/Theme.svg";

export const SvgComponent = ({ svgName, className, onClick }) => {
    const svgMap = {
      EyeOpen: EyeOpen,
      EyeClose: EyeClose,
      CaretRight : CaretRight,
      CaretDown : CaretDown,
      RadioBulb : RadioBulb,
      DropDown : DropDown,
      SaveFloppy : SaveFloppy,
      Uparrow : Uparrow ,
      Theme : Theme 
    };
    const SelectedSvg = svgMap[svgName];
    return <SelectedSvg onClick={onClick} className={className} />;
  };
  