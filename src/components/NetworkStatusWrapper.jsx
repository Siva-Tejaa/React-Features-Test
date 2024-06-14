import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setOnline, setOffline } from "../redux/features/networkSlice";

const NetworkStatusWrapper = ({ children }) => {
  const dispatch = useDispatch();

  const { isOnline } = useSelector((state) => state.network);

  useEffect(() => {
    const handleOnline = () => dispatch(setOnline());
    const handleOffline = () => dispatch(setOffline());

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [dispatch]);

  if (!isOnline) {
    return (
      <div
        style={{
          backgroundColor: "#F4F2EE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100svh",
        }}
      >
        <p>:( Network Error...Unable to connect to internet ❌</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default NetworkStatusWrapper;
