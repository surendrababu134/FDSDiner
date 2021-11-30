import React from "react";
import { Grid } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cookies } from "../../../utils/utils";

const Restuarants = () => {
  const restList = [
    {
        restId:1,
      restName: "Paradise",
      restImage:
        "https://firebasestorage.googleapis.com/v0/b/fdsdb-62138.appspot.com/o/muttonBiryani.jpeg?alt=media&token=f7ffb50c-2f43-46a8-9d64-f5f67931bbdc",
      rating: "4.5",
      restType: "Veg & Non-Veg",
      deliverTime: "45 mins",
    },
    {
        restId:2,
      restName: "Santosh Daba",
      restImage:
        "https://firebasestorage.googleapis.com/v0/b/fdsdb-62138.appspot.com/o/southIndiaThali.jpeg?alt=media&token=d1ea1bb9-fb5f-49d4-aa9b-73521cc53fad",
      rating: "4.5",
      restType: "Veg",
      deliverTime: "45 mins",
    },
    {
        restId:3,
      restName: "Chakle India",
      restImage:
        "https://firebasestorage.googleapis.com/v0/b/fdsdb-62138.appspot.com/o/northIndian.jpeg?alt=media&token=b813fcb4-6672-4574-a3b2-194ab506bfdb",
      rating: "4.5",
      restType: "Non-Veg",
      deliverTime: "45 mins",
    },
  ];
  const history = useNavigate();

  const selectItems = (item) =>{
      if(cookies.get("login") === "true"){
        history('/items/'+item.restId);
      }else{
          toast.error("Please sign in.")
          history('/');
      }
      
  }
  return (
    <div className="bodyContainer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {restList.map((item, index) => {
            return (
              <div key={index} onClick={()=>{
                  selectItems(item)
                }} className="contentTop">
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <img
                      className="imageDesign"
                      src={item.restImage}
                      width="100%"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <span className="restName">{item.restName}</span>
                    <div className="starPadding"><span><StarRateIcon className="starRating" /></span> <span>{item.rating}</span></div>
                    <div className="starPadding">{item.deliverTime}</div>
                    <div className="starPadding">{item.restType === "Veg & Non-Veg"?<><div className="inlineDiv red"></div><div className="inlineDiv green"></div></>:(item.restType ==="Veg"?<div className="inlineDiv green"></div>:<div className="inlineDiv red"></div>)}</div>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Restuarants;
