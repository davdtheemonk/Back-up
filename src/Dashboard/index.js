import React, { useEffect,useState} from "react"
import "./style.css"
import Sidebar from "../Sidebar"
import Content from "../Content"
import {auth} from "../firebase"
import Login from "../Login"
import {useAuthState} from "react-firebase-hooks/auth"
import {useNavigate} from "react-router-dom" 
import {useDispatch,useSelector} from "react-redux" 
import Bottomnav from "../Bottomnav"
import {selectUser,login,logout} from "../features/userSlice"
import {useParams} from "react-router-dom"
export default function Dashboard(){

    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const {id} =useParams()
    const [ide,setIDE] = useState(false)
    const [assessment,setAssessment] =useState(false)
    const [notes,setNoter] = useState(false)
    const [openNotification,setOpennotification] = useState(false)
    const [openAccounts,setOpenAccounts] = useState(false)
    const handleClickOpennotification = () => {
        setOpennotification(true);
        console.log("clicked")
      };
    
      const handleClosenotification = () => {
        setOpennotification(false);
      };

    /*

    {user?<div className="dash_container">
        
    <Sidebar/>
    <Content/>
    



</div>:<Login/>}
</>*/

    useEffect(() => {
        auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                dispatch(login({
                    uid:authUser.uid,
                    photo:authUser.photoURL,
                    email:authUser.email,
                    displayName : authUser.displayName
                }))
            }
            else{
                dispatch(logout())
                
            }
        })
      }, [dispatch]);

    return(
        <>

    {user?<div className="dash_container">
        {id==null?
    <Content/>:
    <>
        <Sidebar  setNoter={setNoter} notes={notes} setIDE={setIDE} ide={ide}/>
        <Bottomnav/>
        
    <Content openAccounts={openAccounts} setOpenAccounts={setOpenAccounts} openNotification={openNotification} handleClickOpennotification={handleClickOpennotification} handleClosenotification={handleClosenotification} setNoter={setNoter} notes={notes} setIDE={setIDE} ide={ide} workspaceId={id}/>
    </>
    

}

</div>:<Login/>}
</>
)
}