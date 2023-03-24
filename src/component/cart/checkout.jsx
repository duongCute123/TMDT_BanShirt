import Footer from "../footer/footer"
import Menu from "../menu/menu"
import { useState } from "react"
const CheckOut = () => {
    const list={
            fullname:"",
            email:localStorage.getItem("user"),
            sdt:"",
            diachi:"",

    }
    const [forms,setForms]=useState(list)
    const {fullname,email,sdt,diachi}=forms
    const laytt=(e)=>{
        const {name,value}=e.target
        setForms({...forms,[name]:value})
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
                            <ul></ul>
                            <h4>Tổng tiền</h4>
                            <h3>Chọn hình thức thanh toán</h3>
                            <input type="radio" name="checkout" id="" />Banking <br />
                            <input type="radio" name="checkout" id="" />Bank After <br />
                            <input type="button" value="Thanh Toán" /> <br />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default CheckOut