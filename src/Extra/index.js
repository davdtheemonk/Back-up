import React from "react"
import "./styles.css"
import { YouTube } from "@mui/icons-material"
import { GitHub } from "@mui/icons-material"
import { BrowserUpdatedOutlined } from "@mui/icons-material"
import { UploadFile } from "@mui/icons-material"

export default function Extra({setAdder,setNoter}){
    return(
    
            <div className="PopUp">
          
            <button className="popup-x" onClick={()=> setAdder(false)} >x</button>
            <div className="pu-content-container">
                <div className="content_over_bar">
                <div className="upload">
                    
                   
                    <div className="content_dash33" ></div>
                    <UploadFile onClick={()=>{
                        setNoter(true)
                        setAdder(false)}}  fontSize="large"/>
                    <p>Custom</p>

                </div>
                <div className="upload">
                <div className="content_dash33"></div>
                <BrowserUpdatedOutlined  fontSize="large"/>
                <p>Web</p>

                </div>
                <div className="upload">
                <div className="content_dash33"></div>
                <YouTube sx={{color:"red"}} fontSize="large"/>
                <p>Youtube Video</p>

                </div>
                <div className="upload">
                <div className="content_dash33"></div>
                <GitHub  fontSize="large"/>
                <p>GitHub Repo</p>

                </div>
                
                
               
               

            </div>
            </div>
           
            
        </div>

       
    )
}