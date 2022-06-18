
import React from "react";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import ForumIcon from '@mui/icons-material/Forum';
import NotesIcon from '@mui/icons-material/Notes';
import TerminalIcon from '@mui/icons-material/Terminal';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import {Link} from "react-router-dom"
export default function Bottomnav(){
    const [value, setValue] = React.useState(0);
   const navigator = useNavigate();
  
    const topics_selec = {
      display:"none",
    }
    
    return(
        <Paper className="bottom-nav" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        
        <BottomNavigation
           
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
         
          <BottomNavigationAction onClick={()=>{
            navigator("/")
          }} className="bottom-nav-icon" label="Home" icon={<LocalLibraryIcon  />} />
         
       
          <BottomNavigationAction  className="bottom-nav-icon" label="Assessments" onClick={()=>{
            navigator("/portal/ws/assess")
          }} icon={<PendingActionsIcon/>} />
         
          
          <BottomNavigationAction   className="bottom-nav-icon" label="Notepad" onClick={()=>{
            navigator("/portal/ws/note")
          }} icon={<NotesIcon/>} />
          
       
          <BottomNavigationAction onClick={()=>{
            navigator("/portal/ws/community")
          }}  className="bottom-nav-icon" label="Community" icon={<ForumIcon />} />
          
       
          <BottomNavigationAction onClick={()=>{
            navigator("/portal/ws/")
          }} className="bottom-nav-icon" label="Playground" icon={<TerminalIcon />} />
         
        </BottomNavigation>
  
        
      </Paper>

    )
}