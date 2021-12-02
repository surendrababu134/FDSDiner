import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../utils/utils";

const ItemsPage = () => {
    const [checkOutObj,setCheckOutObj] = useState({});
    const [tableNo,setTableNo] = useState("");
    let orderValue = {};
    const history = useNavigate();

    useEffect(()=>{
        if(cookies.get("login") !== "true"){
            history('/');
          }
    },[])
  const [items, setItems] = useState({
    menuBar: ["snacks", "mainCourse", "deserts"],
    snacks: [
      {
        itemId: 1,
        itemName: "Veg Manchuria",
        itemType: "Veg",
        quantity: 0,
        itemPrice: "120",
      },
      {
        itemId: 2,
        itemName: "Baby Corn",
        itemType: "Veg",
        quantity: 0,
        itemPrice: "140",
      },
      {
        itemId: 3,
        itemName: "Chilli Chicken",
        itemType: "Non-Veg",
        quantity: 0,
        itemPrice: "160",
      },
    ],
    mainCourse: [
      {
        itemId: 1,
        itemName: "Veg Biryani",
        itemType: "Veg",
        quantity: 0,
        itemPrice: "160",
      },
      {
        itemId: 2,
        itemName: "Chicken Biryani",
        itemType: "Non-Veg",
        quantity: 0,
        itemPrice: "200",
      },
    ],
    deserts: [
      {
        itemId: 1,
        itemName: "Venila",
        itemType: "Veg",
        quantity: 0,
        itemPrice: "100",
      },
      {
        itemId: 2,
        itemName: "Butter scotch",
        itemType: "Veg",
        quantity: 0,
        itemPrice: "120",
      },
    ],
  });

  const decrementItem = (menuName, itemObj) => {
      let itemList = JSON.parse(JSON.stringify(items));
      let menuList = JSON.parse(JSON.stringify(itemList[menuName]));
      let getIndex = menuList.findIndex(x=> x.itemId === itemObj.itemId);
      if(menuList[getIndex]["quantity"]>0){
        menuList[getIndex]["quantity"] = menuList[getIndex]["quantity"]-1;
      }else{
        menuList[getIndex]["quantity"] = 0;
      }
      itemList[menuName] = menuList;
      setItems(itemList)
  };

  const incrementItem = (menuName, itemObj) => {
    let itemList = JSON.parse(JSON.stringify(items));
    let menuList = JSON.parse(JSON.stringify(itemList[menuName]));
    let getIndex = menuList.findIndex(x=> x.itemId === itemObj.itemId);
    if(menuList[getIndex]["quantity"]<100){
      menuList[getIndex]["quantity"] = menuList[getIndex]["quantity"]+1;
    }
    itemList[menuName] = menuList;
    setItems(itemList)
  };

  const checkoutList = () =>{
      let checkoutList = [];
      let orderTotal = 0;
      
      items.menuBar.map((ite,i)=>{
        items[ite].map((itemObj,index)=>{
            if(itemObj.quantity > 0){
                itemObj.totalPrice = itemObj.quantity * parseInt(itemObj.itemPrice);
                checkoutList.push(itemObj);
            }
        })
      });

      checkoutList.map((itemP,selec)=>{
        orderTotal = orderTotal + itemP.totalPrice;
      })
      orderValue.checkoutList = checkoutList;
      orderValue.orderTotal = orderTotal;
      return (
        checkoutList.map((checkItem,indx)=>{
            return (
                <div className="checkDivItem">
                    <Grid container spacing={1}>
                        <Grid item xs={5}>
                        <span>{checkItem.itemName}</span>
                            <span>{checkItem.itemType === "Veg" ? (
                                <div className="inlineDiv green"></div>
                              ) : (
                                <div className="inlineDiv red"></div>
                              )}</span>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5}>
                            {checkItem.quantity} x {checkItem.itemPrice} = {checkItem.totalPrice}
                        </Grid>
                    </Grid>
                    
                </div>
            )
        })
      )
  }

  const checkoutOrder = () =>{
      if(orderValue.orderTotal === 0){
        toast.error("Please take the order.")
      }else{
        if(tableNo){
            history('/order/1');
        }else{
            toast.error("Please enter table number.")
        }
      }
      
  }
  
  return (
      <>
    <div className="bodyItemContainer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {items &&
            items.menuBar.map((itemVal, index) => {
              return (
                <div>
                  <div className="menuName">{itemVal}</div>
                  {items[itemVal].map((itemV, i) => {
                    return (
                      <div className="itemNames">
                        <Grid container spacing={2}>
                          <Grid item xs={8}>
                            <span>{itemV.itemName}</span>
                            <span>
                              {itemV.itemType === "Veg" ? (
                                <div className="inlineDiv green"></div>
                              ) : (
                                <div className="inlineDiv red"></div>
                              )}
                            </span>
                          </Grid>

                          <Grid item xs={2}>
                            <span className="floatVal">
                              Rs.{itemV.itemPrice}
                            </span>
                          </Grid>
                          <Grid item xs={2}>
                            <span className="floatVal buttonDesign">
                              <div
                                onClick={() => {
                                  decrementItem(itemVal, itemV);
                                }}
                                className="inlineBlock floatLeftItemCount"
                              >
                                -
                              </div>
                              <div className="inlineBlock alignInCenter">
                                {itemV.quantity}
                              </div>
                              <div
                                className="inlineBlock floatRightItemCount"
                                onClick={() => {
                                  incrementItem(itemVal, itemV);
                                }}
                              >
                                +
                              </div>
                            </span>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </Grid>
      </Grid>
    </div>
    <div className="divItemReview">
        {checkoutList()}
        {orderValue.orderTotal === 0?"":<div className="orderValueTotal">
            Rs. {orderValue.orderTotal} /-
        </div>}

        {orderValue.orderTotal === 0?"":<div className="marginDiv">
            Deliver To:
        </div>}
        {orderValue.orderTotal === 0?"":<div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Table No</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={tableNo}
          onChange={(e)=>{
              setTableNo(e.target.value)
          }}
          label="Table No"
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
        </Select>
      </FormControl>
        </div>}
    <Button variant="contained" className="width-100" onClick={checkoutOrder}>CheckOut</Button>
    <Button variant="outlined" className="width-100 marginTop">Cancel</Button>
    </div>
    </>
  );
};

export default ItemsPage;
