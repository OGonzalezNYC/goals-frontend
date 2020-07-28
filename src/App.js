import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import GoalsContainer from './containers/GoalsContainer';
// class App extends React.Component {
// //App component CAN be a container component.
//   //componentDidMount() {
//     render() {
//       return (
//         <div className="App">
//           <GoalsContainer/>
//         </div>
//       )
//     }
// //  }
// }
function App() {
  return (
    <div className="App">
      <Link to={'/goals'}>Click Here To See All Of Your Current Goals</Link>
      <br></br>
      <br></br>
      <Link to={'/goals/new'}>Click Here To Create A New Goal</Link><br></br><br></br>
      <GoalsContainer/>
    </div>
  )
}
export default App;
