import { useState } from "react"
import { Link } from "react-router-dom"
import Menu from "../menu/menu"
import { auth } from "../configfirebase/config"
import imagelogin from "../../image.modue/login-3305943-2757111.png"
const Register = () => {
    const list = {
        email: "",
        password: "",
    }
    const [forms, setForm] = useState(list)
    const { email, password } = forms
    const layTT = (e) => {
        const { name, value } = e.target
        setForm({ ...forms, [name]: value })
    }
    const hangchangSubmit = (e) => {
        e.preventDefault()
        auth
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
    }
    return (
        <div className="">
            <div col-sm-12>
                <Menu />
            </div>
            <div className="col-sm-12" style={{marginTop:"100px"}}>
                <div className="register container-fluid col-sm-7" style={{
                    alignItems: "center"
                }}>
                    <h1 style={{
                        textAlign: "center",
                        color: "red"
                    }}>Register</h1>
                    <div className="row">
                        <div className="register-form col-sm-4">

                            <form action="" method="post">
                                <div className="from-group">
                                    <label htmlFor="">Nhập email đăng ký</label>
                                    <input type="text" className="form-control" name="email" value={email} placeholder="Vui lòng nhập email đăng ký" onChange={layTT} id="" />
                                </div>
                                <div className="from-group">
                                    <label htmlFor="">Nhập mật khẩu đăng ký</label>
                                    <input type="text" className="form-control" name="password" value={password} placeholder="Vui lòng nhập mật khẩu đăng ký" onChange={layTT} id="" />
                                </div>

                                <div className="regiter-login">
                                    <input type="submit" value="Register" onClick={hangchangSubmit} className="btn btn-primary" />
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
            </div>
        </div>
    )
}
export default Register