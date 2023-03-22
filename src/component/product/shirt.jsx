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
const LayShirt = () => {
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
        <div className="shirt">
            <div className="">
                <h1>Ưu đãi lớn</h1>
                <div data-aos="fade-right">
                    <div className="homepage">
                        {
                            data.filter(list => list.loaiSp.toLowerCase().includes("shirt")).map((lists) => {
                                return (
                                    <div className="list-product row" style={{ float: "left" }}>
                                        <div className="infos-product">
                                            <Link to={"/detailproduct/" + lists.id}>
                                                <img width={"234px"} height={"160px"} src={lists.anh} alt={lists.tenSpham} />
                                                <div className="chitiet">
                                                    <h6>{lists.tenSpham}</h6>
                                                    <p>Gia:${lists.giaSpham}</p>
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
                </div>
            </div>
        </div>
    )
}
export default LayShirt
