import React, {useState} from 'react';


function ColorPicker(){

    const [color, setColor] = useState("#a400f0");

    function handlecolor(e){
        setColor(e.target.value)
    }
    return(
        <div className="colorpick_div">
            <h1>Color Picker</h1>
            <div className='displaycolor' style={{backgroundColor:color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label>Selet a Color </label>
            <br />
            <input type="color" value={color} onChange={(e)=> handlecolor(e)}></input>
        </div>
    );
}

export default ColorPicker