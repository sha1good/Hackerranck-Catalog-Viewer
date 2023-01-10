// import { useEffect, useState } from "react";
// import { Users } from "./users";
// import "./app.css";
// import Table from "./Table";
// import axios from "axios";

//////////////////////BASIC SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((asd) =>
//           asd.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li className="listItem" key={user.id}>
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

///////////////////////SEARCH ON A DATATABLE

// function App() {
//   const [query, setQuery] = useState("");
//   const [dataArray, setDataArray] = useState({});
//    const [error, setError ] = useState(null)

//   //const keys = ["name", "validDate", "email"];
//   const keys = ["first_name", "last_name", "email"];
//  // const keys = ["name"];
//   const Search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key]?.toLowerCase().includes(query))
//     );
//   };

//   // const Search = (data) => {
//   //   return data.filter((item) =>
//   //     keys.some((key) => item[key].toLowerCase().includes(query))
//   //   );
//   // };

//   // const handleClick = (event) => {
//   //   event.preventDefault();
//   //   setDataArray(Search(Users)[0]);
//   //   setQuery("");
//   // };

//   const handleClick = (event) => {
//       event.preventDefault();
//       console.log(Users)
//       const data = Users.find(item => item?.first_name?.toLowerCase() === query)
//       setDataArray(data)
//      //setDataArray(Search(Users)[0]);
//      if(data === undefined){
//       setError(`Could not find  ${query}  in the dataList`)
//      }
//       setQuery("");
//     };

//   //console.log(dataArray);
//   return (
//     <div className="app">
//       <input
//         className="search"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <div style={{ marginTop: "30px" }}>
//         <button onClick={handleClick}>Add</button>
//       </div>
//       {/* {<Table data={Search(Users)} />} */}
//       {<Table data={dataArray} />}
//     { error && <span>{error}</span>}
//     </div>
//   );
// }

////////////////////// API SEARCH

// function App() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`http://localhost:5000?q=${query}`);
//       setData(res.data);
//     };
//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query]);

//   return (
//     <div className="app">
//         <input
//           className="search"
//           placeholder="Search..."
//           onChange={(e) => setQuery(e.target.value.toLowerCase())}
//         />
//       {<Table data={data} />}
//     </div>
//   );
// }

//export default App;

// import React, { useState } from 'react';
// import "./app.css";
// import ResidentsList from './components/ResidentList';
// import Search from './components/Search';
// import Error from './components/Error';
// //import 'h8k-components';

// const title = "Hacker Dormitory";
// function App() {

//    const [error, setError] = useState(null)
//    const [dataArray, setDataArray] = useState([]);

//     const addStudent = (dataArray) => {
//         setDataArray((prev) =>  [...prev, dataArray]);

//     }

//      const addError =(error) =>{
//        setError(error)
//      }

//     //   const handleList = (data) => {
//     //       return data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
//     // }

//   return (
//     <div className="app">
//         <h8k-navbar header={title}></h8k-navbar>
//       <div className="layout-column">
//         <Search onAddStudent = {addStudent} onAddError={addError}/>
//         { error && <Error error ={error}/>}
//         <ResidentsList items = {dataArray}/>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { Fragment, useState } from 'react'
// //import 'h8k-components'

// import Viewer from './components/Viewer'
// import Thumb from './components/Thumb'
// import  pizza1 from "./images/pizza1.jpg"
// import  pizza2 from "./images/pizza2.jpg"
// import  pizza3 from "./images/pizza3.jpg"
// import  pizza4 from "./images/pizza4.jpg"

// const title = 'Catalog Viewer'

// function App() {

//   const catalogsList = [
//     {
//       thumb: pizza1,
//       image: pizza1
//     },
//     {
//       thumb: pizza2,
//       image: pizza2
//     },
//     {
//       thumb: pizza3,
//       image: pizza3
//     },
//     {
//       thumb: pizza4,
//       image: pizza4
//     }
//   ]

//   const [ catalogs ] = useState([...catalogsList])
//   const [ activeIndex, setActiveIndex ] = useState(0)
//   const [ slideTimer, setSlideTimer ] = useState(null)
//   const [ slideDuration ] = useState(3000)

//    const prevSlide = () => {
//      setActiveIndex(activeIndex === 0 ? 3 : (prev) => prev -1 )
//    }
//      const nextSlide = () =>{
//         setActiveIndex(activeIndex === 3 ? 0 : (prev) => prev + 1 )
//      }

//       const handleCheckedButton = (event) =>{
//          const isChecked = event.target.checked;

