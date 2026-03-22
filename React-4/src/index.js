import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Food</h1>
    <div>
      <img
        className="food-img"
        src="https://tse3.mm.bing.net/th/id/OIP.Aw19TEYM-JkahHeiMo5miAHaHa?pid=Api&P=0&h=180"
        alt="noodles"
      />
      <img
        className="food-img"
        src="https://tse2.mm.bing.net/th/id/OIP.Wftp-IDL7kcDjuAXzJD0AQHaLH?pid=Api&P=0&h=180"
        alt="noodles"
      />
      <img
        className="food-img"
        src="https://tse4.mm.bing.net/th/id/OIP.BGtaDm3ZRYAAb0x_PzahLAHaLH?pid=Api&P=0&h=180"
        alt="noodles"
      />
    </div>

    <h1 className="heading">My Favourite Food</h1>
    <img src={img + "?grayscale"} alt="image" />
  </div>,
  document.getElementById("root")
);
