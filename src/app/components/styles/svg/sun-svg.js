import { SvgIcon } from "./util";

const FILE_MAP = {
    icon : "/img/icon/sun-icon.svg",
};

export default function SunSvg({
    variant   = "icon",
    className = "",
    style     = {},
    ...rest
}) {
    return (
        <SvgIcon
        variant={variant}
        className={className}
        iconName="sun-svg"
        style = {style}
        filemap={FILE_MAP}
        {...rest}
        />
    );
}