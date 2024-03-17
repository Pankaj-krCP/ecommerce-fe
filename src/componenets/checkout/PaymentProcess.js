import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import BreadCrumb from "./BreadCrumb";
import { base_url, config } from "../../utils/axiosConfig";
import { createAnOrder, deleteUserCart } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const PaymentProcess = (props) => {
  const { shippingInfo, setShippingInfo } = props;
  const [orderItems, setOrderItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  const user = useSelector((state) => state?.auth?.user);

  useEffect(() => {
    let items = [];
    for (let index = 0; index < userCartState?.products?.length; index++) {
      items.push({
        product: userCartState?.products[index]?.product?._id,
        count: userCartState?.products[index]?.count,
        color: userCartState?.products[index]?.color,
        price: userCartState?.products[index]?.price,
      });
    }
    setOrderItems(items);
  }, [userCartState]);

  // Function to load the Razorpay script
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // Function to handle the checkout process
  const checkOutHandler = async () => {
    // Load the Razorpay script
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    // Create a new order on your backend
    const result = await axios.post(
      `${base_url}user/order/checkout`,
      { amount: userCartState?.cartTotal + 5 },
      config
    );
    if (!result) {
      alert("Something went wrong");
      return;
    }
    const { amount, id: order_id, currency } = result.data.order;

    // Configure the Razorpay payment options
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: amount,
      currency: currency,
      name: `${user?.firstName} ${user?.lastName}`,
      description: "Test Transaction",
      order_id: order_id,
      handler: handlePaymentResponse,
      prefill: {
        name: user?.firstName,
        email: user?.email,
        contact: user?.mobile,
      },
      notes: {
        address: "E digit",
      },
      theme: {
        color: "#61dafb",
      },
    };

    // Create a new Razorpay instance and open the payment dialog
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  // Function to handle the payment response
  const handlePaymentResponse = async (response) => {
    const data = {
      orderCreationId: response.razorpay_order_id,
      razorpayPaymentId: response.razorpay_payment_id,
      razorpayOrderId: response.razorpay_order_id,
    };

    const result = await axios.post(
      `${base_url}user/order/paymentVerification`,
      data,
      config
    );

    dispatch(
      createAnOrder({
        totalPrice: userCartState?.cartTotal,
        totalPriceAfterDiscount: userCartState?.cartTotal,
        orderItems: orderItems,
        paymentInfo: result.data,
        shippingInfo: shippingInfo,
      })
    );
    dispatch(deleteUserCart());
    navigate("/my-orders");
  };

  return (
    <div>
      <BreadCrumb success="payment" />
      <h4 className="mt-5">Payment Process</h4>
      <div className="w-100">
        <div className="d-flex justify-content-between align-items-center mb-0 pt-5">
          <div
            className="text-dark"
            style={{ cursor: "pointer" }}
            onClick={() => setShippingInfo(null)}
          >
            <BiArrowBack /> Return to Address
          </div>
          <button
            className="button border"
            type="submit"
            onClick={checkOutHandler}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcess;
