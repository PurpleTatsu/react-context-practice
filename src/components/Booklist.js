import React, { Component } from 'react';
import { ThemeContext } from "../contexts/themeContext";


class Booklist extends Component {
  static contextType = ThemeContext

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list" style={{ background: theme.bg , color: theme.syntax }}>
        <ul>
          <li style={{ background: theme.ui }}>neverwhere</li>
          <li style={{ background: theme.ui }}>good omens</li>
          <li style={{ background: theme.ui }}>men at arms</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;