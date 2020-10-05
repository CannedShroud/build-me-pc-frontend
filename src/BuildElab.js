import React, { useEffect, useState } from "react";
import "./BuildElab";
import Part from "./Part";
import db from "./firebase";

function BuildElab() {
  const [spec, setSpec] = useState({});
  useEffect(() => {
    db.collection("builds")
      .doc("value")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setSpec(doc.data());
        } else {
          console.log("No such document");
        }
      })
      .catch((error) => {
        console.log("Error getting document: ", error);
      });
  }, []);

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
        name={spec.cpu?.name}
        detail2={`Clockspeed: ${spec.cpu?.clocks} GHz`}
        company={spec.cpu?.company}
        detail1={`Compute: ${spec.cpu?.cores}C/${
          spec.cpu?.smt ? spec.cpu?.cores * 2 : spec.cpu?.cores
        }T`}
        img={spec.cpu?.img}
      />

      <Part
        part="Motherboard"
        name={spec.mbd?.name}
        detail1={`Sata Ports: ${spec.mbd?.sataports}`}
        detail2={`Ram slots: ${spec.mbd?.ramslots}`}
        company={spec.mbd?.company}
        img={spec.mbd?.img}
      />
      <Part
        part="RAM"
        name={spec.dram?.name}
        detail1={`Size: ${spec.dram?.size} GB (${spec.dram?.config})`}
        detail2={`Speed: ${spec.dram?.speed} Mhz`}
        company={spec.dram?.company}
        img={spec.dram?.img}
      />
      <Part
        part="Storage"
        name={spec.ssd?.name}
        detail1={`Size: ${spec.ssd?.capacity} GB`}
        detail2={`Type: ${spec.ssd?.type}`}
        company={spec.ssd?.company}
        img={spec.ssd?.img}
      />
      <Part
        part="GPU"
        name={spec.gpu?.name}
        detail1={`VRAM: ${spec.gpu?.vram} GB`}
        detail2={`Bus: ${spec.gpu?.bus} bit`}
        company={spec.gpu?.aib}
        img={spec.gpu?.img}
      />
      <Part
        part="Case"
        name={spec.case?.name}
        company={spec.case?.company}
        img={spec.case?.img}
      />
      <Part
        part="PowerSupply"
        name={spec.psu?.name}
        detail1={`Wattage: ${spec.psu?.wattage}W`}
        detail2={`Efficiency: ${spec.psu?.rating} rated`}
        company={spec.psu?.company}
        img={spec.psu?.img}
      />
    </div>
  );
}

export default BuildElab;
