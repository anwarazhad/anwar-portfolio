import AnimatedGrid from "./AnimatedGrid";
import NetworkNodes from "./NetworkNodes";
import DataPackets from "./DataPackets";
import FloatingParticles from "./FloatingParticles";
import RadarSweep from "./RadarSweep";
import TerminalConsole from "./TerminalConsole";

export default function CyberBackground() {
  return (
    <>
      <AnimatedGrid />

      <FloatingParticles />

      <NetworkNodes />

      <div className="hidden md:block">
        <DataPackets />
      </div>

      <div className="hidden lg:block">
        <RadarSweep />
      </div>

      <div className="hidden lg:block">
        <TerminalConsole />
      </div>
    </>
  );
}
