import React from 'react';
import './App.css';
import NewsFirst from './components/NewsFirst';
import NewsSecond from './components/NewsSecond';
import Header from './components/Header';

  

const myPost = [
  {
    id: 1,
    secondName1: "world!"
  }
];

const myPost2 = [
  {
    id: 2,
    name: "Authors",
    secondName: "Topics",
    theNumberOfDate: "7 ",
    month: "july"
  }
];

const myPost3 = [
  {
    id: 3,
    number: "7",
    theNameOfLang: "React",
    lovelyLang: "JavaScript"
  }
];


function App() {

  return (
    <div className="App">
      {
        myPost.map(item => <Header key={item.id} secondName1={item.secondName1}/>)
      },

      {
        myPost2.map(item => <NewsFirst key={item.id}
          name={item.name}
          secondName={item.secondName}
          theNumberOfDate={item.theNumberOfDate}
          month={item.month} />)
      },

      {
        myPost3.map(item => <NewsSecond key={item.id}
          number={item.number}
          theNameOfLang={item.theNameOfLang}
          lovelyLang={item.lovelyLang} />
        )
      }
   
    </div>

  );
}



export default App;


// const about = {
//   secondName: "world!"
// };

// const first = {
//   name: "Authors ",
//   secondName: "Topics",
//   theNumberOfDate: "7 ",
//   month: "july"
// };

// const second = {
//   number: "7",
//   theNameOfLang: "React",
//   lovelyLang: "JavaScript"
// }