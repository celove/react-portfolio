import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

// read JSON data
const postsData = require("./Mocks/_posts.json");

export default function Blog() {
    return (
    <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.lance.com.br/files/article_main/uploads/2017/08/24/599ee2129ff9e.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://midias.agazeta.com.br/2020/01/16/xande-de-pilares-164951.jpg"
                alt="Second slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://acontecendoaqui.com.br/sites/default/files/marcelo_mendes_m.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.hugogloss.uol.com.br/uploads/2021/02/gilberto-1.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            );
    // const posts = postsData.map(post => {
    //     return (
    //         <>
    //         <Link to={"/post/" + post.slug} key={post.slug}>
    //             <div className="post-listing">
    //                 <h1>{post.title}</h1>
    //             </div>
    //         </Link>
    //       </>
    //     );
    // });

    // return <div className="blog">{posts}</div>;
}