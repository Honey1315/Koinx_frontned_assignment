
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Check if a script with the same details exists
    const existingScript = Array.from(container.current.getElementsByTagName('script')).find(script =>
      script.src === "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
    );

    // If the script already exists, return early
    if (existingScript) return;

    // Otherwise, create and append the script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "711",
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "W",
        "timezone": "Etc/UTC",
        "theme": "light",
        "margin-top": "20",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "allow_symbol_change": true,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);