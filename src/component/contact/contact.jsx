import axios from "axios";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import happy from "../../image.modue/happy-man-online-dating-via-laptop_74855-7495.avif"
import Menu from "../menu/menu";
import Footer from "../footer/footer";
const Contact = () => {
    return (
        <div className="container-fluid" style={{ textAlign: "center" }}>
            <Menu/>
            <h1 style={{marginTop:"60px"}}>Contact Us</h1>
            <div className="row">
                <div className="col-sm-5">
                    <img width={"370px"} src={happy} alt="happy" />
                </div>
                <div className="col-sm-7">
                    <form action="" method="post">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Vui lòng nhập tên của bạn" name="" id="" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Vui lòng nhập địa chỉ email của bạn" name="" id="" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" placeholder="Vui lòng nhập ý kiến của bạn" id="" cols="30" rows="10"></textarea>
                        </div>
                        <input type="button" value="SEND MESSAGE" className="btn btn-primary" />
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact