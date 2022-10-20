// import { Card, CardContent, Grid, Typography } from "@material-ui/core/";
// import Button from "@material-ui/core/Button";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardMedia from "@material-ui/core/CardMedia";
// import { makeStyles } from "@material-ui/core/styles";
// import React from "react";

// const URLIMAGE = "https://picsum.photos/345/300?random=1";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         padding: theme.spacing(1)
//     },
//     controls: {
//         display: "flex",
//         alignItems: "center",
//         paddingLeft: theme.spacing(1),
//         paddingBottom: theme.spacing(1)
//     },
//     playIcon: {
//         height: 38,
//         width: 38
//     }
// }));

// function Imagelist() {
//     const classes = useStyles();
//     const data = [
//         { quarter: 1, earnings: 13000, img: URLIMAGE },
//         { quarter: 2, earnings: 16500, img: URLIMAGE },
//         { quarter: 3, earnings: 14250, img: URLIMAGE },
//     ];
//     return (
//         <div className={classes.root} style={{ marginLeft: '200px' }}>
//             <Grid
//                 container
//                 spacing={2}
//                 direction="row"
//                 justifyContent="flex-start"
//                 alignItems="flex-start"

//             >
//                 {data.map((elem) => (
//                     <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
//                         <Card className={classes.root}>
//                             <CardActionArea>
//                                 <CardMedia
//                                     component="img"
//                                     alt="Contemplative Reptile"
//                                     height="230"
//                                     image={elem.img}
//                                     title="Contemplative Reptile"
//                                 />
//                                 <CardContent >
//                                     <Typography style={{textAlign:'center'}}
//                                         variant="body2"
//                                         color="textSecondary"
//                                         component="p"
//                                     >
//                                         Manicure and pedicure <br></br>
//                                         $22.00
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 <Button size="small" color="primary" variant="outlined" 
//                                  style={{marginLeft:'20px', backgroundColor:'orange' ,
//                                   color:'white' , padding:'8px' , fontWeight:'bold'}}>
//                                     Add to cart 
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     );
// }

// export default Imagelist;