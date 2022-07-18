import React from 'react';
import { Form, Field } from 'react-final-form';

import Input from 'components/common/Input';
import Error from 'components/common/Error';
import Button from 'components/common/Button';
import ButtonContainer from 'components/common/ButtonContainer';
import changeMasterPassword from 'actions/options/changeMasterPassword';

import { useRouter } from 'next/router';
import RouteName from 'staticRes/routes';
import * as S from './styles';

export type FormValues = {
  oldPassword: string;
  newPassword: string;
  confirm: string;
};

const ChangePassword = () => {
  const router = useRouter();

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    const hasError = {
      oldPassword: false,
      newPassword: false,
      confirm: false,
    };

    if (!values.oldPassword) {
      errors.oldPassword = '';
      hasError.oldPassword = true;
    }

    if (!values.newPassword) {
      errors.newPassword = '';
      hasError.newPassword = true;
    } else if (values.newPassword.length < 8) {
      hasError.newPassword = true;
      errors.newPassword =
        'New password must be at least 8 characters.';
    }

    if (!hasError.oldPassword && !hasError.newPassword) {
      if (!values.confirm) {
        errors.confirm = '';
      } else {
        if (values.newPassword !== values.confirm) {
          errors.confirm = 'Passwords do not match.';
        }
      }
    }

    return errors;
  };

  const onSubmit = async (values: FormValues) => {
    const result = await changeMasterPassword(values);

    if (result === 'wrong_password') {
      return {
        oldPassword: 'Password is incorrect.',
      };
    }

    if (result === 'failed') {
      return {
        newPassword: 'Could not change password. Try again.',
      };
    }

    router.push({
      pathname: RouteName.Home,
      query: {
        menu: 4,
      },
    });

    return {};
  };

  return (
    <div>
      <div className="content">
        <Form
          onSubmit={onSubmit}
          validate={validateForm}
          render={({
            pristine,
            submitting,
            submitError,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} autoComplete="off">
              <Field name="oldPassword">
                {({ input, meta }) => (
                  <div style={{ marginBottom: '32px' }}>
                    <S.Label>Old password</S.Label>
                    <Input
                      type="password"
                      placeholder="Enter old password"
                      size="medium"
                      variant="password"
                      input={input}
                      meta={meta}
                    />
                  </div>
                )}
              </Field>

              <Field name="newPassword">
                {({ input, meta }) => (
                  <div style={{ marginBottom: '24px' }}>
                    <S.Label>New password</S.Label>
                    <Input
                      type="password"
                      placeholder="Enter new password"
                      size="medium"
                      variant="password"
                      input={input}
                      meta={meta}
                    />
                  </div>
                )}
              </Field>

              <Field name="confirm">
                {({ input, meta }) => (
                  <>
                    <S.Label>Confirm new password</S.Label>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      size="medium"
                      variant="password"
                      input={input}
                      meta={meta}
                    />
                  </>
                )}
              </Field>

              {submitError && <Error>{submitError}</Error>}

              <ButtonContainer mb={39} fixedBottom>
                <Button
                  type="submit"
                  variant="primary"
                  size="medium"
                  content="Change"
                  disabled={submitting || pristine}
                />
              </ButtonContainer>
            </form>
          )}
        />
      </div>
    </div>
  );
};
ChangePassword.defaultProps = { needTitle: true };

export default ChangePassword;
