const Footer=()=>{
    return(
        <div className="container-fluid">
            <div className="row" style={{borderTop:"1px",borderTopColor:"red"}}>
                <div className="col-sm-3">
                    <h4>Web bán hàng Online</h4>
                    <p>Rất vui vì bạn ghé thăm</p>
                </div>
                <div className="col-sm-3">
                    <h4>Các chức năng có trên web</h4>
                    <ul>
                        <li>View Product</li>
                        <li>Many Product</li>
                        <li>Login and Register</li>
                        <li>ShopingCart</li>
                        <li>Seach Product with Name Product</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h4>People writing:Nguyen Van Duong</h4>
                    <h5>Thông tin liên hệ</h5>
                    <ul>
                        <li>SDT:0338629576</li>
                        <li>Thông tin khác none</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h4>Phát triển thêm sau</h4>
                </div>
            </div>
        </div>
    )
}
export default Footer