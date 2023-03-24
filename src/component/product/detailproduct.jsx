import React from "react";
import { Component } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { add_shoping_cart, xoa_cart, IncreaseQuantity, DecreaseQuantity } from '../action/shopingcart';
import axios from "axios";
import Slider from "react-slick";
import Menu from "../menu/menu"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LayCoast from "../product/coast"
import InfoProduct from "../product/detailpage/sesionfetailpage"
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "../footer/footer";
const DetailPage = (props) => {
    var { id } = useParams()
    const cart = useSelector(state => state.shoping.Cart)
    const dispatch = useDispatch()
    console.log(id);
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
    const [product, setProduct] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://633e2bdbc235b0e5751fe7a6.mockapi.io/products/' + id)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get('https://633e2bdbc235b0e5751fe7a6.mockapi.io/products')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const LayGiay = () => {
        return (
            <div className="laygiay">
                <h1>Sản phẩm phổ biến hiện nay</h1>
                <div>
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
            </div>
        )
    }
    return (
        <div className="detailpage container-fluid">
            <Menu />
            <InfoProduct detail={product} />
            <LayGiay />
            <Footer />
        </div>
    )
}
export default DetailPage