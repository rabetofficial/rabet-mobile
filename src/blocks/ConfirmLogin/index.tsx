import React from 'react';
import { useRouter } from 'next/router';
import { Form, Field } from 'react-final-form';

import Logo from 'components/Logo';
import RouteName from 'staticRes/routes';
import Input from 'components/common/Input';
import Error from 'components/common/Error';
import Button from 'components/common/Button';
import registerUserAction from 'actions/user/register';
import Layout from 'components/common/Layouts/BaseLayout';
import ButtonContainer from 'components/common/ButtonContainer';

type FormValues = {
  password: string;
  confirm: string;
};

const ConfirmLogin = () => {
  const router = useRouter();

  const onSubmit = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (values.password !== values.confirm) {
      errors.password = 'Passwords do not match.';
    }

    if (Object.keys(errors).length > 0) {
      return errors;
    }

    registerUserAction(values.password).then(() => {
      router.push(RouteName.AccountManager);
    });

    return {};
  };

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    const hasError = {
      password: false,
      confirm: false,
    };

    if (!values.password) {
      errors.password = '';
      hasError.password = true;
    } else if (values.password.length < 8) {
      hasError.password = true;
      errors.password = 'Password must be at least 8 characters.';
    }

    if (!values.confirm) {
      errors.confirm = '';
      hasError.confirm = true;
    } else if (values.confirm.length < 8) {
      hasError.confirm = true;
      errors.confirm =
        'Confirm password must be at least 8 characters.';
    }

    if (!hasError.password && !hasError.confirm) {
      if (values.password !== values.confirm) {
        errors.confirm = 'Passwords do not match.';
      }
    }

    return errors;
  };

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
