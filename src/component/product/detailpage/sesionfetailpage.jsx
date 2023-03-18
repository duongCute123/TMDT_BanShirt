import { useState, useEffect } from "react"
import { Button } from "@mui/material"
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocalMallIcon from '@mui/icons-material/LocalMall';
const InfoProduct = (props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])
    console.log(product);
    const OneProduct = ({ oneproduct: { id, tenSpham, giaSpham, thongTin, nhaSX, soLuong, loaiSp, anh } }) => {
        return (
            <div className="container-fluid">

                <div className="row detailpage" style={{ borderTop: "1px", borderTopColor: "red" }}>
                    <div className="col-sm-5">
                        <img width={"400px"} src={anh} alt={tenSpham} />
                    </div>
                    <div className="col-sm-7">
                        <p>{nhaSX}</p>
                        <h4>{tenSpham}</h4>
                        <p style={{alignItems:"center"}}><CurrencyBitcoinIcon/>{giaSpham}</p>
                        <Button>Add Cart</Button>
                       
                        <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a
                                    class="nav-link active"
                                    id="ex1-tab-1"
                                    data-mdb-toggle="tab"
                                    href="#ex1-tabs-1"
                                    role="tab"
                                    aria-controls="ex1-tabs-1"
                                    aria-selected="true"
                                >Thông tin sản phẩm</a
                                >
                            </li>
                            <li class="nav-item" role="presentation">
                                <a
                                    class="nav-link"
                                    id="ex1-tab-2"
                                    data-mdb-toggle="tab"
                                    href="#ex1-tabs-2"
                                    role="tab"
                                    aria-controls="ex1-tabs-2"
                                    aria-selected="false"
                                >Nhà sản xuất sản phẩm</a
                                >
                            </li>
                            <li class="nav-item" role="presentation">
                                <a
                                    class="nav-link"
                                    id="ex1-tab-3"
                                    data-mdb-toggle="tab"
                                    href="#ex1-tabs-3"
                                    role="tab"
                                    aria-controls="ex1-tabs-3"
                                    aria-selected="false"
                                >Số Lượng của sản phẩm</a
                                >
                            </li>
                        </ul>
                       
                        <div class="tab-content" id="ex1-content">
                            <div
                                class="tab-pane fade show active"
                                id="ex1-tabs-1"
                                role="tabpanel"
                                aria-labelledby="ex1-tab-1"
                            >
                                {thongTin}
                            </div>
                            <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                {nhaSX}
                            </div>
                            <div class="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                {loaiSp} and {soLuong}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    return (
        <div className="container-fluid">
            <OneProduct oneproduct={product} />
        </div>
    )
}
export default InfoProduct