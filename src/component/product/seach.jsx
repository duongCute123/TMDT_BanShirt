const Seach = ({product,query}) => {
    return (
        <div className="">
            <h1>Danh sach san pham tim kiem</h1>
            {
                product.filter(list => list.tenSpham.toLowerCase().includes(query)).map((list)=>(
                    <li>{list.tenSpham}</li>
                ))
            }
        </div>
        
    )
}
export default Seach
