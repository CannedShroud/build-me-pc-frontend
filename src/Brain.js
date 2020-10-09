import { useState, useEffect } from "react";
import db from "./firebase";

function Brain(id = "test", collection = "test") {
  const [build, setBuild] = useState({});
  useEffect(() => {
    db.collection(collection)
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
  }, [id, collection]);
  return build;
}

export default Brain;
