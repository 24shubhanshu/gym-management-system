import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MemberCards from '../../component/membercards/MemberCards';

const GeneralUser = () => {

  const [header, setHeader] = useState("");
    const [data,setData] = useState([]);
    useEffect(() => {
        const func = sessionStorage.getItem('func');
        functionCall(func)
    }, [])

    const functionCall = async (func) => {
        switch (func) {

            case "Joined Members":

                setHeader("Monthly Joined Members")
                // var datas = await getMonthlyJoined();
                // setData(datas.members);
                break;

            case "Expiring within 3 days":

                setHeader("Expring In 3 Days Members")
                // var datas = await threeDayExpire();
                // setData(datas.members);
                break;

            case " Expiring within 4-7 days":

                setHeader("Expring In 4-7 Days Members")
                // var datas = await fourToSevenDaysExpire();
                // setData(datas.members);
                break;

            case "expired":

                setHeader(" Expired")
                // var datas = await expired();
                // setData(datas.members);
                break;

            case "inActiveMembers":

                setHeader("Inactive Members")
                // var datas = await inActiveMembers();
                // setData(datas.members);
                break;

        }
    }


  return (
    <div   className='text-black p-5 w-full flex-col h-screen ' >
        <div className='border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3'>
                <Link to={'/dashboard'} className='border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
                    <ArrowBackIcon /> Back To Dashboard
                </Link>  
            </div> 

             <div className='mt-5 text-xl text-slate-900'>
                {header}
            </div>

            <div className="mt-3 p-3 rounded-lg grid grid-cols-3 bg-slate-100 overflow-x-auto h-[78%] ">
              <MemberCards/>
              <MemberCards/>
              <MemberCards/>
              <MemberCards/>
            </div>



    </div>
  )
}

export default GeneralUser