import Menu from "../menu/menu"
import HeaderIcon from "./listicon";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import slide1 from "../../image.modue/Excited-Girl-Holding-Shopping-Bag-Transparent-PNG.png"
import slide2 from "../../image.modue/Attractive-Model-Man-PNG-Picture.png"
import slide3 from "../../image.modue/shopping_model.png"
import slide4 from "../../image.modue/858-8584137_fashion-forward-episodes-offers-fashion.png"
import { Button } from "@mui/material";
import GetProduct from "../product/listproduct";
import SlideP from "../product/slider";
import Slider from "react-slick";
import LayCoast from "../product/coast";
import LayVay from "../product/vay";
import Footer from "../footer/footer";
import Customer from "./customer";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="home">
            <Menu />
            <div className="">
                <div className="course">
                    <div id="course" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#course" data-slide-to="0" class="active"></li>
                            <li data-target="#course" data-slide-to="1"></li>
                            <li data-target="#course" data-slide-to="2"></li>
                            <li data-target="#course" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">

                                <div class="carousel-caption">
                                    <h3>COMFORT FASION </h3>
                                    <p>Elevate Your Style with our brand new products, Purchase Today!</p>
                                    <Button endIcon={<ArrowRightAltIcon />}>Shoping Now</Button>
                                </div>
                                <img style={{ height: "400px", objectFit: "cover" }} src={slide1} alt="First slide" />
                            </div>
                            <div class="carousel-item">

                                <div class="carousel-caption d-none d-md-block">
                                    <h3>COMFORT FASION </h3>
                                    <p>Elevate Your Style with our brand new products, Purchase Today!</p>
                                    <Button endIcon={<ArrowRightAltIcon />}>Shoping Now</Button>
                                </div>
                                <img style={{ height: "400px", objectFit: "cover" }} src={slide2} alt="Second slide" />
                            </div>
                            <div class="carousel-item">

                                <div class="carousel-caption d-none d-md-block">
                                    <h3>COMFORT FASION </h3>
                                    <p>Elevate Your Style with our brand new products, Purchase Today!</p>
                                    <Button endIcon={<ArrowRightAltIcon />}>Shoping Now</Button>
                                </div>
                                <img style={{ height: "400px", objectFit: "cover" }} src={slide3} alt="Third slide" />
                            </div>
                            <div class="carousel-item">

                                <div class="carousel-caption d-none d-md-block">
                                    <h3>COMFORT FASION </h3>
                                    <p>Elevate Your Style with our brand new products, Purchase Today!</p>
                                    <Button endIcon={<ArrowRightAltIcon />}>Shoping Now</Button>
                                </div>
                                <img style={{ height: "400px", objectFit: "cover" }} src={slide4} alt="Third slide" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <HeaderIcon />
            <LayCoast/>
            <GetProduct />
            <SlideP/>
            <Footer/>
        </div>
    )
}
export default Home