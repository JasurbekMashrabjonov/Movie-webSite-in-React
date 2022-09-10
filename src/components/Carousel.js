import React from "react";

function Carousel(props) {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/01.png" className="d-block w-100" alt="1-slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Qasoskorlar Abadiyat jangi</h5>
              <p className="slider_desc">
                Marvell kino olamining eng ommabop va kutilgan filmi
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/02.png" className="d-block w-100" alt="2-slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>O'rgimchak odam 3</h5>
              <p className="slider_desc">
                Uzoq tanaffusdan keyingi ilk kutilgan premyera
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/03.png" className="d-block w-100" alt="3-slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mirzapur</h5>
              <p className="slider_desc">
                Hind kino ijodkorlari tomonidan ishlangan serialning 2-mavsumi
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/04.png" className="d-block w-100" alt="3-slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Yo'qolgan Orol</h5>
              <p className="slider_desc">
                Mashhur aktyor Dweyn Jhons kareyrasini boyitgan ushbu fantastik
                janridagi premyera
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/05.png" className="d-block w-100" alt="3-slide" />
            <div className="carousel-caption d-none d-md-block ">
              <h5>Qahramonlar Ligasi o'lim vaqti</h5>
              <p className="slider_desc text-center">
                Avvalgi qismining davomi sifatida yozilayotgan va intiqish bilan
                kutilayotgan film treyleri
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
