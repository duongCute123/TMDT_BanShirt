import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import { Button } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../menu/menu';
import Footer from '../footer/footer';
import { add_shoping_cart, xoa_cart, IncreaseQuantity, DecreaseQuantity } from '../action/shopingcart';
const ItemProduct = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')
    const [search, setShearch] = useState()
    const cart = useSelector(state => state.shoping.Cart)
    const [datas, setDataS] = useState([])
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
    const getall = () => {
        setQuery("")
    }
    const getshirt = () => {
        setQuery("shirt")
    }
    const getcoast = () => {
        setQuery("coast")
    }
    const getdress = () => {
        setQuery("dress")
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
                                <div>
                                    <div className="search" style={{
                                            marginTop:"10px",
                                            marginLeft:"10px"
                                    }}>
                                        <input type="text" name="seacrch" placeholder="Nhập tên sản phẩm muốn tìm" value={search} onChange={(e) => setShearch(e.target.value)} className="form-control" style={{ width: "250px" }} />
                                        <div>
                                            <Button startIcon={<SearchIcon />}>Search</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <Button onClick={getall}>All Product</Button>
                                </div>
                                <div>
                                    <Button onClick={getshirt}>All Shirt</Button>
                                </div>
                                <div>
                                    <Button onClick={getcoast}>All Coast</Button>
                                </div>
                                <div>
                                    <Button onClick={getdress}>All Dress</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div>
                                <div className="homepage">
                                    {
                                        data.filter(list => list.loaiSp.toLowerCase().includes(query || "")??(list => list.tenSpham.toLowerCase().includes(search || ""))).map((lists) => {
                                            return (
                                                <div className="list-product row" style={{ float: "left" }}>
                                                    <div key={lists.id} className="infos-product" data-aos="fade-right">
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