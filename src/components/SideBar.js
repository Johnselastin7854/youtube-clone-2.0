import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';



function SideBar({selectedCategory, setSelectedCategory}) {
  return (
    <Stack direction="row" sx={{overflow:"auto", height: {sx:"auto", md:"95%"}, flexDirection:{md:"column"}}}>

        {categories.map((category)=>(
            <button className='category-btn'
            key={category.name}
            onClick={()=> setSelectedCategory(category.name)}
            style={{background: category.name === selectedCategory ? "#fc1503" :" transparent"}}>

                <span style={{color:category.name === selectedCategory ? "#fff" : "red", marginRight:"15px"}}>{category.icon}</span>

                <span style={{opacity: category.name === selectedCategory ? "1" :" 0.8", color:"#fff"}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar
