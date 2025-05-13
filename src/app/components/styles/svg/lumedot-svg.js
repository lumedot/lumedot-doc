import { SvgIcon } from "./util";

const FILE_MAP = {
  logo : "/img/lumedot/logo/lumedot-logo.svg",
  icon : "/img/lumedot/icon/lumedot-icon.svg",
};

export default function LumedotSvg({
  variant   = "icon",
  className = "",
  style     = {},
  ...rest
}) {
  return (
    <SvgIcon
      variant={variant}
      className={className}
      iconName="lumedot-svg"
      style = {style}
      filemap={FILE_MAP}
      {...rest}
    />
  );
}