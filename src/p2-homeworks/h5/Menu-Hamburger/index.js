import React, { Component } from 'react';
import './style_hamburger.css';
import {NavLink} from "react-router-dom";
import s from "../pages/Heade.module.css";

export default class ExampleCss extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  handleClick() {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('is-nav-open')
  }

  render() {
    return (
      <div ref={this.wrapperRef} className="wrapper" >
        <div className="nav">
          <button className="nav__icon" type="menu-fold" onClick={() => this.handleClick()} />
          <div className="nav__body">
            <NavLink to={'/pre-junior'} href={'/pre-junior'} activeClassName={s.active} className={s.Jun}><b>Pre Junior</b> </NavLink>
            <NavLink to={'/junior'} href={'/junior'} activeClassName={s.active} className={s.Jun}><b>Junior</b> </NavLink>
            <NavLink to={'/junior-plus'} href={'/junior-plus'}  activeClassName={s.active} className={s.Jun }><b>Junior Plus</b> </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
