import { useContext ,useState,useEffect} from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import useData from "../hooks/useData.js";
import "../style/Whyus.css";
import Banner from "../components/Banner.jsx";
import { Avatar, Box, Card, CardActionArea,
   CardActions, CardContent, CardMedia, Container, Grid, LinearProgress, Typography } from '@mui/material';
export default function Home() {
  const { user } = useContext(AuthContext);
  const [ourServices, setOurServices] = useState([])
    const mainData = useData();
    let services = mainData[0];

    // handle undifined problem in mapping data
    useEffect(() => {
        if (services.length > 1) {
            const serv = services?.slice(0, 3);
            setOurServices(serv);
        }
        else {
            <LinearProgress color="secondary" />
        }
    }, [services]);
  return (
    <div>
      <Header />
      <Banner />
      <Box sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, textAlign: "center" }}>
            <Container maxWidth="xl">
                <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }}
                    variant='h6'
                >Why Choose Our Medical
                </Typography>

                <Typography sx={{ mb: 8, fontWeight: 600 }}
                    variant='h5'
                >Breakthrough in Comprehensive, Flexible Care Delivery Models
                </Typography>

                {
                    services?.length > 1 && <Grid container spacing={3}>

                        {
                            ourServices?.map((service) => (
                                <Grid key={service.id} className={service.class} item xs={12} md={6} lg={4}>

                                    <Card sx={{
                                        maxWidth: 345, transition: '0.5s all ease-in-out', mb: 2, ':hover': {
                                            boxShadow: 10,
                                            color: '#e91e63'
                                        }
                                        , 'img': { transition: '0.5s all ease-in-out' },
                                        ':hover img': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="240"
                                                image={service?.service_img}
                                                alt="card image of service"
                                            />
                                            <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>
                                                <Avatar
                                                    alt="service icon"
                                                    src={service?.icon}
                                                    sx={{
                                                        width: 40, height: 40, mx: 'auto'
                                                    }}
                                                />
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Consult for {service.treatment}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Typography sx={{ mx: 2, p: 2, textAlign: "end" }} >
                                                <a className='text-style' to="/services" color="primary">
                                                    See More Details...
                                                </a>
                                            </Typography>
                                        </CardActions>
                                    </Card>




                                </Grid>
                            ))
                        }
                    </Grid>}

                <Typography sx={{ mx: 2, p: 2, textAlign: "end" }} >
                    <a href="#" className='text-style' color="primary">
                        See All services
                    </a>
                </Typography>


            </Container>
        </Box>
        <Box id='about' sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '70vh'
        }}
            points="0,100 50,00, 100,100" >
            <Container maxWidth="xl">
                <Typography sx={{ color: 'primary.main', mx: 2, p: 2, textAlign: "center" }}
                    variant='h4'>
                    All-in-One Website Health Solution
                </Typography>

                <Typography sx={{ mx: 2, p: 2, textAlign: "center" }}
                    variant='h6'>
                    10 Years Of Experience in Medical Services
                </Typography>

                <Typography sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
                    variant='p'>One big thing I wanted to highlight is that our methodology is fairer to hospitals and health systems than horizontal sites. CareDash has many hospital reviews from real users, but the way we survey our patient users has less “motivated complainer bias.” Thus, I think the CareDash hospital reviews provider a more accurate view of real patient satisfaction. <br /><br />

                    We think something between 8 to 9 out of 10 patients walks out of the hospital satisfied, but typical web reviews make hospitals look much worse. This negative bias in hospital reviews is a big deal because people are walking into their care journey with a negative mindset about the care they are going to get, and that’s not good. The scale is just off because of the motivated complainers.<br /><br />

                    Be sure to leave a review on <strong>Health Haven</strong> of any hospital you’ve visited, whether you’ve had a negative or a positive experience. Share your suggestions about writing hospital reviews in the comments below or message us on facebook <a href="https://www.facebook.com/iamfoysal.h" target="_blank" rel="noopener noreferrer" >
                        @Foysal
                    </a>.
                    <br /><br /><br />
                </Typography>

            </Container>
        </Box>


    
      <Footer />
    </div>
  );
}
