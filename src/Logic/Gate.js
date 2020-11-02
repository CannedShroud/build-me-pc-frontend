import { useState, useEffect } from "react";
import axios from "./axios";

function Gate() {
  const [builds, setBuilds] = useState({});
  useEffect(() => {
  axios.get("/builds_list").then((res) => setBuilds(res.data));
  },[]);
  return builds;
}

export default Gate;
