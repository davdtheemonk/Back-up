import React from 'react';
// styling
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './styles.css';
// images


export default function Questioner ({setVisible}){
    // function that takes boolean as param to conditionally display popup
  
   // <img className="pu-img" src={bone} alt="bone" />

    return (
        <div className="PopUp">
            
            {/* x close window */}
            <button className="popup-x" onClick={()=> setVisible(false)} >x</button>
            <div className="pu-content-container">
               
                <h1>Select type of Question</h1>
                <FormControl>
     <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Multiple choices" control={<Radio />} label="Multiple choice" />
        <FormControlLabel value="Field" control={<Radio />} label="Field text" />
        <FormControlLabel value="Coding" control={<Radio />} label="Coding Challenge" />
      </RadioGroup>
    </FormControl>
            </div>
            {/* button controls */}
            <div className="pu-button-container">
                <button className="postQue">next </button>
                <button className="closePoster" onClick={()=> setVisible(false)}> Cancel </button>
            </div>
        </div>
    );
}


