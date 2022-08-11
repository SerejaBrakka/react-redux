import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const Spin = (props) => {
  const spinner = useSelector((state) => state.appReducer.isLoading);

  return (
    <div className="loader-styles">
      <Loader
        color="#00BFFF"
        height={80}
        width={80}
        type="TailSpin"
        visible={spinner}
      />
    </div>
  );
};

export default Spin;
