import React, { createContext, Component } from "react";

export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    disOpen: false,
  };
  toggledisOpen = () => {
    this.setState({
      disOpen: !this.state.disOpen,
    });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggledisOpen: this.toggledisOpen }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
