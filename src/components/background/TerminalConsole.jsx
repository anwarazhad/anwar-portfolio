import { useEffect, useState } from "react";

const logs = [
  "Initializing Firewall...",
  "Loading Threat Database...",
  "SSH Tunnel Established...",
  "Wazuh SIEM Connected...",
  "Scanning Open Ports...",
  "Monitoring Network...",
  "IDS Active...",
  "Connection Secured...",
  "System Online...",
];

export default function TerminalConsole() {
  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        const next = [...prev, logs[index]];

        if (next.length > 4) {
          next.shift();
        }

        return next;
      });

      index++;

      if (index >= logs.length) {
        index = 0;
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
absolute
top-23
left-5
w-65
bg-black/20
backdrop-blur-sm
border
border-cyan-500/10
rounded-xl
p-3
pointer-events-none
"
    >
      <div
        className="
terminal-font
text-cyan-400
text-xs
"
      >
        root@anwar:~
      </div>

      <div
        className="
space-y-1
text-[11px]
terminal-font
"
      >
        {visibleLogs.map((log, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-300">&gt; {log}</span>

            <span className="text-green-400">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}
