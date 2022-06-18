import React,{useState} from "react"
import "./style.css"
import {db} from '../firebase'
import ContentHeader from "../ContentHeader"
import {useEffect} from "react"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import ForumIcon from '@mui/icons-material/Forum';
import {AddCircleOutlined,AddCircleSharp , AddCircleRounded, GroupAddOutlined} from "@mui/icons-material"
import NotesIcon from '@mui/icons-material/Notes';
import TerminalIcon from '@mui/icons-material/Terminal';
import Chat from "../Chat"
import { TextField } from "@material-ui/core"
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import Message from "../Message"
import { useSelector } from 'react-redux'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {selectCommunityId,selectCommunityName} from '../features/communitySlice'
import { selectUser } from '../features/userSlice'
import Assessments from "../Assessments"
import Community from "../Community"
import Topics from "../Topics"
//import Playground from "../Playground"
import Notepad from "../Notepad"
import Newuser from "../Newuser"

export default function Content(props){
  
  
    const [communities,setCommunity] = React.useState([]);
    const user = useSelector(selectUser);
    const [input,setInput] = React.useState('')
    const [assessmentpage,setAssesmentPage] = React.useState(false)
    const [notepadpage,setNotepadPage] = React.useState(false)
    const [communitypage,setCommunityPage] = React.useState(false)
    const [topicspage,setTopicsPage] = React.useState(false)
    const [playgroundpage,setPlaygroundPage] = React.useState(false);
     const [newuser,setNewuserpage] = React.useState(true);
    
     const [loader,setLoader] = useState(false);
     const navigate = useNavigate();


    const communityId = useSelector(selectCommunityId);
    const communityName = useSelector(selectCommunityName);
   
    
    const topics_selec = {
      display:"none",
    }

  
   
    useEffect(()=>{
   
        /* db.collection('communities').onSnapshot(snapshot=>{
           setCommunity(snapshot.doc.map(doc=>({
               id:doc.id,
               community: doc.data()
           })))
       })*/
      })
   
 
    const handleAddCommunity = () =>{
      const communityName = prompt("Enter Community Name ")
      if (communityName){
        db.collection('communities').add({
          communityName:communityName,
        })
      }
     
    }
  
    //<Playground visible={playgroundpage}/>
    return(
        <div className="content">
  
             <ContentHeader setOpenAccounts={props.setOpenAccounts}handleClickOpennotification={props.handleClickOpennotification} />
             <Newuser setOpenAccounts={props.setOpenAccounts} openAccounts={props.openAccounts} handleClosenotification={props.handleClosenotification}openNotification={props.openNotification} setNoter={props.setNoter} notes={props.notes} setIDE={props.setIDE} ide={props.ide}workspaceurl={props.workspaceId}visible={newuser}/>

            

             
             
          
             
             
         

           
        </div>
    )
}