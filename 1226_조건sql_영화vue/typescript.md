

// 타입 종류

// 문자
{
  let red : string ='Red'
  let green :string = 'Green';
  let myColor:string =`My color is ${red}`
  let yourColor:string =`My color is ${red}` + ' and ' + green
}

// 숫자
{
  let num: number;
  let integer: number = 6;
  let float: number = 3.14;
  let infinity : number = Infinity;
  let nan: number = NaN;
}
// 불린
{
  let isBoolean: boolean;
  let isDone: boolean = true;

}
// null, undefined
{
  let nul: null;
  let und: undefined;
  nul = null
  console.log(nul);
}
// 배열
{
  const fruits : string[]= ['apple', 'orange']
  const num : number[]= [1,2,3,4]
  const uni :(string|number)[]=['Apple',1,2,3,'Orange']
  const arr:number[] = [1,2,3]
}

// 객체
{
  const obj : object = {}
  const arr : object = []
  const func : object = function() {};

 
  const userB: {
    name : string,
    age : number,
    isValid: boolean
  } = {
    name : 'Malja',
    age : 50,
    isValid : false
  }
  // 보완 > interface 이용한다 
  interface User {
    name: string,
    age: number,
    isValid: boolean
  }
  const userA: User = {
    name : 'Gildong',
    age : 100,
    isValid : true
  }
  const userC : User = {
    name : 'Malja2',
    age : 502,
    isValid : true
  }
}


// 함수
{
  const add:(x:number, y:number)=> number = function(x,y) { // function(x:number,y:number) {} 도 가능하다
    return x+y
  }
  const add2 = function(x:number,y:number): number{ 
    return x+y
  }
  const result: number = add(10, 100);
  console.log(result); //110
  
  const hello: () => void = function() {
   console.log('Hello TS');
    
  }
  const helloResult:void = hello();
  console.log(helloResult);
  

}
//  Any 별로 사용안함
{
  let hello:any = 'hello'
  hello = 123;
  hello = []
  hello = function() {}
}
//  unknow
{
  let a:any = 123
  let b:unknown;
  a = 123
  a = []
  const aa:any = b;
  const boo : boolean = b;
  const arr:string[] =b;
  // https://xionwcfm.tistory.com/394
}

// tuple
{
  const tuples : [string, number, boolean] =['a', 10, false , true]
}

// void
// never
const nev : [] = [];
nev.push(3)
// union
// intersection
