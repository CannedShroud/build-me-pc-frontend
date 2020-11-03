import { useState, useEffect } from "react";
import axios from "./axios";

function Gate(id) {
  const [build_id] = useState(id);
  const [builds, setBuilds] = useState({});
  const [buildDetails, setBuildDetails] = useState({});
  useEffect(() => {
    axios.get("/builds_list").then((res) => setBuilds(res.data));
    axios
      .get("/build_details?build_id=" + build_id)
      .then((res) => setBuildDetails(res.data));
  }, [build_id]);
  return { builds: builds, buildDetails: buildDetails };
}

export default Gate;
