import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js'; 
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
// import Creator from '../Creator/Creator';

class List extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.string,
    }
    static defaultProps = {
      description: settings.defaultListDescription,
    }
    
    render() {
      const {title, image, description, columns} = this.props;
      return (
        <section className={styles.component}>
          <h2 className={styles.subtitle}><Hero titleText={title} image={image} /></h2>
        
          <div className={styles.description}>
            {description}
          </div>
        
          {<div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          /* 
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          </div> */}
        </section>
      );
    }
}

export default List;
