import PaidIcon from '@mui/icons-material/Paid';
import  "../home/home.css";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
const HeaderIcon = () => {
    return (
        <div className="list-icon container-fluid">
            <div className='row' style={{
                textAlign:"center"
            }}>
                <div className="items col-sm-3">
                    <AirportShuttleIcon sx={{ fontSize: 100 }} />
                    <div>
                        <h3>Giao hàng miễn phí</h3>
                        <p>Nhận giao hàng miễn phí tận nơi trên toàn quốc</p>
                    </div>
                </div>
                <div className="items col-sm-3">
                    <PaidIcon sx={{ fontSize: 100 }} />
                    <div>
                        <h3>90 ngày trở lại</h3>
                        <p>Nhận hoàn tiền trong vòng 90 ngày</p>
                    </div>
                </div>
                <div className="items col-sm-3">
                    <LockOpenIcon sx={{ fontSize: 100 }} />
                    <div>
                        <h3>Thanh toán an toàn</h3>
                        <p>Thanh toán qua thẻ ngân hàng or giao hàng tận nơi</p>
                    </div>
                </div>
                <div className="items col-sm-3">
                    <ShoppingCartCheckoutIcon sx={{ fontSize: 100 }} />
                    <div>
                        <h3>Hỗ trợ 24/7</h3>
                        <p>Mua sắm và hỗ trợ trên 24/7</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderIcon