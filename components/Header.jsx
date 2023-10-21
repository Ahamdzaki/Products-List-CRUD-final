import { Light } from '@mui/icons-material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React, { useEffect, useState } from 'react';

export default function Header() {
    const [theme,setTheme] = useState("light");
    const [condition,setCondition] = useState(true);

    useEffect(()=> {
            document.documentElement.removeAttribute("class");
            document.documentElement.classList.add(theme);    
    },[theme]);
    
    function handleThem(){
        setCondition(!condition)
        if (condition==true){
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
        
        
    }
  return (
    <div>
        <DarkModeIcon className="header" sx={{fontSize : 40}} onClick = {handleThem}/>
        
    </div>
  )
}

