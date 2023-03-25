import { add_shoping_cart, xoa_cart, IncreaseQuantity, DecreaseQuantity } from "../action/shopingcart"
import { Button } from "@mui/material"
import Menu from "../menu/menu"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
const CartProduct = () => {
    const navigation = useNavigate()
    const items = JSON.parse(localStorage.getItem("items"))
    var Total=0;
    const [data, setData] = useState([])
    Object.keys(items).forEach(function (item) {
        Total+=items[item].quantity*items[item].giaSpham
    })
    function TongGia(giaSpham,tongia) {
            return Number(giaSpham*tongia).toLocaleString('en-US')
    }
    const number = useSelector(state => state.shoping.numberCart)
    const [isproduct, setIsproduct] = useState(false)
    const [isLogin, setLogin] = useState(false)
    const dispatch = useDispatch()
    const ThongBao = () => {
        return (
            <div className="thongbao" style={{
                marginTop: "60px"
            }}>
                <p>Bạn chưa mua sản phẩm nào?<Link to={"/product"}>Mua ngay</Link></p>
            </div>
        )
    }
    useEffect(() => {
        if (number != 0) {
            setIsproduct(true)
        }
        if (localStorage.getItem("user")) {
            setLogin(true);
        }
    })
    const Cart = ({ product: { anh, giaSpham, id, quantity, tenSpham } }) => {
        return (
            <div>


                <tr>
                    <td style={{ width: "97px" }}>{id}</td>
                    <td style={{ width: "346px" }}>{tenSpham}</td>
                    <td>{quantity}</td>
                    <td>{giaSpham}</td>
                    <td><img style={{ width: "100px" }} src={anh} alt={tenSpham} /></td>
                    <td>
                        <Button onClick={() => dispatch(xoa_cart(id))} >Xoá</Button>
                    </td>
                </tr>
            </div>
        )
    }
    const check = () => {
        if (localStorage.getItem("user") != null && items != null) {
            navigation('/checkout')
        } else if (localStorage.getItem("user") === null && items != null) {
            alert("Vui lòng đăng nhập để thanh toán")
            navigation("/login")
        } else {
            alert("Bạn chưa mua sản phẩm nào vui lòng mua hàng để thanh toán")
            navigation("/product")
        }
    }
    // countries component
    const ListCart = ({ items }) => {
        const liatCart = items.map((products) => (
            <div key={products.id}>
                <Cart product={products} />
            </div>
        ))
        return (
            <div className="hi">
                <table className="table table-striped" style={{ marginTop: 60 }}>
                    <thead>
                        
                    </thead>
                    <tbody>
                        {liatCart}
                    </tbody>
                </table>
                <div className="tongtien">
                    <h4>Tổng tiền phải trả là:${Total}</h4>
                </div>
            </div>
        )
    }
    return (
        <div className="shoping-cart">
            <Menu />
            <div style={{ marginTop: "100px", display: "flex" }}>
                <p>Mã Sản Phẩm</p>
                <p style={{ width: "346px" }}>Tên sản phẩm</p>
                <p style={{ width: "70px" }}>Số lượng</p>
                <p style={{ width: "60px" }}>Giá</p>
                <p>Ảnh</p>

                <p>Action</p>
            </div>
            {
                isproduct ? <ListCart items={items} /> : <ThongBao />
            }
            <div>
                {isproduct ? <Button onClick={check}>Check Out</Button> : ""}
            </div>
        </div>
    )
}
export default CartProduct