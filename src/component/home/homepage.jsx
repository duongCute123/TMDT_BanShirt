import Menu from "../menu/menu"
import HeaderIcon from "./listicon";
import { useEffect, useState } from "react"
import { add_shoping_cart, xoa_cart, IncreaseQuantity, DecreaseQuantity } from '../action/shopingcart';
import { Link } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import axios from "axios"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import slide1 from "../../image.modue/photo-1499939667766-4afceb292d05.avif"
import slide2 from "../../image.modue/photo-1511511450040-677116ff389e.avif"
import slide3 from "../../image.modue/photo-1523381294911-8d3cead13475.avif"
import slide4 from "../../image.modue/photo-1523381294911-8d3cead13475.avif"
import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import GetProduct from "../product/listproduct";
import SlideP from "../product/slider";
import Slider from "react-slick";
import LayCoast from "../product/coast";
import LayVay from "../product/vay";
import Footer from "../footer/footer";
import Customer from "./customer";
import EastIcon from '@mui/icons-material/East';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    useEffect(() => {
        axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
            .then(res => {
                setData(res.data)
            })
            .then(res => {
                console.log("Lấy dữ liệu thanh công");
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const cart = useSelector(state => state.shoping.Cart)
    const dispatch = useDispatch()
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // style ccs nhé
    return (
        <div className="home container-fluid" style={{ marginTop: "60px" }}>
            <div className="">
                <div className="">
                    <Menu />
                </div>
                <div className="">
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

                <HeaderIcon />


                <div>
                    <h2> Hot Sell </h2>
                    <Slider {...settings}>
                        {
                            data.filter(list => list.loaiSp.toLowerCase().includes("coast")).map((lists) => {
                                return (
                                    <div data-aos="flip-left">
                                        <div className="slick-coast">
                                            <Link to={"/detailpage/" + lists.id}>
                                                <img width={"310px"} height={"180px"} src={lists.anh} alt={lists.tenSpham} />
                                                <div className="chitiet">
                                                    <h6>{lists.tenSpham}</h6>
                                                    <p>Gia:${lists.giaSpham}</p>
                                                </div>
                                            </Link>
                                            <div className="action" >
                                                <Button variant="outlined" onClick={() => dispatch(add_shoping_cart(lists))} style={{}} startIcon={<ShoppingCartCheckoutIcon />}>
                                                    Add Cart
                                                </Button>
                                                <Button variant="contained" endIcon={<LocalMallIcon />}>
                                                    Buy
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    <Link  to={"/product"}>See more</Link>
                </div>

                <SlideP />
                <div>
                    <h2> Product Girl </h2>
                    <Slider {...settings}>
                        {
                            data.filter(list => list.loaiSp.toLowerCase().includes("dress")).map((lists) => {
                                return (
                                    <div data-aos="flip-left">
                                        <div className="slick-coast">
                                            <Link to={"/detailpage/" + lists.id}>
                                                <img width={"310px"} height={"180px"} src={lists.anh} alt={lists.tenSpham} />
                                                <div className="chitiet">
                                                    <h6>{lists.tenSpham}</h6>
                                                    <p>Gia:${lists.giaSpham}</p>
                                                </div>
                                            </Link>
                                            <div className="action" >
                                                <Button variant="outlined" onClick={() => dispatch(add_shoping_cart(lists))} style={{}} startIcon={<ShoppingCartCheckoutIcon />}>
                                                    Add Cart
                                                </Button>
                                                <Button variant="contained" endIcon={<LocalMallIcon />}>
                                                    Buy
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <div>
                    <h2> Product Shirt </h2>
                    <Slider {...settings}>
                        {
                            data.filter(list => list.loaiSp.toLowerCase().includes("shirt")).map((lists) => {
                                return (
                                    <div data-aos="flip-left">
                                        <div className="slick-coast">
                                            <Link to={"/detailpage/" + lists.id}>
                                                <img width={"310px"} height={"180px"} src={lists.anh} alt={lists.tenSpham} />
                                                <div className="chitiet">
                                                    <h6>{lists.tenSpham}</h6>
                                                    <p>Gia:${lists.giaSpham}</p>
                                                </div>
                                            </Link>
                                            <div className="action" >
                                                <Button variant="outlined" onClick={() => dispatch(add_shoping_cart(lists))} style={{}} startIcon={<ShoppingCartCheckoutIcon />}>
                                                    Add Cart
                                                </Button>
                                                <Button variant="contained" endIcon={<LocalMallIcon />}>
                                                    Buy
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <Footer />
                <div onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                    style={{
                        position: 'fixed',
                        padding: '1rem 2rem',
                        fontSize: '20px',
                        bottom: '40px',
                        right: '40px',
                        borderRadius:"50%",
                        backgroundColor: '#0C9',
                        color: '#fff',
                        textAlign: 'center',
                    }}>
                        <KeyboardControlKeyIcon/>
                </div>

            </div>
        </div>
    )
}
export default Home