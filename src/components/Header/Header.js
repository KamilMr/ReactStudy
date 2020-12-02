import React from 'react';
import {Link} from 'react-router-dom';
import style from './Header.scss';
import Container from '../Container/Container';

class Header extends React.Component {


  render(){
    return (
      <header className={style.component}>
        <Container>
          <div className={style.wrapper}>
            <Link className={style.logo}>
                
            </Link>
          </div>
        </Container>
      </header>
    );
  }
} 

export default Header;