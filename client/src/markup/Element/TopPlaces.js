import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { roomActions } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Image, Transformation } from "cloudinary-react";
import { roomsService } from "../../services";



function TopPlaces(props) {
  const rooms = useSelector(state => state.roomReducer.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roomActions.getAll());
  }, [dispatch]);
  console.log(rooms);
  return (
    <div className="section-full bg-white content-inner dlab-about-1 promotions" id="about-us">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="text-uppercase m-b0">TOP PLACES</h2>
          <p className="font-18">BEST TRAVEL PACKAGES AVAILABLE</p>
        </div>
        <div className="row d-flex">
          <div className="col-md-8 col-sm-8 col-lg-9 form-group align-self-center text-left">
            {/*<button className="site-button m-b5 mr-1">Home Stay</button>*/}
            {/*<button className="site-button m-b5 mr-1">Hotel</button>*/}
            {/*<button className="site-button m-b5 mr-1">Resort</button>*/}
            {/*<button className="site-button m-b5 mr-1">Phan Thiết</button>*/}
            {/*<button className="site-button m-b5 mr-1">Nha Trang</button>*/}
            {/*<button className="site-button m-b5 mr-1">Vũng Tàu</button>*/}
            {/*<button className="site-button m-b5 mr-1">TP Hồ Chí Minh</button>*/}
            {/*<button className="site-button m-b5 mr-1">Hà Nội</button>*/}
          </div>
          <div className="col-md-4 col-sm-4 col-lg-3 form-group">
            <select className="form-control">
              <option>Relevent</option>
              <option>High to Low</option>
              <option>Low to High</option>
            </select>
          </div>
        </div>
        <div className="row" id="masonry">
          {rooms.map((item, index) => (

            <div className="col-lg-4 col-md-6 col-sm-6 m-b30 card-container" key={index}>
              <div className="dlab-box">
                <div className="dlab-media">
                  <Link to={"./booking"}>
                    <Image cloudName="dmtwoqysj" publicId={item.images[0].url}>
                      <Transformation width="400" height="250" gravity="south" crop="fill" />
                    </Image>
                    {/*<img src={item.image} alt="" />*/}
                  </Link>
                  <div className="tr-price">
                    <span>{
                      roomsService.formatPrice(item.price)
                    } </span>
                  </div>
                </div>
                <div className="dlab-info p-a20 border-1 text-center">
                  <h4 className="dlab-title m-t0"><Link to={"./booking"}>{item.name}</Link></h4>
                  <p>{item.shortDescription}</p>

                  <div className="tr-btn-info">
                    <Link to={`./hotelbooking/${item.id}`} className="site-button radius-no"><i className="fa fa-location-arrow"
                                                                                aria-hidden="true"></i> Japan</Link>
                    <Link to={"./booking"} className="site-button bg-primary-dark radius-no"><i
                      className="fa fa-info-circle" aria-hidden="true"></i> Relax </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopPlaces;