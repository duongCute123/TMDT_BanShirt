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
    return (
        <div className="container-fluid">
            <h1>Sản phẩm yêu thích</h1>
            {
                data.filter(list => list.loaiSp.toLowerCase().includes("dress")).map((list) => {
                    return (
                        <div className="list-product row" style={{ float: "left" }}>
                            <div className="infos-product">
                                <Link to={"/detailproduct/" + list.id}>
                                    <img width={"234px"} height={"160px"} src={list.anh} alt={list.tenSpham} />
                                    <div className="chitiet">
                                        <h6>{list.tenSpham}</h6>
                                        <p>Gia:${list.giaSpham}</p>
                                    </div>
                                </Link>
                                <div className="action" >
                                    <Button variant="outlined" style={{}} startIcon={<ShoppingCartCheckoutIcon />}>
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
        </div>
    )
}
export default LayVay
