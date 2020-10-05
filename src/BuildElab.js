import React from "react";
import "./BuildElab";
import Part from "./Part";
import Brain from "./Brain";

function BuildElab() {
  const build = Brain();
  return (
    <div className="buildelab">
      <h1>The Value King</h1>
      <hr />
      <h2>Scores</h2>
      <h3>Cinebench: 1320</h3>
      <h3>3D Mark: 2000</h3>
      <hr />
      <h2>Part List</h2>
      <hr />
      <Part
        part="CPU"
        name={build.cpu?.name}
        detail2={`Clockspeed: ${build.cpu?.clocks} GHz`}
        company={build.cpu?.company}
        detail1={`Compute: ${build.cpu?.cores}C/${
          build.cpu?.smt ? build.cpu?.cores * 2 : build.cpu?.cores
        }T`}
        img={build.cpu?.img}
      />

      <Part
        part="Motherboard"
        name={build.mbd?.name}
        detail1={`Sata Ports: ${build.mbd?.sataports}`}
        detail2={`Ram slots: ${build.mbd?.ramslots}`}
        company={build.mbd?.company}
        img={build.mbd?.img}
      />
      <Part
        part="RAM"
        name={build.dram?.name}
        detail1={`Size: ${build.dram?.size} GB (${build.dram?.config})`}
        detail2={`Speed: ${build.dram?.speed} Mhz`}
        company={build.dram?.company}
        img={build.dram?.img}
      />
      <Part
        part="Storage"
        name={build.ssd?.name}
        detail1={`Size: ${build.ssd?.capacity} GB`}
        detail2={`Type: ${build.ssd?.type}`}
        company={build.ssd?.company}
        img={build.ssd?.img}
      />
      <Part
        part="GPU"
        name={build.gpu?.name}
        detail1={`VRAM: ${build.gpu?.vram} GB`}
        detail2={`Bus: ${build.gpu?.bus} bit`}
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
        detail1={`Wattage: ${build.psu?.wattage}W`}
        detail2={`Efficiency: ${build.psu?.rating} rated`}
        company={build.psu?.company}
        img={build.psu?.img}
      />
    </div>
  );
}

export default BuildElab;
