import React from "react"
import "./styles.css"
import { selectUser } from "../features/userSlice"
import { useSelector } from 'react-redux'
import { SettingsOutlined } from "@mui/icons-material"
import { InfoOutlined } from "@mui/icons-material";
import { MessageOutlined } from "@mui/icons-material";

export default function Account(){
    const user = useSelector(selectUser)
    return(
        <div className="account_bar">
            <div className="settings_bar">
                <p>{user.displayName.toLowerCase()}</p>

            </div>
            <div className="account_type">
                <h4>Role</h4>
                <p>instructor</p>
                
                
            </div>
            <hr></hr>
            <div className="dash_accounts"></div>
            <div className="account_settings">
       
            <p>Settings</p>
            
            <SettingsOutlined/>
                
            
               
                
                    

            </div>
                <div className="account_settings">
              
                <p>Feedback</p>
                <MessageOutlined/>
                </div>
         
            
            

        </div>
    )

}