import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../utils/utils";

const OrdersPage = () => {
    const history = useNavigate();

    useEffect(()=>{
        if(cookies.get("login") !== "true"){
            history('/');
          }
    },[])
      
  const [orderDetails, setOrderDetails] = useState({
    orderId: 1,
    orderItems: [
      {
        itemId: 1,
        quantity: 2,
        itemName: "Chicken Biryani",
        type: "Non-Veg",
        price: 100,
      },
      {
        itemId: 1,
        quantity: 5,
        itemName: "Veg Biryani",
        type: "Veg",
        price: 80,
      },
    ],
    orderCode: "1234",
    orderTotal: "600",
    restDetails: {
      restId: 1,
      restName: "Paradise",
      restImage:
        "https://firebasestorage.googleapis.com/v0/b/fdsdb-62138.appspot.com/o/muttonBiryani.jpeg?alt=media&token=f7ffb50c-2f43-46a8-9d64-f5f67931bbdc",
      rating: "4.5",
      restType: "Veg & Non-Veg",
      deliverTime: "45 mins",
    },
    userId: 1,
  });

  const totalValue = (itemQuantity, itemPrice) =>{
      return itemQuantity*itemPrice;
  }
  return (
    <div className="bodyContainer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <div className="contentTop greyBg">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <span className="restName">{orderDetails.restDetails.restName}</span>
                    <span className="orderValueTotal fontsizeOrder"><b>Order Code: <span className="colorRed">{orderDetails.orderCode}</span></b></span>
                    {/* <div className="starPadding"><span><StarRateIcon className="starRating" /></span> <span>{orderDetails.restDetails.rating}</span></div>
                    <div className="starPadding">{orderDetails.restDetails.deliverTime}</div>
                    <div className="starPadding">{orderDetails.restDetails.restType === "Veg & Non-Veg"?<><div className="inlineDiv red"></div><div className="inlineDiv green"></div></>:(orderDetails.restDetails.restType ==="Veg"?<div className="inlineDiv green"></div>:<div className="inlineDiv red"></div>)}</div> */}
                  </Grid>
                </Grid>
              </div>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
          <Grid item xs={12}>
          <div className="gridItemLevel">
              <Grid container spacing={2}>
                  <Grid item xs={4}><b>Name</b></Grid>
                  <Grid item xs={2}><b>Price</b></Grid>
                  <Grid item xs={2}><b>Quantity</b></Grid>
                  <Grid item xs={4}><span className="orderValueTotal"><b>Total</b></span></Grid>
                  </Grid>
            </div>
          {orderDetails.orderItems.map((item,index)=>{
            return (
                <div className="gridItemLevel"><Grid container spacing={2}>
                {/* <Grid item xs={2}></Grid> */}
                <Grid item xs={4}>
                    {item.itemName}
                    {item.type ==="Veg"?<div className="inlineDiv green"></div>:<div className="inlineDiv red"></div>}
                </Grid>
                <Grid item xs={2}>
                    Rs. {item.price} /-
                </Grid>
                <Grid item xs={2}>{item.quantity}</Grid>
                <Grid item xs={4}>
                    <span className="orderValueTotal">
                    Rs. {totalValue(item.quantity,item.price)} /-</span>
                </Grid>
                {/* <Grid item xs={2}></Grid> */}
            </Grid>
            </div>)
          })}
          <div className="gridItemLevel">
          <Grid container spacing={1}>
            <Grid item xs={12}>
                
                <span className="orderValueTotal">Total Price: Rs. {orderDetails.orderTotal} /-</span>
                
            </Grid>
            </Grid></div>
          </Grid>
      </Grid>
    </div>
  );
};

export default OrdersPage;
