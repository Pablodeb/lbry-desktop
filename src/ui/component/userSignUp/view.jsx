// @flow
import type { Node } from 'react';
import React, { useState, useEffect } from 'react';
import Button from 'component/button';
import { FormField } from 'component/common/form';
import UserEmailNew from 'component/userEmailNew';
import UserEmailVerify from 'component/userEmailVerify';

type Props = {
  user: ?User,
  email: ?string,
};

function UserSignUp(props: Props) {
  const { email, user } = props;
  const verifiedEmail = user && email && user.has_verified_email;
  const rewardApproved = user && user.is_reward_approved;

  return (
    <section>
      <h1 className="card__title--large">{__('Get Rockin')}</h1>
      {!email && <UserEmailNew />}
      {email && !verifiedEmail && <UserEmailVerify />}
    </section>
  );
}

export default UserSignUp;
