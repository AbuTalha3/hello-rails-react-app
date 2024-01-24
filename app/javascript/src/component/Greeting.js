import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Greeting = () => {
    const data = useSelector((state) => state.greeting);
    console.log(data);
    const { message } = data;
    return (
        <p>{ message ?? "Default message"}</p>
    );
};

export default Greeting;
