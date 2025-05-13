import React, { useEffect, useState } from "react";

export function normaliseSvg(svgText) {
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

export function SvgIcon ({
    variant   = "icon",
    className = "",
    iconName = "",
    style     = {},
    filemap   = {},
    ...rest
  }) {
    const path        = filemap[variant] || filemap.logo;
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
        className={className + " " + iconName}
        style={style}
        dangerouslySetInnerHTML={{ __html: svgMarkup }}
        {...rest}
      />
    );
  }