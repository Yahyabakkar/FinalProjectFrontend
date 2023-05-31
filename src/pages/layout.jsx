import React from 'react';
import { Outlet } from 'react-router-dom';
 const  Layout = ()=> {
   return (
    
    <>
    <div style={{display:"flex"}}>
<Outlet/>
    </div>
    </>
    
    )
}
export default Layout;