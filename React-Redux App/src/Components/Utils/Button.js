export const ButtonComp = ({
    text,
    Svg_Name = "",
    onClick,
    classNames,
    BtnClass,
    TextClass,
  }) => {
    return (
      <div
        onClick={onClick}
        className={`flex justify-center items-center bg-primaryColor  text-white space-x-2 cursor-pointer rounded  ${BtnClass}`}
      >
        {Svg_Name && (
          <SvgComponent className={`${classNames}`} svgName={Svg_Name} />
        )}
        <span className={`text-12 ${TextClass}`}>{text}</span>
      </div>
    );
  };