import React from "react";
import LxtListUsers from "./components/LxtListUsers";
import axios from "./api/LxtApi";
export default function LxtApp() {
  const [lxtListUsers, setLxtListUsers] = useState([]);
  // doc du lieu tu api

  const lxtGetAllUser = async () => {
    const lxtResponse = await axios.get("lxtUsers");
    console.log("Api Data:", lxtResponse.data);
    setLxtListUsers(lxtResponse.data);
  };

  useEffect(() => {
    lxtGetAllUser();
    console.log("State Data", lxtListUsers);
  }, []);

  return (
    <div className="contaicer border my-3">
      <h1>làm vc với MockApi</h1>
      <hr />
      <LxtListUsers renderLxtListUsers={lxtListUsers} />
    </div>
  );
}
