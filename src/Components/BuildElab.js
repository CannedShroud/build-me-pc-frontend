import React, { useEffect, useState } from "react";
import "../Styles/BuildElab.css";
import Part from "../Components/Part";
import Gate from "../Logic/Gate";

function BuildElab({ id }) {
  const [buildId, setBuildId] = useState(id);
  let { buildDetails } = Gate(buildId);
  useEffect(() => {
    setBuildId(id);
  }, [id]);
  return (
    <div className="buildelab">
      <div className="buildelab__titles">
        <h1>{buildDetails?.details?.name}</h1>
        <div className="buildelab__scores">
          <h2>Scores</h2>
          <h3>
            Cinebench: <span>{buildDetails?.benchmarks?.cinebench}</span>
          </h3>
          <h3>
            3D Mark(Time Spy):{" "}
            <span>{buildDetails?.benchmarks?.threeDMarkTSpy}</span>
          </h3>
        </div>
        <h2>Part List</h2>
      </div>
      <div className="buildelab__parts">
        <Part
          part="CPU"
          img={buildDetails?.cpu?.img}
          name={buildDetails?.cpu?.name}
          title1="Compute:"
          detail1={`${buildDetails?.cpu?.cores}C/${
            buildDetails?.cpu?.smt
              ? buildDetails?.cpu?.cores * 2
              : buildDetails?.cpu?.cores
          }T`}
          title2="Clockspeed:"
          detail2={`${buildDetails?.cpu?.clocks} GHz`}
          link={buildDetails?.cpu?.link}
          company={buildDetails?.cpu?.company}
          price={buildDetails?.cpu?.price}
        />
        <Part
          part="Motherboard"
          name={buildDetails?.mbd?.name}
          title1="Sata Ports:"
          detail1={buildDetails?.mbd?.sataports}
          title2="Ram Slots:"
          detail2={buildDetails?.mbd?.ramslots}
          price={buildDetails?.mbd?.price}
          link={buildDetails?.mbd?.link}
          company={buildDetails?.mbd?.company}
          img={buildDetails?.mbd?.img}
        />
        <Part
          part="RAM"
          name={buildDetails?.dram?.name}
          title1="Size:"
          detail1={`${buildDetails?.dram?.size} GB (${buildDetails?.dram?.config})`}
          title2="Speed:"
          detail2={`${buildDetails?.dram?.speed} Mhz`}
          price={buildDetails?.dram?.price}
          link={buildDetails?.dram?.link}
          company={buildDetails?.dram?.company}
          img={buildDetails?.dram?.img}
        />
        <Part
          part="Storage"
          name={buildDetails?.ssd?.name}
          title1="Capacity:"
          detail1={`${buildDetails?.ssd?.capacity} GB`}
          title2="Type:"
          detail2={buildDetails?.ssd?.type}
          price={buildDetails?.ssd?.price}
          link={buildDetails?.ssd?.link}
          company={buildDetails?.ssd?.company}
          img={buildDetails?.ssd?.img}
        />
        <Part
          part="GPU"
          name={buildDetails?.gpu?.name}
          title1="VRAM:"
          detail1={`${buildDetails?.gpu?.vram} GB`}
          title2="Bus"
          detail2={`${buildDetails?.gpu?.bus} bit`}
          price={buildDetails?.gpu?.price}
          link={buildDetails?.gpu?.link}
          company={buildDetails?.gpu?.aib}
          img={buildDetails?.gpu?.img}
        />
        <Part
          part="Case"
          name={buildDetails?.case?.name}
          price={buildDetails?.case?.price}
          link={buildDetails?.case?.link}
          company={buildDetails?.case?.company}
          img={buildDetails?.case?.img}
        />
        <Part
          part="PowerSupply"
          name={buildDetails?.psu?.name}
          title1="Wattage:"
          detail1={`${buildDetails?.psu?.wattage}W`}
          title2="Efficiency:"
          detail2={buildDetails?.psu?.rating}
          price={buildDetails?.psu?.price}
          link={buildDetails?.psu?.link}
          company={buildDetails?.psu?.company}
          img={buildDetails?.psu?.img}
        />
      </div>
    </div>
  );
}

export default BuildElab;
