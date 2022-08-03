import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react'
import { getThirdApiData } from '../Redux/categorySlice';

function Category() {

    const dispatch = useDispatch();
    const {thirdApiData, thirdApiLoading} = useSelector((state) => state.category)

    useEffect(()=>{
        dispatch(getThirdApiData());
    },[])

    useEffect(()=>{
        console.log(",mnbv,dm",getThirdApiData)
    },[])
  return (
    <div>Category
      {thirdApiLoading.toString()}
      {/* {thirdApiData.details} */}
    </div>
  )
}

export default Category