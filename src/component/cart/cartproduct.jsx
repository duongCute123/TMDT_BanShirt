import { add_shoping_cart, xoa_cart, IncreaseQuantity, DecreaseQuantity } from "../action/shopingcart"
import { Button } from "@mui/material"
import Menu from "../menu/menu"
import { useSelector, useDispatch } from "react-redux"
const CartProduct = () => {
    const items = useSelector(state => state.shoping.Cart)
    const number=useSelector(state=>state.shoping.numberCart)
    console.log(number);
    const dispatch = useDispatch()
    const Cart = ({ product: { anh, giaSpham, id, quantity, tenSpham } }) => {
        return (
            <div>

                <table class="table table-striped table-inverse table-responsive">
                    <thead class="thead-inverse">
                        <tr>
                                <td>{id}</td>
                                <td>{tenSpham}</td>
                                <td>{quantity}</td>
                                <td>{giaSpham}</td>
                                <td><img style={{ width: "100px" }} src={anh} alt={tenSpham} /></td>
                                <td>{giaSpham * quantity}</td>
                                <td>
                                    <Button onClick={() => dispatch(xoa_cart(id))} >Xoá</Button>
                                </td>
                            </tr>

                    </thead>

                </table>
            </div>
        )
    }

    // countries component
    const ListCart = ({ items }) => {
        const liatCart = items.map((products) => <Cart product={products} />)
        return (
            <div className="hi">
                <h3 align="center">Persons List</h3>
                <table className="table table-striped" style={{ marginTop: 60 }}>
                    <thead>
                        <tr>
                            <th>ID Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Số Lượng</th>
                            <th>Giá Sản Phẩm</th>
                            <th>Ảnh Sản Phẩm</th>
                            <th>Tổng Tiền</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {liatCart}
                    </tbody>
                </table>

            </div>
        )
    }
    console.log(items);
    return (
        <div className="shoping-cart">
            <Menu />
            <ListCart items={items}/>
        </div>
    )
}
export default CartProduct