import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Card from '../Card/Card.js';
import Container from '../Container/Container';

class SearchResult extends React.Component {


    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.string,
    }

    render(){
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <Container>
            <h3 className={styles.title}>
              <span className={styles.icon}><Icon name={icon} /></span>
              {title}
            </h3>
            <div>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
          </Container>
        </section>

      );
    }
}

export default SearchResult;