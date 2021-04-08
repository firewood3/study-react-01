// import React from 'react';
// import Say from './app/Say';
// import Counter from './app/Counter';
// import MyComponent from './MyComponent';
// import EventPractice from './app/EventPractice';
import React, { Component } from 'react';
import ScrollBox from './app/scrollBox/ScrollBox';
import ValidationSample from './app/validationSample/ValidationSample';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <div>
//       {/* <Counter></Counter> */}
//       {/* <Say></Say> */}
//       {/* <EventPractice></EventPractice> */}
//       {/* <EventPracticeFun></EventPracticeFun> */}
//       <ValidationSample></ValidationSample>
//     </div>
//   );
// };

// export default App;
