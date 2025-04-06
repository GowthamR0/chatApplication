// import { useEffect, useState } from "react"
// import { UserData } from "../ServiceApi/UserFileAPI"
// import { useNavigate } from "react-router-dom"
// import '../CSS/Grid.css'
// function go(){
//     console.log("ArunSir");
    
// }
//  function  Gird(){
//     const[userDetailData,setUserDetailData]=useState([])
//     const navigate=useNavigate();

    
//     useEffect(()=>{
       
//         fetchData()
        
//     },[])
//     const fetchData=async()=>{
//         const userData=await UserData()
//     console.log(userData?.data)
//     if(userData?.data){
//         setUserDetailData(userData.data)
//     }
//     }
//     const handleDelete=(index: number)=>{
//         go()
//         arunSir()
//         setUserDetailData(userDetailData.filter((ele,id)=>id!==index))
//     }
//     const arunSir=()=>{
//         console.log(999);
        
//     }
//     return(
//         <div>
//             <div className="userDetail">
//             <tbody className="userInformation">
//             {userDetailData?.map((ele,index)=>(
//                 <tr key={ele}>
//                     <td className="userData">{index+1}</td>
//                     <td className="userData">{ele.firstName}</td>
//                     <td className="userData">{ele.lastName}</td>
//                     <td className="userData">{ele.emailAddress}</td>
//                     <td className="userData">{ele.mobileNumber}</td>
//                     <td className="userData"><button onClick={()=>{navigate('/',{state:{element:ele,id:index}})}}>update</button></td>
//                     <td className="userData"><button onClick={()=>{handleDelete(index)}}>Del
//                         e</button></td>                    
//                 </tr>
                
//     ))
// }
//                 </tbody>
//                 </div>
            
//         </div>
//     )
// }
// export default Gird