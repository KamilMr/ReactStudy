import shortid from 'shortid';

export const getCardForList = ({cards}, columnId) => 
  cards.filter(card => card.columnId == columnId);

/* nowy selektor, wybierający karty ze wszystkich list, z uwzględnieniem wyszukiwanej frazy. */
export const getCardFromAllList = ({cards}, id) => cards.filter(card => new RegExp(id, 'i').test(card.title));



const reducerName = 'cards';

const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_CARD = createActionName ('ADD_CARD');

export const createActionAddCard = payload => ({
  payload: { ...payload, id: shortid.generate()},
  type: ADD_CARD });

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return[...state, action.payload];
    default:
      return state;
  }
}