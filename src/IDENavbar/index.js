import React from 'react';
import Select from 'react-select';
import './styles.css';
import { AccountCircleOutlined}from "@mui/icons-material"




 
const Navbar = ({userLang, setUserLang, userTheme,
                setUserTheme, fontSize, setFontSize}) => {
                    const languages = [
                        { value: "c", label: "C" },
                        { value: "cpp", label: "C++" },
                        { value: "python", label: "Python" },
                        { value: "java", label: "Java" },
                        { value: "SQL", label: "SQL" },
                        { value: "php", label: "php" },
                        
                    ];
    const themes = [
        { value: "dark-mode", label: "Dark" },
        { value: "light-mode", label: "Light" },
    ]
    return (
        <div className="idenavbar">
            <h1>EinsBoard</h1>
            <Select options={languages} value={userLang}
                    onChange={(e) => setUserLang(e.value)}
                    placeholder={userLang} />

            <label>Font Size</label>
            <input type="range" min="18" max="30"
                   value={fontSize} step="2"
                   onChange={(e) => { setFontSize(e.target.value)}}/>

            <button className='add_reviewer'><AccountCircleOutlined/></button>
            
    
        </div>
    )
}
 
export default Navbar