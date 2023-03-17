import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getprocduct } from "../action/productaction"
const LayShirt = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
            .then(res => {
                setData(res.data)
            })
            .then(res => {
                console.log("Lấy dữ liệu thành công");
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(data);
    return (
        <div className="container-fluid">
            <h1>Ưu đãi lớn</h1>
            {
                data.filter(list => list.loaiSp.toLowerCase().includes("shirt")).map((list) => {
                    return (
                        <div className="container-fluid">
                            <div className="list-shirt row" style={{ margin: "5px" }}>
                                <div className="col-sm-12">
                                    <div className="thumbnail">
                                        <Link to={"/product/" + list.id}>
                                            <img width={"234px"} height={"160px"} src={list.anh} alt={list.tenSpham} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
const LayCoast = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
            .then(res => {
                setData(res.data)
            })
            .then(res => {
                console.log("Lấy dữ liệu thành công");
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(data);
    return (
        <div className="container-fluid">
            <h1>Sản phẩm phổ biến</h1>
            {
                data.filter(list => list.loaiSp.toLowerCase().includes("coast")).map((list) => {
                    return (
                        <div className="container-fluid">
                            <div className="list-shirt row" style={{ margin: "5px" }}>
                                <div className="col-sm-12">
                                    <div className="thumbnail">
                                        <Link to={"/product/" + list.id}>
                                            <img width={"234px"} height={"160px"} src={list.anh} alt={list.tenSpham} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
const LayVay = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
            .then(res => {
                setData(res.data)
            })
            .then(res => {
                console.log("Lấy dữ liệu thành công");
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(data);
    return (
        <div className="container-fluid">
            <h1>Sản phẩm yêu thích</h1>
            {
                data.filter(list => list.loaiSp.toLowerCase().includes("dress")).map((list) => {
                    return (
                        <div className="container-fluid">
                            <div className="list-shirt row" style={{ margin: "5px" }}>
                                <div className="col-sm-12">
                                    <div className="thumbnail">
                                        <Link to={"/product/" + list.id}>
                                            <img width={"234px"} height={"160px"} src={list.anh} alt={list.tenSpham} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
const SlideP=()=>{
    return(
        <div className="container-fluid">
            
        </div>
    )
}
const GetProduct = () => {

    return (
        <div className="container-fluid">
            <div className="colum">
                <div className="col-sm-12">
                    <LayShirt />
                </div>
                <div className="col-sm-12">
                    <LayCoast />
                </div>
                <div className="col-sm-12">
                    <LayVay />
                </div>
            </div>
        </div>
    )
}
export default GetProduct