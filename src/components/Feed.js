import React, {useState, useEffect} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {SideBar, Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos]= useState([]);

  useEffect(()=>{
    (async () => {

      const data = await fetchFromAPI(

        `search?part=snippet&q=${selectedCategory}`

      );

      setVideos(data.items);

    })();

  },[selectedCategory]);


  return (
    <Stack sx={{flexDirection: { sx: "column", md:"row"}}}>

      {/* SideBar Section */}
      <Box sx={{height: {sx:"auto", md:"92vh"}, borderRight:"1px solid #3d3d3d", px: {sx:0, md:2}}}>

        <SideBar selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory}/>

        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:"#fff"}}>
          Maed With John 
        </Typography>
      </Box>

      {/* Videos Section */}

      <Box p={2} sx={{overflowY:"auto", height:"90vh", flex:2}}>

        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:"#fff"}}>
          {selectedCategory} <span style={{color:"#f31503"}}>Videos</span>
        </Typography>

        <Videos videos={videos}>

        </Videos>
      </Box>
    </Stack>
  )
}

export default Feed;
