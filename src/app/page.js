import BaseHeader from "./components/layout/header-base";
import Opening from "./components/pages/home/opening";
import Freedom from "./components/pages/home/1_freedom";
import FairRoyalties from "./components/pages/home/2_fair_royalties";
import MultiFormat from "./components/pages/home/3_multi_format";
import Support from "./components/pages/home/4_support";
import Community from "./components/pages/home/5_community";
import Closing from "./components/pages/home/closing";
import BaseFooter from "./components/layout/footer-base";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-6xl">
      <BaseHeader />
      <Opening />
      <div id="discover-more" />
      <Freedom />
      <FairRoyalties />
      <MultiFormat />
      <Support />
      <Community />
      <Closing />
      <BaseFooter />
    </div>
  );
}
