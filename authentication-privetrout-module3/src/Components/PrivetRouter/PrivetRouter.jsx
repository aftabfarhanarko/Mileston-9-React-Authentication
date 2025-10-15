import React, { use } from 'react';
import { AuthContext } from '../../context/MyContext/MyContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {
    const {usersa,loding} = use(AuthContext);
    const useLocations = useLocation()
    

    if(loding){
        return <span className="loading loading-spinner text-secondary"></span>

    }


    if(usersa){
        return children;
    }
    return <Navigate to='/loging'></Navigate>
};

export default PrivetRouter;