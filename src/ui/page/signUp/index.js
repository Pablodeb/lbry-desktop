import { connect } from 'react-redux';
import { selectEmailToVerify, selectUser } from 'lbryinc';
import SignUpPage from './view';

const select = state => ({
  email: selectEmailToVerify(state),
  user: selectUser(state),
});

export default connect(
  select,
  null
)(SignUpPage);
