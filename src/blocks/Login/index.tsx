import React from 'react';
import { Form, Field } from 'react-final-form';

import Logo from 'components/Logo';
import Layout from 'components/common/Layouts/BaseLayout';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import ButtonContainer from 'components/common/ButtonContainer';

type FormValues = {
  password: string;
};

const Login = () => {
  const onSubmit = async (values: FormValues) => {};

  return (
    <Layout>
      <Logo className="flex justify-center mt-[56px]" />

      <h1 className="text-2xl text-center mt-[20px] font-bold">
        Welcome back!
      </h1>
      <p className="text-sm text-primary-dark text-center mt-[6px]">
        Log back into your future in finance
      </p>

      <Form
        onSubmit={onSubmit}
        render={({
          submitError,
          handleSubmit,
          submitting,
          pristine,
        }) => (
          <form
            className="mt-[26px]"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Field name="password">
              {({ input, meta }) => (
                <Input
                  type="password"
                  placeholder="Password"
                  size="medium"
                  variant="password"
                  input={input}
                  meta={meta}
                  autoFocus
                />
              )}
            </Field>

            {submitError && (
              <div className="error">{submitError}</div>
            )}

            <ButtonContainer fixedBottom>
              <Button
                type="submit"
                variant="primary"
                size="medium"
                content="Unlock"
                className="mb-8"
                disabled={pristine || submitting}
              />
            </ButtonContainer>
          </form>
        )}
      />
    </Layout>
  );
};

export default Login;
