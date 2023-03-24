import axios from "axios"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getprocduct } from "../action/productaction"
import Customer from "../home/customer"
import "../product/product.css"
import slide1 from "../../image.modue/photo-1499939667766-4afceb292d05.avif"
import slide2 from "../../image.modue/photo-1511511450040-677116ff389e.avif"
import slide3 from "../../image.modue/photo-1523381294911-8d3cead13475.avif"
import Slider from "react-slick"
import Footer from "../footer/footer";
import SlideP from "./slider";
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
    return (
        <div className="coast-page">
            <h1>Sản phẩm phổ biến</h1>
            {
                data.filter(list => list.loaiSp.toLowerCase().includes("coast")).map((list) => {
                    return (
                        <div className="">
                            <h2>Image Gallery</h2>
                            <p>The .thumbnail class can be used to display an image gallery.</p>
                            <p>The .caption class adds proper padding and a dark grey color to text inside thumbnails.</p>
                            <p>Click on the images to enlarge them.</p>
                            <div class="row" style={{
                                float:"left"
                            }}>
                                <div class="col-md-4">
                                    <div class="thumbnail" >
                                        <a href="/w3images/lights.jpg" target="_blank">
                                            <img width={"200px"} height={"180px"} src={list.anh} alt="" />
                                            <div class="caption">
                                                <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                                            </div>
                                        </a>
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
export default LayCoast