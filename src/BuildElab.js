import React from "react";
import "./BuildElab.css";
import Part from "./Part";
import Brain from "./Brain";

function BuildElab() {
  const build = Brain();
  return (
    <div className="buildelab">
      <div className="buildelab__titles">
        <h1>{build.details?.name}</h1>
        <div className="buildelab__scores">
          <h2>Scores</h2>
          <h3>Cinebench: <span>{build.benchmarks?.cinebench}</span></h3>
          <h3>3D Mark(Time Spy): <span>{build.benchmarks?.threeDMarkTSpy}</span></h3>
        </div>
        <h2>Part List</h2>
      </div>
      <div className="buildelab__parts">
        <Part
          part="CPU"
          img={build.cpu?.img}
          name={build.cpu?.name}
          title1="Compute:"
          detail1={`${build.cpu?.cores}C/${
            build.cpu?.smt ? build.cpu?.cores * 2 : build.cpu?.cores
          }T`}
          title2="Clockspeed:"
          detail2={`${build.cpu?.clocks} GHz`}
          company={build.cpu?.company}
        />
        <Part
          part="Motherboard"
          name={build.mbd?.name}
          title1="Sata Ports:"
          detail1={build.mbd?.sataports}
          title2="Ram Slots:"
          detail2={build.mbd?.ramslots}
          company={build.mbd?.company}
          img={build.mbd?.img}
        />
        <Part
          part="RAM"
          name={build.dram?.name}
          title1="Size:"
          detail1={`${build.dram?.size} GB (${build.dram?.config})`}
          title2="Speed:"
          detail2={`${build.dram?.speed} Mhz`}
          company={build.dram?.company}
          img={build.dram?.img}
        />
        <Part
          part="Storage"
          name={build.ssd?.name}
          title1="Capacity:"
          detail1={`${build.ssd?.capacity} GB`}
          title2="Type:"
          detail2={build.ssd?.type}
          company={build.ssd?.company}
          img={build.ssd?.img}
        />
        <Part
          part="GPU"
          name={build.gpu?.name}
          title1="VRAM:"
          detail1={`${build.gpu?.vram} GB`}
          title2="Bus"
          detail2={`${build.gpu?.bus} bit`}
          company={build.gpu?.aib}
          img={build.gpu?.img}
        />
        <Part
          part="Case"
          name={build.case?.name}
          company={build.case?.company}
          img={build.case?.img}
        />
        <Part
          part="PowerSupply"
          name={build.psu?.name}
          title1="Wattage:"
          detail1={`${build.psu?.wattage}W`}
          title2="Efficiency:"
          detail2={build.psu?.rating}
          company={build.psu?.company}
          img={build.psu?.img}
        />
      </div>
    </div>
  );
}

export default BuildElab;
