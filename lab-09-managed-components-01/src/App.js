import React from "react";
// import Form from "./Form";
import FormRedux from "./FormRedux"
import Welcome from "./Welcome"
class App extends React.Component {

  state = {
    'username': '',
    'email': ''               
  }

  updateFormField = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <FormRedux 
          username={this.state.username}
          email={this.state.email}
          updateFunc={this.updateFormField}
        />
        <Welcome
          username={this.state.username}
          email={this.state.email}
        />
      </div>
    );
  }

}

export default App;
