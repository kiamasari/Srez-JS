import Carousel from 'react-bootstrap/Carousel';

export function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/03/43/be/0343be1ed899564fe2d02bd979dbcf4e.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Photo by Slomakin</h5>
          <p>1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/7c/43/64/7c4364c2decfa950d4d9353b9b05d510.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Photo by Slomakin</h5>
          <p>2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/d8/bb/01/d8bb01b04b3e7fffd530595bb3e09079.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Photo by Slomakin</h5>
          <p>
            3
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
