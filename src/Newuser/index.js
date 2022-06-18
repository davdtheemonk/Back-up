import React,{useState}from "react"
import "./styles.css"
import {v4 as uuidv4} from "uuid"
import toast from "react-hot-toast"
import { ToastContainer, toast as toasty } from 'react-toastify';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import axios from "axios"
import GroupIcon from '@mui/icons-material/Group';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Account from "../Account"
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import { AddOutlined } from "@mui/icons-material"
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Button from '@mui/material/Button';
import IDE from "../IDE"
import Notifications from "../Notifications"
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { confirmAlert } from 'react-confirm-alert'; // Import.
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Questioner from "../Questioner";
import TextField from '@mui/material/TextField';
import NotesIcon from '@mui/icons-material/Notes';
import Notepad from "../Notepad"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import {Resizable} from "re-resizable"
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {selectUser} from "../features/userSlice"
import {useSelector} from "react-redux"
import Jitsi from "../Jitsi"
import Extra from "../Extra"
import uuid from 'uuid-random';
import Draggable from "react-draggable"
export default function Newuser(props){
    //  <button className="new_userstartbtn">Join Workspace</button>
    const [adder,setAdder] = useState(false)
    const [jisti,showJitsi] = useState(false)
  
    const [popUp, setPopUp] = useState(false)
    const [loader,setLoader] = useState(false);
    const duringPopUp = popUp ? "during-popup" : ""

    const [poster,setPoster] = useState(false)    
    const [open, setOpen] = React.useState(false);
    const [email,setEmail] = React.useState("")
    const [jwttoken,setJwtToken]=React.useState("")
    const user= useSelector(selectUser)
    const handleMeeting = ()=>{
      const token = {
        id: uuid(),
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        appId:"vpaas-magic-cookie-d456c721752b4d528af42773285d5f40", 
        kid: "vpaas-magic-cookie-d456c721752b4d528af42773285d5f40/2911d6"
      }
      axios.post("https://eins-board-backend.herokuapp.com/tokenizer/",token).then((res)=>{
        setJwtToken(res.data)
        showJitsi(true)
        
        toast.success("meeting started")
      }
      ).catch((err)=>{
       
        toast.error("Could not start Meeting")
      })
   
    }
    const handleInvite =()=>{
      setOpen(false)
      const invite={
        email:email,
        userId:user.uid
      }
      if(email){
      axios.post(`https://eins-board-backend.herokuapp.com/workspaces/sendInvite/${props.workspaceurl}`,invite).then((res)=>{
        toast.success(`Invite Sent to ${email}`)
      }).catch(err=>{
   
        toast.error("Could not create send Invite " + err)
      })}
      else{
        toast.error("Enter a valid email")
      }
      
      
    }
    //For students in workspace
    /*
    confirmAlert({
      customUI: ({ setPoster }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <h1>timer</h1>
            <p>You want to delete this file?</p>
            <button onClick={()=>
            setPoster(false)}>No</button>
            <button
              onClick={() => {
                setPoster(false)
              
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      }
    });
    */
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [workspaceId,setworkspaceId] = React.useState("")
            const [workspacename,setworkspaceName] = React.useState("")
      function createNewWorkspace (e){
          e.preventDefault();
          const id=uuidv4;
          setworkspaceId(id);
         
          const workspace={
            workspacename:workspacename,
            workspaceId:workspaceId,
          }
          
        if(workspaceId && workspacename){
          
          axios.post("https://eins-board-backend.herokuapp.com/workspaces/add",workspace).then((res)=>{
            toast.success("Created new workspace")
         window.location = `/portal/ws/${workspaceId}`
        toast.success("welcome to your new workspace")  
        }).catch(err=>{
        
            toast.error("Could not create workspace")})
   }else{
    toast.error("Workspace ID and Workspace Name are required")
      
      }
      }
      
   
    return(
     
     <div className="newuser_cont" onClick={()=>{
       props.handleClosenotification()
       props.setOpenAccounts(false)


     }}>
                       {jwttoken!=="" &&
    <Draggable bounds="parent">
 

          <div  className="Jisti_app" >
          <button className="popup-x" onClick={()=>{
            setJwtToken("")
          }}>x</button>
           <Jitsi workspaceId={props.workspaceurl} jwttoken={jwttoken}/>
</div>
 

</Draggable>
}
{loader==true?<div className="login-image-cont">
      <img src="/dev-icon.gif"/></div>:
      <>
   
        {props.visible==true&&props.workspaceurl==null?
  
  
    <div className="user_info_workspace_over">
          <div className="newuser_dash">
          <div className="user_info_notifications_header">
          <img src="/index.svg" className="notification_head"></img>
           <p></p>
           </div>
           <img className="newuser_img" src="/moonlight.svg"></img>
     <p className="text-user-dash">It seems like you are not in a workspace.Register one below</p>

<input className="inputBox"onChange={(e)=>setworkspaceName(e.target.value)} value={workspacename}  placeholder="workspace name"/> 
<input className="inputBox" onChange={(e)=>setworkspaceId(e)} value={workspaceId} placeholder="workspace ID"/>  
         
        <div className="newuser_btns">
        <button className="btn new_userstartbtn" onClick={(e)=>{
           setLoader(!loader)
           setTimeout(()=>{
               setLoader(loader=>!loader)},2500);
          createNewWorkspace(e)
          }}>Register Workspace</button>
       
    </div>

       </div>
       
       
      </div>
        
        :<>    
   
        <Draggable>
          <div>
      
            {popUp&& <Questioner setVisible={setPopUp}/>}
              </div>
              </Draggable>
          
              <Draggable>

          <div>
              {props.ide && <IDE setIDE={props.setIDE}/>}
              </div>
              
              </Draggable>
              <Draggable axis="y">
              <div>
      {props.notes&& <Notepad setNoter={props.setNoter}/>

      }
    </div>
    </Draggable>
              <Draggable>
              <div >
              {adder && <Extra setNoter={props.setNoter} setAdder={setAdder}/>}
              </div>
              </Draggable>
              {props.openNotification &&
<Notifications  handleClosenotification={props.handleClosenotification}/>

}
{
  props.openAccounts &&<Account/>
}

            <div className="newuser_cont_allowed">

   

          <div className="user_workspace_name">   <h3>Start Meeting</h3>
            <div className="user_account"  onClick={()=>{
              handleMeeting()
            toasty.success('Starting Jitsi Client', {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            }
            }>
            <SupervisedUserCircleIcon  sx={{color:"white"}}/>
              </div></div>
         
              <div className="user_workspace_name" onClick={()=>{
                setPopUp(true)
              }}>   <h3>Post Question</h3>
            <div className="user_question">
            <LiveHelpIcon  sx={{color:"white"}}/>
              </div></div>
          <div className="user_workspace_users">  
          <h3>Members</h3>
            <div className="user_members">
           
              <p>0</p></div></div>
       
         
     
        </div>

        <div className="user_info_workspace_over">
         <div className="user_info_workspace">
           <div className="user_info_notifications_header">
          
            <NotesIcon sx={{marginLeft:2,color:"rgba(99, 99, 99, 0.2)"}} />
             <p>Add Extra Resources</p>

             <div className="todo_add_button">
            <AddBoxIcon onClick={()=>{
              setAdder(true)
            }}fontSize="large"/>
             </div>
           </div>

           <div>
           </div>
         </div>
         </div>
         <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Invite Members</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To invite a member to your Workspace please send an invite to his or her email.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleInvite}>Invite</Button>

        </DialogActions>
      </Dialog>
         <div onClick={handleClickOpen} className="membersbtn">
           
           < PersonAddAltIcon fontSize="large" className="add_outlined"/>
             </div>
         </>

        }
</>
}
        </div>


      
    )
    
}