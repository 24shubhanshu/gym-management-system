
// import React, { useEffect, useState } from "react";
// import Home from "./pages/Home";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Sidebar from "./component/sidebar/Sidebar";
// import Members from "./pages/members/Members";
// import GeneralUser from "./pages/generalUser/GeneralUser";
// import MemberDetails from "./pages/memberdetails/MemberDetails";

// const App = () => {
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(false);

//   // useEffect(() => {
//   //   const isLoggedIn = sessionStorage.getItem("isLogin");
//   //   if (isLoggedIn === "true") {
//   //     setIsLogin(true);
//   //     navigate("/dashboard");
//   //   } else {
//   //     setIsLogin(false);
//   //     navigate("/");
//   //   }
//   // }, [localStorage.getItem("isLogin")]);

//   useEffect(() => {
//   const isLoggedIn = sessionStorage.getItem("isLogin") === "true";
//   setIsLogin(isLoggedIn);

//   // Only redirect if you're on "/" route
//   if (!isLoggedIn && window.location.pathname === "/dashboard") {
//     navigate("/");
//   }
// }, []); 

// //  useEffect(()=>{
// //     let isLogedIn = localStorage.getItem("isLogin");
// //     if(isLogedIn){
// //       setIsLogin(true);
// //       navigate('/dashboard')
      
// //     }else{
// //       setIsLogin(false)
// //       navigate('/');
// //     }
// //   },[localStorage.getItem("isLogin")])


//   return (
//     <div className="flex">
//       {isLogin && <Sidebar />}
//       <div className="flex-1 w-full">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/members" element={<Members />} />
//           <Route path="/specific/:pages" element={<GeneralUser/>} />
//           <Route path="/member/:id"  element={<MemberDetails/>} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App; 



import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebar from "./component/sidebar/Sidebar";
import Members from "./pages/members/Members";
import GeneralUser from "./pages/generalUser/GeneralUser";
import MemberDetails from "./pages/memberdetails/MemberDetails";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLogin") === "true";
    setIsLogin(isLoggedIn);

    if (!isLoggedIn && location.pathname !== "/") {
      navigate("/");
    }
  }, [location.pathname]);

  return (
    <div className="flex">
      {isLogin && <Sidebar setIsLogin={setIsLogin} />}
      <div className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/specific/:pages" element={<GeneralUser />} />
          <Route path="/member/:id" element={<MemberDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
