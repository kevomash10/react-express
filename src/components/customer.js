import React, { useState, useEffect } from "react";
import style from "./customer.module.css";
const Customer = () => {
  const [customers, setCustomers] = useState([]);

  //   const getCustomers = async () => {
  //     const resp = await fetch("/api/customers");
  //     resp.json().then(res => setCustomers(res));
  //     console.log(resp);

  useEffect(() => {
    //class components
    // fetch("/api/customers").
    //   .then(res => res.json())
    //   .then(res => this.setState({ planets: res }))
    const getCustomers = async () => {
      const response = await fetch(`/api/customers`);
      const data = await response.json();
      setCustomers(data);
      console.log(data);
    };
    getCustomers();
  }, []);

  return (
    <div className={style.customer}>
      {/* // <span>{JSON.stringify(customers)}</span> */}
      <h2>customers</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.firstName}
            {customer.lastName}
          </li>
        ))}
      </ul>
      {/* <h3>firstname</h3>
      <h3>lastname</h3> */}
    </div>
  );
};

export default Customer;
