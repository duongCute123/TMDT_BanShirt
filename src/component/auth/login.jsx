import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
const Login = () => {
    const list = {
        ussername: "",
        password: ""
    }
    const [forms, setForms] = useState(list)
    const { ussername, password } = forms
    const layTT = (e) => {
        const { name, value } = e.target
        setForms({ ...forms, [name]: value })
    }
    const hangdSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login container-fluid col-sm-6">
            <div className="login-form">
                <h1 style={{
                    textAlign: "center"
                }}>Login</h1>
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="">Nhập tên đăng nhập</label>
                        <input type="text" name="ussername" value={ussername} placeholder="Vui lòng nhập tên đăng nhập" onChange={layTT} className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Nhập mật khẩu đăng nhập</label>
                        <input type="text" name="password" value={password} placeholder="Vui lòng nhập mật khẩu đăng nhập" onChange={layTT} className="form-control" id="" />
                    </div>
                    <div className="col-sm-12" style={{
                        textAlign:"center"
                    }}>
                        <input type="submit" className="btn btn-primary" value="Login" onClick={hangdSubmit} />
                    </div>
                </form>
            </div>
            <div className="login-register">
                <p>Bạn chưa có tài khoản? <Link to={"/register"}>Đăng ký</Link></p>
            </div>
        </div>
    )
}
export default Login