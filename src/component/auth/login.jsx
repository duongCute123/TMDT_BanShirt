import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Menu from "../menu/menu"
import { useNavigate } from "react-router-dom"
import { auth } from "../configfirebase/config"
import imagelogin from "../../image.modue/login-3305943-2757111.png"
const Login = () => {
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
    const navigation=useNavigate()
    // useEffect(()=>{
    //     const unsubscribe=auth.onAuthStateChanged((authUser)=>{
    //         console.log(authUser);
    //         if (authUser) {
    //             navigation("/")
    //         }
    //     })
    //     return unsubscribe
    // },[])
    const hangchangSubmit = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(forms)
            .then(
                navigation("/")
            )
            .catch(err => console.log(err))
    }
    return (
        <div className="container-fluid">
            <div col-sm-12>
                <Menu />
            </div>
            <div className="col-sm-12" style={{ marginTop: "100px" }}>
                <div className="register container-fluid col-sm-6" style={{
                    alignItems: "center"
                }}>
                    <h1 style={{
                        textAlign: "center",
                        color: "red"
                    }}>Login</h1>
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
                                    <input type="submit" value="Login" onClick={hangchangSubmit} className="btn btn-primary" />
                                </div>
                            </form>
                            <div className="register-lo">
                                <p>Bạn chưa có tài khoản!! <Link to={"/register"}>Register</Link></p>
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
export default Login