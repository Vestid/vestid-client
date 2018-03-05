import { combineEpics } from 'redux-observable'
import homeEpics from '../containers/home/epics'
import loginEpics from '../containers/login/epics'
import seekingLoanEpics from '../containers/seekingLoan/epics'
import offeringLoanEpics from '../containers/offeringLoan/epics'

export default ($action, store) => (
    combineEpics(
      homeEpics,
      loginEpics,
      seekingLoanEpics,
      offeringLoanEpics
    )($action, store)
      .catch((error, stream) => {
          console.log('Uncaught error in root epic: ', error.stack);
          return stream;
      })
)