import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Card from '../Card/Card.js';

class Column extends React.Component {


    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.string,
      addCard: PropTypes.func,
    }

    render(){
      const {title, icon, cards, addCard} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}><Icon name={icon} /></span>
            {title}
          </h3>
          {console.log(this.props)}
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </div>

        </section>

      );
    }
}

export default Column;