import React from 'react';
import { Form, Field } from 'react-final-form';

import Logo from 'components/Logo';
import Layout from 'components/common/Layouts/BaseLayout';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

type FormValues = {
  password: string;
};

const Login = () => {
  const onSubmit = async (values: FormValues) => {};

  return (
    <Layout isDashboard={false}>
      <Logo />

      <h1 className="text-2xl text-center mt-4 font-bold">
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
            className="mt-[40px]"
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

            <Button
              type="submit"
              variant="primary"
              size="medium"
              content="Unlock"
              className="mt-8"
              disabled={pristine || submitting}
            />
          </form>
        )}
      />
    </Layout>
  );
};

export default Login;
