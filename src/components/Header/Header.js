import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import style from './Header.scss';
import Container from '../Container/Container';
import Icon from './Icon';

class Header extends React.Component {


  render(){
    return (
      <header className={style.component}>
        <Container>
          <div className={style.wrapper}>
            <Link className={style.logo} to='/'> 
              <Icon />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink> 
            </nav>
          </div> 
        </Container>
      </header>
    );
  }
} 

export default Header;