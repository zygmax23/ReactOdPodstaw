import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root/Root';

// const App2= React.createElement(
//   'div',
//   {
//     className: 'wrapper',
//     items:2,
//   },
//   [
//     React.createElement(
//       'h1',
//       {
//         className:'mainHeader',
//       },
//       'Hello world',
//     ),
//     React.createElement(
//       'h2',
//       {
//         className:'secondaryHeader'
//       },
//       'Hello, eduweb'
//     )
//   ]
// )

// const App2= () => (
//   <div className="wrapper">
//     <h1 className="mainHeader">Hello world</h1>
//     <h1 className="secondaryHeader">Hello eduweb</h1>
//   </div>
// )


ReactDOM.render(
  //App2,
    <Root/>,
  document.getElementById('root')
);

