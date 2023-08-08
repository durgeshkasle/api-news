import * as React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import {Grid} from '@mui/material';
import {TextField} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function News () {

    let [newsData, setNewsData] = useState([])
    let [query, setQuery] = useState('')

    let getNews = (e) => {    
        e.preventDefault()
        axios.get(`
    https://newsapi.org/v2/everything?q=${query}&from=2023-07-08&sortBy=publishedAt&apiKey=1dfd68f070c14ff68ccd262efc5299dd`)


    .then((res)=>{
        setNewsData(res.data.articles)
        console.log(res.data.articles)
    })

    .catch((err)=>{
        console.log(err)
    })
}


    return(

     <>

     <Container maxWidth="sm">

            <h1>News App  </h1>

        <form onSubmit={getNews}>

                <Grid container spacing={5}>

 
                    <Grid item xs={6}>

                    <TextField onChange={(e)=>{
                        setQuery(e.target.value)}} id="outlined-basic" label="Search News"  placeholder='Enter News' variant="outlined" />

                    </Grid>


                    <Grid item xs={6}>

                    <Button type='submit' Button variant="contained" >Search</Button>

                    </Grid>


                 
                    <Grid item xs={10}>

                    {
            
            newsData.map((items, index)=>{

               return <div>

                   <Card sx={{ maxWidth: 345 }}>
                       <CardMedia
                           sx={{ height: 140 }}
                           image={items.urlToImage}
                           title="green iguana"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div">
                           {items.title}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                           
                           {items.description}
                           </Typography>
                       </CardContent>
                       <CardActions>
                       
                   
                       </CardActions>
                       </Card>

                       <hr></hr>

               </div>
                   
        })

        }

                   
                   

                    </Grid>




                                      <Grid item xs={10}>

                    {
            
            newsData.map((items, index)=>{

               return <div>

                   <Card sx={{ maxWidth: 345 }}>
                       <CardMedia
                           sx={{ height: 140 }}
                           image={items.urlToImage}
                           title="green iguana"
                       />
                       <CardContent>
                           <Typography gutterBottom variant="h5" component="div">
                           {items.title}
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                           
                           {items.description}
                           </Typography>
                       </CardContent>
                       <CardActions>
                       
                   
                       </CardActions>
                       </Card>

                       <hr></hr>

               </div>
                   
        })

        }

                   
                   

                    </Grid>







                    
                </Grid>

        </form>

       

      

         </Container>

     </>

   )
}

export default News;


