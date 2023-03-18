import Menu from "../menu/menu"
import HeaderIcon from "./listicon";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import slide1 from "../../image.modue/photo-1499939667766-4afceb292d05.avif"
import slide2 from "../../image.modue/photo-1511511450040-677116ff389e.avif"
import slide3 from "../../image.modue/photo-1523381294911-8d3cead13475.avif"
import slide4 from "../../image.modue/photo-1523381294911-8d3cead13475.avif"
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
        <div className="home container-fluid" style={{ marginTop: "60px" }}>
            <div className="col-sm-12">
                <Menu />
            </div>
            <div className="col-sm-12">
                <div className="course" style={{ color: "black" }}>
                    <div id="course" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#course" data-slide-to="0" class="active"></li>
                            <li data-target="#course" data-slide-to="1"></li>
                            <li data-target="#course" data-slide-to="2"></li>
                            <li data-target="#course" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">

                                <div class="carousel-caption" >
                                    <h3 style={{ color: "black" }}>COMFORT FASION </h3>
                                    <p style={{ color: "black" }}>Elevate Your Style with our brand new products, Purchase Today!</p>
                                    <Button endIcon={<ArrowRightAltIcon />}>Shoping Now</Button>
                                </div>
                                <img style={{ width: "100%", height: "400px", objectFit: "cover" }} src={slide1} alt="First slide" />
                            </div>
                            <div class="carousel-item">

                                <div class="carousel-caption d-none d-md-block">
                                    <h3 style={{ color: "black" }}>COMFORT FASION </h3>
                                    <p style={{ color: "black" }}>Elevate Your Style with our brand new products, Purchase Today!</p>
                                    <Button endIcon={<ArrowRightAltIcon />}>Shoping Now</Button>
                                </div>
                                <img style={{ width: "100%", height: "400px", objectFit: "cover" }} src={slide2} alt="Second slide" />
                            </div>
                            <div class="carousel-item">

                                <div class="carousel-caption d-none d-md-block">
                                    <h3 style={{ color: "black" }}>COMFORT FASION </h3>
                                    <p style={{ color: "black" }}>Elevate Your Style with our brand new products, Purchase Today!</p>
                                    <Button endIcon={<ArrowRightAltIcon />}>Shoping Now</Button>
                                </div>
                                <img style={{ width: "100%", height: "400px", objectFit: "cover" }} src={slide3} alt="Third slide" />
                            </div>
                            <div class="carousel-item">

                                <div class="carousel-caption d-none d-md-block">
                                    <h3 style={{ color: "black" }}>COMFORT FASION </h3>
                                    <p style={{ color: "black" }}>Elevate Your Style with our brand new products, Purchase Today!</p>
                                    <Button endIcon={<ArrowRightAltIcon />}>Shoping Now</Button>
                                </div>
                                <img style={{ width: "100%", height: "400px", objectFit: "cover" }} src={slide4} alt="Third slide" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <HeaderIcon />
            </div>
            <div className="col-sm-12">
                <LayCoast />
            </div>
            <div className="col-sm-12">
                <Footer />
            </div>
        </div>
    )
}
export default Home