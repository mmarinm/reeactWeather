import React from "react";
import { Link, IndexLink } from "react-router";

export class Nav extends React.Component {

  onSearch = (e) => {
    e.preventDefault();
    const location = this.refs.location.value;
    const encodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.refs.location.value = "";
      window.location.hash = "/?location=" + encodedLocation;
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref='location' placeholder='Enter City Name'/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
