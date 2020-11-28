import {connect} from 'react-redux';
import Column from './Column';
import {getCardForList} from '../../redux/cardRedux';
import {createActionAddCard} from '../../redux/cardRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
