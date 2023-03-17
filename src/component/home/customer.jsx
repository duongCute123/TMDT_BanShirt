import Slider from "react-slick"
import slide1 from "../../image.modue/shopping_model.png"
import slide2 from "../../image.modue/shopping_model.png"
import slide3 from "../../image.modue/shopping_model.png"
const Customer = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="container-fluid">
            <h2> Multiple items </h2>
            <Slider {...settings}>
                <div>
                    <div className="image-slide" style={{

                    }}>
                        <img width={"100px"} src={slide1} alt="" />
                    </div>
                    <h1>Mr.Teen Qeen</h1>
                    <p>Có rất nhìu sản phẩm đep.Trang web rất đáng
                        để mua sắm
                    </p>
                </div>
                <div>
                    <div className="image-slide" style={{

                    }}>
                        <img width={"100px"} src={slide1} alt="" />
                    </div>
                    <h1>Mr.Teen Qeen</h1>
                    <p>Có rất nhìu sản phẩm đep.Trang web rất đáng
                        để mua sắm
                    </p>
                </div>
                <div>
                    <div className="image-slide" style={{

                    }}>
                        <img width={"100px"} src={slide1} alt="" />
                    </div>
                    <h1>Mr.Teen Qeen</h1>
                    <p>Có rất nhìu sản phẩm đep.Trang web rất đáng
                        để mua sắm
                    </p>
                </div>
                <div>
                    <div className="image-slide" style={{

                    }}>
                        <img width={"100px"} src={slide1} alt="" />
                    </div>
                    <h1>Mr.Teen Qeen</h1>
                    <p>Có rất nhìu sản phẩm đep.Trang web rất đáng
                        để mua sắm
                    </p>
                </div>
                <div>
                    <div className="image-slide" style={{

                    }}>
                        <img width={"100px"} src={slide1} alt="" />
                    </div>
                    <h1>Mr.Teen Qeen</h1>
                    <p>Có rất nhìu sản phẩm đep.Trang web rất đáng
                        để mua sắm
                    </p>
                </div>
                <div>
                    <div className="image-slide" style={{

                    }}>
                        <img width={"100px"} src={slide1} alt="" />
                    </div>
                    <h1>Mr.Teen Qeen</h1>
                    <p>Có rất nhìu sản phẩm đep.Trang web rất đáng
                        để mua sắm
                    </p>
                </div>
                <div>
                    <div className="image-slide" style={{

                    }}>
                        <img width={"100px"} src={slide1} alt="" />
                    </div>
                    <h1>Mr.Teen Qeen</h1>
                    <p>Có rất nhìu sản phẩm đep.Trang web rất đáng
                        để mua sắm
                    </p>
                </div>
                <div>
                    <div className="image-slide" style={{

                    }}>
                        <img width={"100px"} src={slide1} alt="" />
                    </div>
                    <h1>Mr.Teen Qeen</h1>
                    <p>Có rất nhìu sản phẩm đep.Trang web rất đáng
                        để mua sắm
                    </p>
                </div>
                <div>
                    <div className="image-slide" style={{

                    }}>
                        <img width={"100px"} src={slide1} alt="" />
                    </div>
                    <h1>Mr.Teen Qeen</h1>
                    <p>Có rất nhìu sản phẩm đep.Trang web rất đáng
                        để mua sắm
                    </p>
                </div>
            </Slider>
        </div>
    )
}
export default Customer