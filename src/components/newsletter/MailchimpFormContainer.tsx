import React from 'react';
import MailChimpSubscribe from "react-mailchimp-subscribe";
import NewsletterSignUp from './NewsletterSignUp';

const MailChimpFormContainer = () => {
  const postUrl = `https://gmail.us9.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div>
      <MailChimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <NewsletterSignUp
            subscribe={subscribe}
            status={status}
            message={message}
          />
        )}
      />
    </div>
  );
}

export default MailChimpFormContainer;
