import React from "react";
import { Link } from "gatsby";
import "./index.css";

// const Navbar = class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false,
//       navBarActiveClass: "",
//     };
//   }

//   toggleHamburger() {
//     // toggle the active boolean in the state
//     this.setState(
//       {
//         active: !this.state.active,
//       },
//       // after state has been updated,
//       () => {
//         // set the class in state for the navbar accordingly
//         this.state.active
//           ? this.setState({
//               navBarActiveClass: "is-active",
//             })
//           : this.setState({
//               navBarActiveClass: "",
//             });
//       }
//     );
//   }

//   render() {
//     return (
//       <nav
//         className="navbar is-transparent"
//         role="navigation"
//         aria-label="main-navigation"
//       >
//         <div className="container">
//           <div className="navbar-brand">
//             {/* Hamburger menu */}
//             <div
//               className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//               data-target="navMenu"
//               role="menuitem"
//               tabIndex={0}
//               onKeyPress={() => this.toggleHamburger()}
//               onClick={() => this.toggleHamburger()}
//             >
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//           <div
//             id="navMenu"
//             className={`navbar-menu ${this.state.navBarActiveClass}`}
//           >
//             <div className="navbar-start has-text-centered">
//               <Link className="navbar-item" to="/about">
//                 About
//               </Link>
//               <Link className="navbar-item" to="/products">
//                 Products
//               </Link>
//               <Link className="navbar-item" to="/blog">
//                 Blog
//               </Link>
//               <Link className="navbar-item" to="/contact">
//                 Contact
//               </Link>
//               <Link className="navbar-item" to="/contact/examples">
//                 Form Examples
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// };

const sections = [
  "Our Love Story",
  "Wedding Details",
  "Ceremony",
  "Reception",
  "Wedding Itinerary ",
  "RSVP",
  "Gifts",
  "Getting there and transport",
  "Accommodation",
  "What to bring",
  "More Details",
];

const toLink = (section) => section.replaceAll(" ", "-").toLowerCase();

const Navbar = () => (
  <div id="nav">
    <nav className="border">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        {sections.map((section) => (
          <li key={section}>
            <a href={`/${toLink(section)}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navbar;
