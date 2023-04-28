// import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';

// const Slider = () => {
//   return (
//     <>
//       <Carousel fade data-interval="10000" style={{zIndex: '-1'}}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./image/b3.jpg" alt="First slide"
//         />
//         <Carousel.Caption>
//           {/* <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./image/b1.jpg"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           {/* <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//         </Carousel.Caption>
        
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="./image/b2.jpg"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           {/* <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//         </Carousel.Caption>
        
//       </Carousel.Item>
//       {/* <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item> */}
//     </Carousel>
//     </>
//   )
// }

// export default Slider

import React from 'react'

export default function Slider() {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./image/b3.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./image/b1.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./image/b2.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </>
  )
}
