import React from "react";
import { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../menu/menu"
import LayCoast from "../product/coast"
import InfoProduct from "../product/detailpage/sesionfetailpage"
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "../footer/footer";
const DetailPage = (props) => {
    var { id } = useParams()
    console.log(id);
    const [product, setProduct] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://633e2bdbc235b0e5751fe7a6.mockapi.io/products/' + id)
            .then(res => {
                setProduct(res.data)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get('https://633e2bdbc235b0e5751fe7a6.mockapi.io/products')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const LayGiay = () => {
        return (
            <div className="laygiay">
                <h1>Sản phẩm phổ biến hiện nay</h1>
                <div className="row">
                    <div className="col-sm-12">
                        {
                            data.filter(list => list.loaiSp.toLowerCase().includes("shirt")).map((list) => {
                                return (
                                    <div class="col-md-4">
                                        <div class="thumbnail">
                                            <a href="/w3images/lights.jpg" target="_blank">
                                                <img  width={"160px"} src={list.anh} />
                                                    <div class="caption">
                                                        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                                                    </div>
                                            </a>
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
    return (
        <div className="detailpage container-fluid">
            <Menu />
            <InfoProduct detail={product} />
            <LayGiay />
            <Footer />
        </div>
    )
}
export default DetailPage