import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList} from '../../redux/columnsRedux';
import {createActionAddColumn} from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  /* Ta ostatnia różnica wynika z tego, że props.match zawiera informacje przekazywane przez Route, zawierające m.in. adres strony i parametry w nim zawarte – takie jak :id. */
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};



const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
