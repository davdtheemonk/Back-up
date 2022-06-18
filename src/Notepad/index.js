import React,{useState} from 'react';

import FormControl from '@mui/material/FormControl';

import Axios from 'axios';
import {Resizable} from "re-resizable"
import toast from "react-hot-toast"
import { FileUploader } from "react-drag-drop-files";
import './styles.css';
import Notes from '@mui/icons-material/Notes';




export default function Notepad({setNoter}){
    const fileTypes = ["PPT", "PDF", "DOCX","PNG","JPG","JPEG"];
    const [file,setFile] = useState(null)
    const handleChange = (file) => {
        setFile(file);
      };
      /////////    <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
   


    return (
      
        <div className="notepad__cont_over">

                 <button className="popup-x" onClick={()=> setNoter(false)} >x</button>
        
        <FormControl variant='filled' >
            <div className='notes_space'>
            
                <p>EinsBoard</p>
                <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
   
  

            </div>
   
        </FormControl>
        </div>
     
    );
}


