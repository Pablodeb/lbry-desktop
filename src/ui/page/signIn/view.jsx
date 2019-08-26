// @flow
import React from 'react';
import UserSignIn from 'component/userSignIn';
import Page from 'component/page';
// import UserVerify from 'component/userVerify';

type Props = {
  user: ?User,
  email: ?string,
};

export default function SignInPage(props: Props) {
  const { user, email } = props;
  const hasVerifiedEmail = user && user.has_verified_email;
  const rewardsApproved = user && user.is_reward_approved;

  return (
    <Page fullscreen className="main--auth-page">
      {!hasVerifiedEmail && (
        <div className="columns">
          <UserSignIn />
          <div style={{ width: '100%', height: '20rem', borderRadius: 20, backgroundColor: '#ffc7e6' }} />
        </div>
      )}
    </Page>
  );
}
