import {connect} from 'react-redux';
import {
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';
import SearchResult from '../SearchResult/SearchResult';
import { getCardFromAllList } from '../../redux/cardRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardFromAllList(state, props.match.params.id)});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
