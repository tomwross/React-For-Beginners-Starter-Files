import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super(); // runs React.Component constructor first, required
  //   this.goToStore = this.goToStore.bind(this); // binds
  // }

  myInput = React.createRef();

  goToStore = event => {
    // event contains a lot of data and methods useful for controlling flow
    //   // 1. Stop the form from submitting
    event.preventDefault(); // stops the page from submitting
    //   // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    //   // 3. Change the page to /store/whatever-store-name
    this.props.history.push(`/store/${storeName}`);
  };

  // this method requires binding within constructor
  // goToStore(event) {
  //   // event contains a lot of data and methods useful for controlling flow
  //   // 1. Stop the form from submitting
  //   event.preventDefault(); // stops the page from submitting
  //   // 2. Get the text from that input
  //   console.log(this.myInput);
  //   // 3. Change the page to /store/whatever-store-name
  // }

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store!</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store --></button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
