// custom.js
```javascript
import getType  from './getType'; //getType js 가져오다
import _ from 'lodash';
import movies from '../data.json'

console.log('Hello DOM!!');
console.log(getType('123'));
console.log(getType(true));

console.log(_.camelCase('Hello world!!')); // lodash

console.log(movies.movies[0].title);

for(let movie of movies.movies) {
  console.log(movie.title);
  
}

```
```javascript
// getType.js
export  default function getType(data) { // 방법1
  return Object.prototype.toString.call(data)
}

// export  default getType 방법 2 보내다



```
```json

 {
  "movies" : [
      {
        "year" : "2024년",
        "title" : "베테랑 2",
        "genre" :"액션/범죄",
        "time" : "1시간 58분"
      },
      {
        "year" : "2024년",
        "title" : "에이리언: 로물루스",
        "genre" :"SF/공포",
        "time" : "1시간 59분"
      },
      {
        "year" : "2024년",
        "title" : "스픽 노 이블",
        "genre" :"공포/드라마",
        "time" : "1시간 50분"
      }
  ] 
 }

```