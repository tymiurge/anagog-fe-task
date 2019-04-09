import AppWizard from './AppWizard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addApp } from './../../store/actions'


const dMapping = (dispatch: any) => ({
  onSubmit: (name: string) => dispatch(addApp(name))
})

export default connect(null, dMapping)(withRouter(AppWizard));
