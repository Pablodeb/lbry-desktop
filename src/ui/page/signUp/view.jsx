// @flow
import React from 'react';
import UserSignUp from 'component/userSignUp';
import Page from 'component/page';
import UserVerify from 'component/userVerify';

type Props = {
  user: ?User,
  email: ?string,
};

export default function SignUpPage(props: Props) {
  const { user, email } = props;
  const hasVerifiedEmail = user && user.has_verified_email;
  const rewardsApproved = user && user.is_reward_approved;

  return (
    <Page fullscreen className="main--auth-page">
      {!hasVerifiedEmail ? (
        <div className="columns">
          <UserSignUp />
          <div style={{ width: '100%', height: '20rem', borderRadius: 20, backgroundColor: '#ffc7e6' }} />
        </div>
      ) : (
        <div>
          <h1 className="card__title--large">Channel stuff</h1>
          <p>either ask for channel name, or show the channel found in internal-apis</p>
        </div>
      )}
    </Page>
  );
}
