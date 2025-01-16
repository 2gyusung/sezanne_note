```jsx
import React from 'react'
import ev6 from '../images/ev6.jpg'
import { palisade, mohave } from '../Images.js'

const ImageBox = ({imgList}) => {
  return (
    <div className='Img_group'>
      <img src={ev6} alt='ev6'/> {/*vite에 가져온다 */}
      <img src={process.env.PUBLIC_URL+'/images/mohave.jpg'} alt='mohave'/> {/*public/images/mohave  우선순위에서 1위* public에 접근/}
      <img src={require('../images/palisade.jpg')} alt='mohave'/> {/*public/images/mohave 우선순위에서 2위** src에 접근/}
      <img src={require(`../images/${imgList[6]}.jpg`)} alt='mohave'/> {/*보간법을 활용하여 사용한다*/}
   {/* {
     imgList.map(it=> {
           <img src={process.env.PUBLIC_URL + (`/images/${it}.jpg`)} alt={it} key={it}/>}
       )
   }   */}
   <img src={palisade}></img>
   <img src={mohave}></img>
    </div>
  )
}
```
export default ImageBox

- public 폴더룔 활용하여 src에 사용
> process.env.PUBLIC_URL

-src 폴더

> 1 import 별명 from '경로이미지';

> 2 {require(`../images/${imgList[6]}.jpg`)} alt='mohave'/> {/*보간법을 활용하여 사용한다*/}

기타 방법
object , json, export

- 참고 자료 : https://sleepy-it.tistory.com/4