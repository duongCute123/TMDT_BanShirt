import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getprocduct } from "../action/productaction"
import Customer from "../home/customer"
import { Button } from "@mui/material"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "../product/product.css"
import slide1 from "../../image.modue/photo-1499939667766-4afceb292d05.avif"
import slide2 from "../../image.modue/photo-1511511450040-677116ff389e.avif"
import slide3 from "../../image.modue/photo-1523381294911-8d3cead13475.avif"
import Slider from "react-slick"
const LayShirt = () => {
    const [data, setData] = useState([])
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
    useEffect(() => {
        axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
            .then(res => {
                setData(res.data)
            })
            .then(res => {
                console.log("Lấy dữ liệu thành công");
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(data);
    return (
        <div className="container-fluid">
            <h1>Ưu đãi lớn</h1>

            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
            </Slider>
        </div>

    )
}
const LayCoast = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
            .then(res => {
                setData(res.data)
            })
            .then(res => {
                console.log("Lấy dữ liệu thành công");
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(data);
    return (
        <div className="container-fluid">
            <h1>Sản phẩm phổ biến</h1>
            {
                data.filter(list => list.loaiSp.toLowerCase().includes("coast")).map((list) => {
                    return (
                        <div className="container-fluid">
                            <div className="list-shirt row" style={{ margin: "5px" }}>
                                <div className="col-sm-12">
                                    <div className="thumbnail">
                                        <Link to={"/product/" + list.id}>
                                            <img width={"234px"} height={"160px"} src={list.anh} alt={list.tenSpham} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
const LayVay = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
            .then(res => {
                setData(res.data)
            })
            .then(res => {
                console.log("Lấy dữ liệu thành công");
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(data);
    return (
        <div className="container-fluid">
            <h1>Sản phẩm yêu thích</h1>
            {
                data.filter(list => list.loaiSp.toLowerCase().includes("dress")).map((list) => {
                    return (
                        <div className="container-fluid">
                            <div className="list-shirt row" style={{ margin: "5px" }}>
                                <div className="col-sm-12">
                                    <div className="thumbnail">
                                        <Link to={"/product/" + list.id}>
                                            <img width={"234px"} height={"160px"} src={list.anh} alt={list.tenSpham} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
const SlideP = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h2> Single Item</h2>
                    <Slider {...settings}>
                        <div>
                            <img height={"500px"} width={"1232px"} src={slide1} alt="" />
                        </div>
                        <div>
                            <img height={"500px"} width={"1232px"} src={slide2} alt="" />
                        </div>
                        <div>
                            <img height={"500px"} width={"1232px"} src={slide3} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
const GetProduct = () => {

    return (
        <div className="container-fluid">
            <div className="colum">
                <div className="col-sm-12">
                    <Customer />
                </div>
            </div>
        </div>
    )
}
export default GetProduct