//           setSlideTimer(
//            isChecked ? setTimeout(() => {
//              slideTimer(activeIndex)
//             },
//             slideDuration)
//            : slideTimer(activeIndex))
//       }
//   return (
//     <Fragment>
//       <h8k-navbar header={ title }></h8k-navbar>
//       <div className='app'>
//         <div className='layout-row'>
//           <div className='card'>
//             <Viewer catalogImage={ catalogs[activeIndex].image }/>
//             <div className='layout-row justify-content-center align-items-center mt-20'>
//             <button
//               className="icon"
//               data-testid="prev-slide-btn"
//              onClick={prevSlide}>
//               <i className="material-icons" >arrow_back</i>
//             </button>
//               <Thumb
//                 items={ catalogs }
//                 currentIndex={ activeIndex }
//               />
//             <button
//               className="icon"
//               data-testid="next-slide-btn"
//              onClick={nextSlide}>
//               <i className="material-icons">arrow_forward</i>
//             </button>
//             </div>
//           </div>
//         </div>
//         <div className='layout-row justify-content-center mt-25'>
//           <input
//             type='checkbox'
//             data-testid='toggle-slide-show-button'
//             onChange ={handleCheckedButton}
//           />
//           <label className='ml-6'>Start Slide Show</label>
//         </div>
//       </div>
//     </Fragment>
//   )
// }

// export default App

import React, { Fragment, useState, useEffect, useCallback } from "react";
import "h8k-components";

import { image1, image2, image3, image4 } from "./assets/images";
import Viewer from "./components/Viewer";
import Thumbs from "./components/Thumb";

const title = "Catalog Viewer";

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs, setCatalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [ slideTimer, setSlideTimer ] = useState(null);
  const [slideDuration] = useState(3000);

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      const _catalogs = new Array(catalogs[3]).concat(catalogs.slice(0, 3));
      //const _catalogs = catalogs[3].concat(catalogs.slice(0, 3));
      console.log(..._catalogs)
      setCatalogs([..._catalogs]);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  // const handleNextClick = useCallback(() => {
  //   if (activeIndex === 3) {
  //      const _catalogs = catalogs.slice(1,4).concat(catalogs[0]);
  //    // const _catalogs = new Array(catalogs[0]).concat(catalogs.slice(1,4));
  //     console.log(..._catalogs);
  //     setCatalogs([..._catalogs]);
  //   } else {
  //     setActiveIndex(activeIndex + 1);
  //   }
  // }, [activeIndex, catalogs]);

  const handleNextClick = useCallback(() => {
    if (activeIndex === 3) {
       const _catalogs = catalogs.slice(1,4).concat(catalogs[0]);
     // const _catalogs = new Array(catalogs[0]).concat(catalogs.slice(1,4));
      console.log(..._catalogs);
      setCatalogs([..._catalogs]);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }, [activeIndex, catalogs]);

  //    const previousSlide = () => {
  //      setActiveIndex(activeIndex === 3 ? 0 : (prev) => prev - 1)
  //    }

  //     const nextSlide = useCallback(() =>{
  //       setActiveIndex(activeIndex === 0 ? 3 : (prev) => prev + 1)
  //    }, [activeIndex]
  // )
  const handleThumbClick = (idx) => {
    setActiveIndex(idx);
  };

  const handleSliding = useCallback((e) =>  {
      const _val = e.target.checked;
      setIsSliding(_val);
      setSlideTimer(slideDuration);
    }
  ,[slideDuration])
  // useEffect(() => {
  //   if (isSliding) {
  //     const interval = setInterval(() => {
  //       handleNextClick();
  //     }, slideDuration);
  //     return () => clearInterval(interval);
  //   }
  // }, [isSliding, activeIndex, catalogs, handleNextClick, slideDuration]);

  useEffect(() => {
    if (isSliding) {
      const interval = setInterval(() => {
       handleNextClick();
      
      }, slideTimer);
      
      return () => clearInterval(interval);
    }
  }, [isSliding, activeIndex, handleSliding, slideTimer]);

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center mt-75">
        <div className="layout-row justify-content-center">
          <div className="card pt-25">
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className="layout-row justify-content-center align-items-center mt-20">
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                onClick={handlePrevClick}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                currentIndex={activeIndex}
                handleClick={handleThumbClick}
              />
              <button
                className="icon-only outlined"
                data-testid="next-slide-btn"
                onClick={handleNextClick}
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className="layout-row justify-content-center mt-25">
          <input
            type="checkbox"
            data-testid="toggle-slide-show-button"
            onChange={handleSliding}
          />
          <label className="ml-6">Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
