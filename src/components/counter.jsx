// import React, { Component } from "react";
// class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   badgedet() {
//     let classes = "badge badge-";
//     this.state.count === 0 ? (classes += "warning") : (classes += "primary");
//     return classes;
//   }
//   increment=()=>{
//     console.log(state.count)
//   }
//   inc = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   // dec = () => {
//   //   this.setState({ count: this.state.count - 1 });
//   // };
//   render() {
//     return (
//       <div>
//         <span className={this.badgedet()}>{this.printCount()}</span>
//         <button
//           className="btn btn-secondary btn-sm m-2"
//           onClick={() => this.inc()}
//         >
//           +
//         </button>
//         <button
//           className="btn btn-danger btn-sm m-2"
//           onClick={() => {
//             this.setState({ count: this.state.count - 1 });
//           }}
//         >
//           -
//         </button>
//         <button
//           className="btn btn-danger btn-sm m-2"
//           onClick={() => this.props.onDelete(this.props.id)}
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }
//   printCount() {
//     return this.state.count === 0 ? "zero" : this.state.count;
//   }
// }

// export default Counter;
