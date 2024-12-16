import React from "react";

const CompetitiveProgramming = () => {
  return (
    <div id="cp" className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        Competitive Programming
      </h1>
      <div className="inline-grid grid-cols-3 gap-4 pl-10" >
        <img height={500} width={500} src="https://leetcard.jacoblin.cool/iZnoGouDAf?ext=heatmap&?theme=dark"></img>
        <img height={405} width={405} src="https://codeforces-readme-stats.vercel.app/api/card?username=iZnoGouDAf&theme=dark"></img>
      </div>

    </div>
  );
};

export default CompetitiveProgramming;
