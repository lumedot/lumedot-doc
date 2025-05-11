import React, { useEffect, useState } from "react";

const FILE_MAP = {
  logo : "/img/lumedot/logo/lumedot-logo.svg",
  icon : "/img/lumedot/icon/lumedot-icon.svg",
};

function normaliseSvg(svgText) {
  return svgText.replace(
    /<svg([^>]*?)>/i,
    (_, attrs) => {
      const cleaned = attrs.replace(/\s(width|height)="[^"]*"/g, "");
      return `
        <svg${cleaned}
             width="100%" height="100%"
             fill="currentColor"
             focusable="false" aria-hidden="true">`;
    }
  );
}

export default function LumedotSvg({
  variant   = "logo",
  className = "",
  style     = {},
  ...rest
}) {
  const path        = FILE_MAP[variant] || FILE_MAP.logo;
  const [svgMarkup, setSvgMarkup] = useState(null);

  useEffect(() => {
    fetch(path)
      .then(r  => r.text())
      .then(txt => setSvgMarkup(normaliseSvg(txt)))
      .catch(console.error);
  }, [path]);

  if (!svgMarkup) {
    return (
      <span
        className={className}
        style={style}
        {...rest}
      />
    );
  }

  return (
    <span
      className={className + " lumedot-svg"}
      style={style}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
      {...rest}
    />
  );
}
