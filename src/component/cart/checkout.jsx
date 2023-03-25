import Footer from "../footer/footer"
import Menu from "../menu/menu"
import SendIcon from '@mui/icons-material/Send';
import { add_shoping_cart, xoa_cart, IncreaseQuantity, DecreaseQuantity } from "../action/shopingcart"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "@mui/material"
const CheckOut = () => {
    const list = {
        fullname: "",
        email: Object.values(JSON.parse(localStorage.getItem("user"))).slice(0, 1),
        sdt: "",
        diachi: "",

    }
    const dispatch = useDispatch()
    const [isCheckout,setIscheckout]=useState(true)
    useEffect(()=>{
        if (fullname!=null&&email!=null&&sdt&&diachi!=null) {
            setIscheckout(false)
        }else{
            setIscheckout(true)
        }
    })
    const items = JSON.parse(localStorage.getItem("items"))
    var Total=0;
    Object.keys(items).forEach(function (item) {
        Total += items[item].quantity * items[item].giaSpham
    })
    function TongGia(giaSpham, tongia) {
        return Number(giaSpham * tongia).toLocaleString('en-US')
    }
    const [forms, setForms] = useState(list)
    const { fullname, email, sdt, diachi } = forms
    const laytt = (e) => {
        const { name, value } = e.target
        setForms({ ...forms, [name]: value })
    }
    const ProductCheckout = ({ product: { anh, giaSpham, id, quantity, tenSpham } }) => {
        return (
            <div>
                <tr>
                    <td style={{ width: "97px" }}>{id}</td>
                    <td style={{ width: "346px" }}>{tenSpham}</td>
                    <td>{quantity}</td>
                    <td>{giaSpham}</td>
                    <td><img style={{ width: "100px" }} src={anh} alt={tenSpham} /></td>
                </tr>

            </div>
        )
    }
    const xoaproduct=()=>{
        localStorage.removeItem("items")
    }
    const ProductObject = ({ items }) => {
        const liatCart = items.map((products) => <ProductCheckout product={products} />)
        return (
            <div className="hi">
                <table className="table table-striped" style={{}}>
                    <tbody>
                        {liatCart}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div>
            <Menu />
            <div className="container-fluid" style={{
                marginTop: "60px",
                borderTop: "1px"
            }}>

                <div className="col-sm-12">
                    <p className="giam">Giảm giá ngay khi đăng ký tài khoản nhé</p>
                </div>
                <div className="col-sm-12" style={{

                }}>
                    <div className="row">
                        <div className="col-sm-6">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">Full Name</label>
                                    <input type="text" name="fullname" id="" value={fullname} onChange={laytt} className="form-control" placeholder="Vui lòng nhập họ và tên của bạn" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Địa Chỉ</label>
                                    <input type="text" name="diachi" value={diachi} onChange={laytt} id="" className="form-control" placeholder="Vui lòng nhập địa chỉ nhà bạn" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Số Điện Thoai</label>
                                    <input type="text" name="sdt" value={sdt} onChange={laytt} id="" className="form-control" placeholder="Vui lòng nhập số điện thoại của bạn" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="text" name="email" value={email} onChange={laytt} id="" className="form-control" placeholder="Vui lòng nhập email của bạn" />
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-5">
                            <h3>Thông tin đặt hàng</h3>
                            <h3>Các sản phẩm thanh toán</h3>
                            <ProductObject items={items} />
                            <ul></ul>
                            <h4>Total Price: $ {Total}</h4>
                            <h3>Chọn hình thức thanh toán</h3>
                            <input type="radio" name="checkout" id="" />Banking <br />
                            <input type="radio" name="checkout" id="" />Bank After <br />
                            <Button onClick={xoaproduct} endIcon={<SendIcon />} disabled={isCheckout} color="success">Thanh Toan</Button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default CheckOut