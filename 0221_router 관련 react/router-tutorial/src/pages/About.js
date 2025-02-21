import React from "react";
import { Link, useLocation, useSearchParams, } from "react-router";


const About = () => {
  const location = useLocation()
  const [searchParams , setSearchParams] = useSearchParams()

  
 const detail =  searchParams.get('detail')
 const node = searchParams.get('node')
  
  const onToggleDetail = () => {
    setSearchParams({
      node: 'null',
      detail : detail === 'true' ? false : true
    })
  }
  const onIncreaseNode = () => {
    const nextNode = node === 'null' ? 1 : parseInt(node) + 1;
    setSearchParams({
      node : nextNode, detail
    })
  }
  return (
    <div className="About">
      <h1>About Page..</h1>
      <p>리액트 라우터를 사용하여 보여질 페이지About 보여줄 페이지</p>
      <p>queryString : {location.search}</p>
      <p>detail : {detail}</p>
      <p>node : {node}</p>
      <button className='btn' onClick={onToggleDetail}>Toggle detail</button>
      <button className='btn' onClick={onIncreaseNode}>Node +</button>
      <Link className='btn' to={"/"}>Home</Link>
    </div>
  );
};

export default About;
