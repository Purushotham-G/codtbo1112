import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFirstApiData } from "../Redux/homeSlice";

function Home() {
  const dispatch = useDispatch();
  const { firstApiData, firstApiLoading } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getFirstApiData());
  }, []);

  return (
    <>
      <div>
        {/* jhjgjg{firstApiLoading.toString()} */}
        <h1>{firstApiData?.title}</h1>
      </div>
    </>
  );
}

export default Home;
