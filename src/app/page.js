import Freedom from "./components/home/1_freedom";
import FairRoyalties from "./components/home/2_fair_royalties";
import MultiFormat from "./components/home/3_multi_format";
import Support from "./components/home/4_support";
import Community from "./components/home/5_community";
import Opening from "./components/home/opening";
import Closing from "./components/home/closing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Opening />
      <Freedom />
      <FairRoyalties />
      <MultiFormat />
      <Support />
      <Community />
      <Closing />
    </div>
  );
}
