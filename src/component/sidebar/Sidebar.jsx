// import React, { useEffect, useState } from 'react' ;
// import HomeIcon from '@mui/icons-material/Home';
// import GroupIcon from '@mui/icons-material/Group';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { Link, useNavigate } from 'react-router-dom';
// const Sidebar = () => {
//   const navigate = useNavigate();

// const [greeting, setGreeting] = useState("")

// const greetingMessage =()=>{
//   const currentHour = new Date().getHours();
//   if(currentHour<12){
//     setGreeting("GoodMorning")
//   }
//    else if(currentHour<18){
//     setGreeting("Good Afternoon")
//   }
//    else if(currentHour<21){
//     setGreeting("Good Evening")
//   }
//    else {
//     setGreeting("Good Night")
//   }
// }
// useEffect(() => {
//   greetingMessage()
// }, [])


// const handleLogout=async()=>
// {
// sessionStorage.clear();
// navigate('/');
// }



//   return (
//     <div className='w-1/4 h-[100vh] border-2 bg-black text-white p-5'>
//       <div className='text-center text-3xl'>
//              Power Zone
//       </div>
//       <div className='flex gap-5 my-5'>
//           <div className='w-[100px] h-[100px] rounded'>
//                <img className='w-full h-full rounded-full'  src="https://tse1.mm.bing.net/th/id/OIP.bfRNsG9Y8v2J1w2uwW6EywHaD8?pid=Api" alt="" />
//           </div>
//           <div>
//           <div className='text-xl '>{greeting}</div>
//             <div className='text-l mt-1 font-semibold'>Admin</div>
//           </div>

//       </div>
      
//           <div className='mt-5 py-5 border-t-2 border-slate-700'>
//             <Link to="/dashboard" className={`flex gap-2 p-2 font-semibold text-xl bg-slate-800 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname==="/dashboard"?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null}`}>
//               <div><HomeIcon/></div>
//               <div>Dashboard</div>
//             </Link>

//               <Link to='/members' className={`flex gap-2 p-2 font-semibold text-xl mt-5 bg-slate-800 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname==="/members"?'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500':null} `}>
//               <div><GroupIcon/></div>
//               <div>Members</div>
//             </Link>

//               <div onClick={()=>{handleLogout()}} className='flex gap-2 p-2 font-semibold text-xl mt-5 bg-slate-800 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
//               <div><LogoutIcon/></div>
//               <div>Log Out</div>
//             </div>
//           </div>
        

//     </div>
//   )
// }

// export default Sidebar

import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else if (currentHour < 21) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLogin(false); // ✅ This updates the parent App state
    navigate("/");
  };

  return (
    <div className='w-1/4 h-[100vh] border-2 bg-black text-white p-5'>
      <div className='text-center text-3xl'>Power Zone</div>
      <div className='flex gap-5 my-5'>
        <div className='w-[100px] h-[100px] rounded'>
          <img className='w-full h-full rounded-full' src="https://tse1.mm.bing.net/th/id/OIP.bfRNsG9Y8v2J1w2uwW6EywHaD8?pid=Api" alt="" />
        </div>
        <div>
          <div className='text-xl '>{greeting}</div>
          <div className='text-l mt-1 font-semibold'>Admin</div>
        </div>
      </div>

      <div className='mt-5 py-5 border-t-2 border-slate-700'>
        <Link to="/dashboard" className={`flex gap-2 p-2 font-semibold text-xl bg-slate-800 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname === "/dashboard" ? 'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : ''}`}>
          <div><HomeIcon /></div>
          <div>Dashboard</div>
        </Link>

        <Link to='/members' className={`flex gap-2 p-2 font-semibold text-xl mt-5 bg-slate-800 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname === "/members" ? 'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : ''}`}>
          <div><GroupIcon /></div>
          <div>Members</div>
        </Link>

        <div onClick={handleLogout} className='flex gap-2 p-2 font-semibold text-xl mt-5 bg-slate-800 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
          <div><LogoutIcon /></div>
          <div>Log Out</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
