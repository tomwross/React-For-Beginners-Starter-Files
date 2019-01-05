import React from "react";

// method 1 with normal function
// function Header(props) {
//   return (
//     <header className="top">
//       <h1>
//         Catch
//         <span className="ofThe">
//           <span className="of">Of</span>
//           <span className="the">The</span>
//         </span>
//         Day
//       </h1>
//       <h3 className="tagline">
//         <span>{props.tagline}</span>
//       </h3>
//     </header>
//   );
// }

// method 2 with arrow function and implicit return
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

// method 3 regular React component
// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;
