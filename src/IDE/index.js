import React,{useState} from 'react';
// styling
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Editor from "@monaco-editor/react";
import IDENavbar from '../IDENavbar';
import Axios from 'axios';
import {Resizable} from "re-resizable"
import toast from "react-hot-toast"
import './styles.css';
import { AccountCircleOutlined, DeleteOutline, FileOpenTwoTone, FileUpload, PlayArrowOutlined } from '@mui/icons-material';

// images


export default function IDE({setIDE}){
    const [userCode, setUserCode] = useState(``);
 
    // State variable to set editors default language
    const [userLang, setUserLang] = useState("python");
   
    // State variable to set editors default theme
    const [userTheme, setUserTheme] = useState("vs-dark");
   
    // State variable to set editors default font size
    const [fontSize, setFontSize] = useState(10);
   
    // State variable to set users input
    const [userInput, setUserInput] = useState("");
   
    // State variable to set users output
    const [userOutput, setUserOutput] = useState("");
   
    // Loading state variable to show spinner
    // while fetching data
    const [loading, setLoading] = useState(false);
     
    const options = {
      fontSize: fontSize
    }
   
    // Function to call the compile endpoint
    function compile() {
      setLoading(true);
      if (userCode === ``) {
        return
      }
   
      // Post request to compile endpoint
      Axios.post(`http://localhost:5000/compile`, {
        code: userCode,
        language: userLang,
        input: userInput }).then((res) => {
        setUserOutput(res.data.output);
      }).then(() => {
        setLoading(false);
      }).catch((err)=>{
        toast.error("an Error occurred")
        

      })
    }
   
    // Function to clear the output screen
    function clearOutput() {
      setUserOutput("");
    }
   
    // function that takes boolean as param to conditionally display popup
  
   // <img className="pu-img" src={bone} alt="bone" />

    return (
      
        <div className="IDE">

                 <button className="popup-x" onClick={()=> setIDE(false)} >x</button>
        
        <FormControl variant='filled' >
   
        <div className="compiler">
        <Resizable  defaultSize={{
    width:900,
    height:400,
  }}>
      
      <IDENavbar
        userLang={userLang} setUserLang={setUserLang}
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
      />
      <div className="main">
      <div className='lef-container-sett'>
        <FileOpenTwoTone className="lef-icon-file" fontSize='large'/>
        </div>
        <div className='lef-container'>
          <div className="file-explorer">
            <p>File explorer</p>
            <FileUpload className="file-icon" fontSize="small"></FileUpload>
          </div>

        </div>
        <div className='left-container-cont'>
        <div className="left-container">
          <div className="editor-nav">
          <div className='editor-nav-btns'>
          <button className="run-btn" onClick={() => compile()}>
             <PlayArrowOutlined/>
          </button>
         
          </div>
            
          </div>
          <Editor
            options={options}
            height="85%"
            width="auto"
            theme={userTheme}
            language={userLang}
            defaultLanguage="python"
            onChange={(value) => { setUserCode(value) }}
          />
     
        </div>
        <div className="right-container">
        
          {loading ? (
            <div className="spinner-box">
              <img src="/Spinner.gif"  />
            </div>
          ) : (
            <div className="output-box">
              <div className="output-nav">
                <div className="output-nav-left">
                <p>PROBLEMS</p>
                <p>OUTPUT</p>
                <p>TERMINAL</p>
                </div>
                <div className="output-nav-right">
               <DeleteOutline fontSize='small' onClick={() => { clearOutput() }}/>
                </div>

                </div>
              <pre>{userOutput}</pre>
            
            </div>
          )}
        </div>
        </div>
      </div>
     </Resizable>
    </div>
    
        </FormControl>
        
        </div>
     
    );
}


