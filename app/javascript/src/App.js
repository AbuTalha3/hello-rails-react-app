import React, { useEffect, useState } from "react";
import Greeting from "./component/Greeting";
import { useDispatch } from "react-redux";
import { fetchThunk } from "./redux/greetingSlice";

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchThunk());
    }, [dispatch]);

    return(
        <React.Fragment>
            <Greeting />
        </React.Fragment>
    );
};

export default App;
