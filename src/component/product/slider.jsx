import slide1 from "../../image.modue/photo-1499939667766-4afceb292d05.avif"
import slide2 from "../../image.modue/photo-1511511450040-677116ff389e.avif"
import slide3 from "../../image.modue/photo-1523381294911-8d3cead13475.avif"
import Slider from "react-slick"
const SlideP = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container-fluid">
            <div className="">
                <div className="">
                    <h2> Single Item</h2>
                    <Slider {...settings}>
                        <div>
                            <img height={"500px"} width={"1232px"} src={slide1} alt="" />
                        </div>
                        <div>
                            <img height={"500px"} width={"1232px"} src={slide2} alt="" />
                        </div>
                        <div>
                            <img height={"500px"} width={"1232px"} src={slide3} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default SlideP