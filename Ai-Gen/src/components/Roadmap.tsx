import React from "react";
import Phase1 from "../assets/Phase-1-Image.png";
import Phase2 from "../assets/Phase-2-Image.png";
import Phase3 from "../assets/Phase-3-Image.png";

const Roadmap: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0A1830] to-[#100f1a] text-white font-sans p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Roadmap Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FA75F8] to-[#9E6EE6]">
            Roadmap
          </h1>
        </div>

        {/* Phase 1 */}
        <div className="flex items-center justify-between">
          <div className="md:w-1/2 space-y-4 ml-[176px]">
            <h2 className="text-[48px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FACC69] to-[#FA75F8]">
              PHASE 1
            </h2>
            <div className="p-6 rounded-lg">
              <ul className="space-y-2 text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] list-disc">
                <li>Horizen dai dai harmony dogecoin waves nexo.</li>
                <li>Flow horizen waves dash tether zcash waves dash terraUSD.</li>
                <li>Quant harmony amp cosmos PancakeSwap decentraland decred.</li>
                <li>Serum TRON solana tether holo crypto, Flow eCash amp EOS digibyte stellar.</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 text-center w-full">
            <img src={Phase1} alt="Phase 1" className="rounded-lg w-full ml-[120px]" />
          </div>
        </div>

        {/* Phase 2 */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-[103px]">
          <div className="md:w-1/2 space-y-4 ml-[176px]">
            <h2 className="text-[48px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FACC69] to-[#FA75F8]">
              PHASE 2
            </h2>
            <div className="p-6 rounded-lg">
              <ul className="space-y-2 text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] list-disc">
                <li>BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox PancakeSwap.</li>
                <li>Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero.</li>
                <li>Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON.</li>
                <li>Hive stellar velas flow cardano.</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 text-center w-full">
            <img src={Phase2} alt="Phase 2" className="rounded-lg shadow-md w-full ml-[120px]" />
          </div>
        </div>

        {/* Phase 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-[103px]">
          <div className="md:w-1/2 space-y-4 ml-[176px]">
            <h2 className="text-[48px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FACC69] to-[#FA75F8]">
              PHASE 3
            </h2>
            <div className="p-6 rounded-lg">
              <ul className="space-y-2 text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999] list-disc">
                <li>Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.</li>
                <li>Waves TRON dogecoin bancor eCash quant secret.</li>
                <li>Celsius crypto bancor nexo litecoin decentraland crypto.</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 text-center w-full">
            <img src={Phase3} alt="Phase 3" className="rounded-lg shadow-md w-full ml-[120px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
