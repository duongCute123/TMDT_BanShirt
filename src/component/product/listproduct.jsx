import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getprocduct } from "../action/productaction"

const GetProduct = () => {
    const product = useSelector(state => state.product.Product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getprocduct(product))
    })
    console.log(product);
    const Product = ({ products: { tenSpham, anh, giaSpham, loaiSp, nhaSX, thongTin } }) => {
        return (
            <div className="container-fluid">
                <div>
                    <h1>{tenSpham}</h1>
                </div>
            </div>
        )
    }
    const ListItem=({items})=>{
        const listitem=items.map((list)=><Product products={list}/>)
        console.log(listitem);
        return listitem
    }
    return (
        <div className="container-fluid">
            <div className="colum">
                <h1>Hello ban nhe</h1>
                <ListItem items={product}/>
            </div>
        </div>
    )
}

export default GetProduct