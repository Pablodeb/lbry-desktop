import { connect } from 'react-redux';
import {
  selectChannelIsBlocked,
  doToggleBlockChannel,
  doToast,
  makeSelectClaimIsMine,
  makeSelectShortUrlForUri,
} from 'lbry-redux';
import BlockButton from './view';

const select = (state, props) => ({
  channelIsBlocked: selectChannelIsBlocked(props.uri)(state),
  claimIsMine: makeSelectClaimIsMine(props.uri)(state),
  shortUrl: makeSelectShortUrlForUri(props.uri)(state),
});

export default connect(
  select,
  {
    toggleBlockChannel: doToggleBlockChannel,
    doToast,
  }
)(BlockButton);
