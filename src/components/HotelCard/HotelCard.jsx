import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={hotel.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {hotel.hotelName}
          <div className="badge badge-secondary">${hotel.rent}</div>
        </h2>
        <p>{hotel.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{hotel.roomType}</div>
        </div>
        <button
          onClick={
            user
              ? () => navigate("/hotel/" + hotel.id)
              : () => navigate("/login")
          }
          className="btn btn-neutral"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
