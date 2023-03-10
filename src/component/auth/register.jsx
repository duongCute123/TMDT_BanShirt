import { useState } from "react"
import { Link } from "react-router-dom"
import imagelogin from "../../image.modue/login-3305943-2757111.png"
const Register = () => {
    const list = {
        fullname: "",
        username: "",
        password: "",
        email: ""
    }
    const [forms, setForm] = useState(list)
    const { fullname, username, password, email } = forms
    const layTT = (e) => {
        const { name, value } = e.target
        setForm({ ...forms, [name]: value })
    }
    const hangchangSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="register container-fluid col-sm-6" style={{
            alignItems:"center"
        }}>
            <div className="row">
                <div className="register-form col-sm-4">
                    <h1 style={{
                        textAlign: "center",
                        color: "red"
                    }}>Register</h1>
                    <form action="" method="post">
                        <div className="from-group">
                            <label htmlFor="">Nhập họ và tên của bạn</label>
                            <input type="text" className="form-control" name="fullname" value={fullname} onChange={layTT} placeholder="Vui lòng nhập họ và tên ban" id="" />
                        </div>
                        <div className="from-group">
                            <label htmlFor="">Nhập tên tài khoản</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={layTT} placeholder="Vui lòng nhập tên đăng nhập" id="" />
                        </div>
                        <div className="from-group">
                            <label htmlFor="">Nhập mật khẩu đăng ký</label>
                            <input type="text" className="form-control" name="password" value={password} placeholder="Vui lòng nhập mật khẩu đăng ký" onChange={layTT} id="" />
                        </div>
                        <div className="from-group">
                            <label htmlFor="">Nhập email đăng ký</label>
                            <input type="text" className="form-control" name="email" value={email} placeholder="Vui lòng nhập email đăng ký" onChange={layTT} id="" />
                        </div>
                        <div className="regiter-login">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                    </form>
                    <div className="register-lo">
                        <p>Bạn đã có tài khoản!! <Link to={"/login"}>Login</Link></p>
                    </div>
                </div>
                <div className="image-form col-sm-4">
                    <img width={"340px"} src={imagelogin} alt="duong" />
                </div>
            </div>

        </div>
    )
}
export default Register