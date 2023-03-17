import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import { Button } from "@mui/material"
import Menu from '../menu/menu';
import Footer from '../footer/footer';
const ItemProduct = () => {
    const [data, setData] = useState([])
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
    })
    return (
        <div className="container-fluid">
            <div className='col-sm-12'>
                <Menu />
            </div>
            <div className='col-sm-12'>
                <div className=" row">
                    <div className="col-sm-4" style={{ border: "1px" }}>
                        <div className='menu-list'>
                            <div className="">
                                <Button>All Product</Button>
                            </div>
                            <div>
                                <Button>All Shirt</Button>
                            </div>
                            <div>
                                <Button>All Coast</Button>
                            </div>
                            <div>
                                <Button>All Dress</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div data-aos="fade-right">
                            <div className="homepage">
                                {
                                    data.map((lists) => {
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
            </div>

            <div className='col-sm-12'>
                <Footer />
            </div>
        </div>
    )
}
export default ItemProduct