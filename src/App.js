import * as React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import {Grid} from '@mui/material';
import {TextField} from '@mui/material';







function newsApi(search){





}


function App() {

  return (

    <>
    


   

    
    <Container maxWidth="sm">



      <h1>News App  </h1>




    <Grid container spacing={12}>

    <Grid item xs={6}>

    <TextField id="outlined-basic" label="Search News" placeholder='Enter News' variant="outlined" />

      </Grid>


    


      <Grid item xs={6}>


      <Button variant="contained">Search</Button>


      </Grid>






      </Grid>



      








      </Container>

    
    </>

  );
}

export default App;
