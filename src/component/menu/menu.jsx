import { Link, Route } from "react-router-dom"
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import logo from "../../image.modue/logo.c9a5149df70e30a9c7cd.png"
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Seach from "../product/seach";
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate } from "react-router-dom";
import Login from "../auth/login"
import axios from "axios";
const Menu = () => {
    const navigation = useNavigate()
    const Carts = () => {
        navigation('/cart')
    }
    var localso = localStorage.getItem("user")
    const [isLogin, setIsLogin] = useState(true)
    const [emails, setEmail] = useState([])
    const [show, setShow] = useState(false)
    const [search, setShearch] = useState()
    const [data, setData] = useState([])
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    useEffect(() => {
        const user = localStorage.getItem("user")
        if (localStorage.getItem("user") != null) {
            setIsLogin(false)
        }
        setEmail(user)
        console.log(emails);
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
    const User = ({ users }) => {
        const item = users.map((list) => <p>{list.email}</p>)
        return <p>{item}</p>
    }
    console.log(search);
    return (
        <div className="menus " style={{ color: "black", width: "100%", backgroundColor: "white" }}>
            <nav class="navbar navbar-expand-sm navbar-light bg-light" style={{ backgroundColor: "white" }}>
                <img width={"40px"} src={logo} alt="" />
                <Link class="navbar-brand" to={"/"}>FashionÂ</Link>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link class="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/product"}>Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to={"/contact"}>Conatct</Link>
                        </li>

                    </ul>
                    <div className="search" style={{
                        display: "flex"
                    }}>
                        <input type="text" name="seacrch" placeholder="Nhập tên sản phẩm muốn tìm" value={search} onChange={(e) => setShearch(e.target.value)} className="form-control" style={{ width: "250px" }} />
                        <div>
                            <Button onClick={(e)=>e} startIcon={<SearchIcon />}>Search</Button>
                        </div>
                    </div>
                    <div className="store">
                        <Button onClick={Carts} startIcon={<ProductionQuantityLimitsIcon />}>ShopingCart</Button>
                    </div>
                    <div className="dropdown">
                        <Button class="btn btn-primary dropdown-toggle" data-toggle="dropdown" startIcon={<AccountCircleIcon />}

                        >{isLogin ? 'Login' : `hello ${<User users={emails} />}`}</Button>

                        <ul class="dropdown-menu">
                            <Button startIcon={<PersonAddAltIcon />}>Profile</Button>
                            <Button startIcon={<AddShoppingCartIcon />}
                                onClick={() => navigation("/cart")}
                            >My Cart</Button>
                            <Button startIcon={<LogoutIcon />}
                                onClick={() => {
                                    localStorage.removeItem("user")
                                }}
                            >LogOut</Button>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}
export default Menu
