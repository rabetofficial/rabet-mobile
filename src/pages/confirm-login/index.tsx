import React from 'react';
import { Form, Field } from 'react-final-form';

import Logo from 'components/Logo';
import Layout from 'components/common/Layouts/BaseLayout';
import Input from 'components/common/Input';
import Error from 'components/common/Error';
import Button from 'components/common/Button';
import ButtonContainer from 'components/common/ButtonContainer';

type FormValues = {
  password: string;
  confirm: string;
};

const ConfirmLogin = () => {
  const onSubmit = (values: FormValues) => {};

  const validateForm = (values: FormValues) => {};

  return (
    <Layout>
      <Logo className="flex justify-center mt-[56px]" />

      <Form
        onSubmit={onSubmit}
        validate={validateForm}
        render={({ submitError, handleSubmit, invalid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Field name="password">
              {({ input, meta }) => (
                <Input
                  type="password"
                  placeholder="Password"
                  size="medium"
                  variant="password"
                  className="!mt-[40px]"
                  input={input}
                  meta={meta}
                  autoFocus
                />
              )}
            </Field>

            <Field name="confirm">
              {({ input, meta }) => (
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  size="medium"
                  variant="password"
                  input={input}
                  meta={meta}
                  className="!mt-6"
                />
              )}
            </Field>

            {submitError && <Error>{submitError}</Error>}

            <ButtonContainer fixedBottom>
              <Button
                type="submit"
                variant="primary"
                size="medium"
                content="Continue"
                className="mb-8"
                disabled={invalid}
              />
            </ButtonContainer>
          </form>
        )}
      />
    </Layout>
  );
};

export default ConfirmLogin;
