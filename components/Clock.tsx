"use client";

import { useEffect, useState } from "react";

// Live local time for the configured timezone, e.g. "09:32 (GMT+2)".
export default function Clock({ timezone }: { timezone: string }) {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const time = new Intl.DateTimeFormat("en-GB", { timeZone: timezone, hour: "2-digit", minute: "2-digit", hour12: false });
    const zone = new Intl.DateTimeFormat("en-GB", { timeZone: timezone, timeZoneName: "shortOffset" });
    const tick = () => {
      const d = new Date();
      const offset = zone.formatToParts(d).find((p) => p.type === "timeZoneName")?.value ?? "";
      setNow(`${time.format(d)} (${offset})`);
    };
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, [timezone]);

  return <span className="clock">{now || "--:-- (GMT)"}</span>;
}
