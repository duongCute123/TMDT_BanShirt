import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Button } from "@mui/material"
const ItemProduct = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://633e2bdbc235b0e5751fe7a6.mockapi.io/products")
            .then(res => {
                setData(res.data)
            })
            .then(res => {
                console.log("Lấy dữ liệu thanh công");
            })
            .catch(err => {
                console.log(err);
            })
    })
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4">
                    <div className="">
                        <Button>All Product</Button>
                    </div>
                    <div>
                        <Button>All Shirt</Button>
                    </div>
                    <div>
                        <Button>All Coast</Button>
                    </div>
                    <div>
                        <Button>All Dress</Button>
                    </div>
                </div>
                <div className="col-sm-8">
                    {
                        data.map((list) => {
                            return (
                                <div className="allproduct" key={list.id}>
                                    <div className="container-fluid">
                                        <div className="row" style={{float:"left",margin:"5px"}}>
                                            <div className="col-sm-4" >
                                                <img width={"216px"} src={list.anh} alt="" />
                                                    <h6>{list.tenSpham}</h6>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default ItemProduct