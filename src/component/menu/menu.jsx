import { Link, Route } from "react-router-dom"
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import logo from "../../image.modue/logo.c9a5149df70e30a9c7cd.png"
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Navigate } from "react-router-dom";
import Login from "../auth/login"
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { timkiem } from "../action/productaction";
import axios from "axios";
import ItemProduct from "../product/product";
import InfoSearch from "../product/seach";
const Menu = () => {
    var { id } = useParams()
    const navigation = useNavigate()
    const Carts = () => {
        navigation('/cart')
    }
    var product = useSelector(state => state.product.Product)
    var localso = localStorage.getItem("user")
    const [isLogin, setIsLogin] = useState(true)
    const [emails, setEmail] = useState([])
    const [show, setShow] = useState(false)
    const [local, setLocal] = useState([])
    const [data, setData] = useState([])
    const [ketqua, setKetQua] = useState([])
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const user = JSON.parse(localStorage.getItem("user"))
    const array = Object.values(user||"").slice(0,1)
    const dispatch = useDispatch()
    useEffect(() => {
        const user = localStorage.getItem("user")
        if (localStorage.getItem("user") != null) {
            setIsLogin(false)
        }
        setEmail(user)
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
    const User = ({ users: { email } }) => {
        return (
            <div>
                <p>{email}</p>
            </div>
        )
    }
    const Users = ({ userss }) => {
        const item = userss.map((list) => <User users={list} />)
        return <div>{item}</div>
    }
    // const timkiem = () => {
    //     const kq = data.filter(list => list.tenSpham.toLowerCase().includes(search)).map((lists) => {
    //         return (
    //             <div>
    //                 <Link to={"/detailpage/" + id}>
    //                     <li>{lists.tenSpham}</li>
    //                 </Link>
    //             </div>
    //         )
    //     })



    // }
    const btn_login = () => {
        if (isLogin === true) {
            navigation("/login")
        } else {

        }
    }
    return (
        <div className="menus " style={{ color: "black", width: "100%", backgroundColor: "white" }}>
            <nav className="navbar navbar-expand-sm navbar-light bg-light" style={{ backgroundColor: "white" }}>
                <img width={"40px"} src={logo} alt="" />
                <Link className="navbar-brand" to={"/"}>FashionÂ</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/product"}>Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/contact"}>Conatct</Link>
                        </li>

                    </ul>
                    <div className="store">
                        <Button onClick={Carts} startIcon={<ProductionQuantityLimitsIcon />}>ShopingCart</Button>
                    </div>
                    <div className="dropdown">
                        <Button className="btn btn-primary dropdown-toggle" data-toggle="dropdown" onClick={btn_login} startIcon={<AccountCircleIcon />}

                        >{isLogin ? 'Login' : `hello ${array}`}</Button>

                        <ul className="dropdown-menu">
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
