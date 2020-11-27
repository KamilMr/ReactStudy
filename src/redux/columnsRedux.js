import shortid from 'shortid';

/* 

No dobrze, mamy w takim kreator nazw akcji, gdzie ustawiamy stałą reducerName. Za pomocą tego kreatora tworzymy nazwy typów akcji, np. ADD_COLUMN. Wreszcie, mamy kreator samej akcji, createActionAddColumn, który stworzy obiekt zawierający typ akcji oraz payload.

Funkcję createActionAddColumn wykorzystujemy w ListContainer, do stworzenia dispatchera akcji, który będzie zapisany w propsie addColumn.

Ten props, addColumn, wykorzystujemy w List.js, przekazując go do propsa action komponentu Creator.

W rezultacie Creator, po wykryciu kliknięcia w guzik OK, wykona funkcję z propsa action, która jest dispatcherem akcji ADD_COLUMN. A gdzie trafi ta wysłana akcja? Do magazynu, który obsłuży ją za pomocą reducera!

*/

// selectors: W tym przypadku jest to funkcja getColumnsForList, która wybiera kolumny z danej listy. Wykorzystujemy ją w ListContainer.js do przefiltrowania kolumn zawierających odpowiedni parametr listId.
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

// action name creator: Widzisz, że nasz stan jest podzielony na cztery właściwości: app, lists, columns, oraz cards. Wartością reducerName ma być jedna z nazw tych właściwości. W tym przypadku będziemy operować na kolumnach, więc ustawiliśmy wartość columns.
const reducerName = 'columns';
/* createActionName - Służy ona do zamiany nazwy akcji na dłuższy identyfikator, składający się z trzech członów. Na przykład, jeśli wykorzystamy tę funkcję z argumentem 'TEST', w rezultacie otrzymamy ciąg znaków 'app/columns/TEST'. */
const createActionName = name => `app/${reducerName}/${name}`;

// action types: W tej sekcji pliku definiujemy typy akcji, które będziemy wykorzystywać w operacjach na kolumnach. Przyjęło się, że nazwy akcji zapisuje się wielkimi literami, rozdzielając słowa podkreśleniami _. Nie jest to obowiązek, ale dobrze przyzwyczaić się do tego zapisu.
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators: Skoro mamy już zdefiniowaną nazwę akcji, potrzebujemy funkcji, która stworzy akcję. Czym jest akcja? Jest to obiekt, który zawiera dwa parametry – type określający typ akcji (jeden ze zdefiniowanych w poprzedniej sekcji), oraz payload, w którym znajdą się wszystkie dane niezbędne do wykonania tej akcji. listId oraz title – właśnie ten obiekt zostanie wykorzystany przez createActionAddColumn jako payload.
export const createActionAddColumn = payload =>  ({ 
  payload: { ...payload, id: shortid.generate() }, 
  type: ADD_COLUMN });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}