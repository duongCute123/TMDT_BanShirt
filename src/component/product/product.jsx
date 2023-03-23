import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import { Button } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../menu/menu';
import Footer from '../footer/footer';
import { add_shoping_cart, xoa_cart, IncreaseQuantity, DecreaseQuantity } from '../action/shopingcart';
const ItemProduct = () => {
    const [data, setData] = useState([])
    const cart = useSelector(state => state.shoping.Cart)
    const [datas,setDataS]=useState([])
    const dispatch = useDispatch()
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
    const getproduct=()=>{
        
    }
    return (
        <div className="">
            <div className='col-sm-12'>
                <Menu />
            </div>
            <div className='container-fluid'>
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
                            <div>
                                <div className="homepage">
                                    {
                                        data.map((lists) => {
                                            return (
                                                <div className="list-product row" style={{ float: "left" }}>
                                                    <div className="infos-product" data-aos="fade-right">
                                                        <Link to={"/detailpage/" + lists.id}>
                                                            <img width={"234px"} height={"160px"} src={lists.anh} alt={lists.tenSpham} />
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
                                </div>
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