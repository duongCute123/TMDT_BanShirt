import { Link, Route } from "react-router-dom"
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import logo from "../../image.modue/logo.c9a5149df70e30a9c7cd.png"
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Menu = () => {
    return (
        <div className="menus " style={{color:"black",width:"100%"}}>
            <nav class="navbar navbar-expand-sm navbar-light bg-light" style={{backgroundColor:"white"}}>
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
                    <div className="store">
                        <Button startIcon={<ProductionQuantityLimitsIcon />}>ShopingCart</Button>
                    </div>
                    <div className="login">
                        <Button startIcon={<AccountCircleIcon />}>
                            SingIn
                        </Button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Menu