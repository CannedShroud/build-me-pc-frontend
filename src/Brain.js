import { useState, useEffect } from "react";
import db from "./firebase";

function Brain(id) {
  const [build, setBuild] = useState({});
  useEffect(() => {
    db.collection("builds")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setBuild(doc.data());
        } else {
          console.log("No such document");
        }
      })
      .catch((error) => {
        console.log("Error getting document: ", error);
      });
  }, [id]);
  return build;
}

export default Brain;
