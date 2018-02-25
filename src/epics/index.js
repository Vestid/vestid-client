import { combineEpics } from 'redux-observable'
import homeEpics from '../containers/home/epics'
import loginEpics from '../containers/login/epics'

export default ($action, store) => (
    combineEpics(
      homeEpics,
      loginEpics
    )($action, store)
      .catch((error, stream) => {
          console.log('Uncaught error in root epic: ', error.stack);
          return stream;
      })
)