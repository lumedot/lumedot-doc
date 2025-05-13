import { SvgIcon } from "./util";

const FILE_MAP = {
    icon : "/img/icon/moon-icon.svg",
};

export default function MoonSvg({
    variant   = "icon",
    className = "",
    style     = {},
    ...rest
}) {
    return (
        <SvgIcon
        variant={variant}
        className={className}
        iconName="moon-svg"
        style = {style}
        filemap={FILE_MAP}
        {...rest}
        />
    );
}