import React from 'react';
import { Form, Field } from 'react-final-form';

import Input from 'components/common/Input';
import Error from 'components/common/Error';
import Button from 'components/common/Button';
import ButtonContainer from 'components/common/ButtonContainer';

export type FormValues = {
  key: string;
};

type PrivateKeyType = {
  onSubmit: (v: FormValues) => Promise<Partial<FormValues>>;
};

const PrivateKey = ({ onSubmit }: PrivateKeyType) => {
  const validateForm = (values: FormValues) => {
    const errors = {} as FormValues;

    if (!values.key) {
      errors.key = '';
    }

    return errors;
  };

  return (
    <div className="content">
      <Form
        onSubmit={onSubmit}
        validate={validateForm}
        render={({ submitError, handleSubmit, pristine }) => (
          <form
            className="form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Field name="key">
              {({ input, meta }) => (
                <div className="mt-[7px]">
                  <div className="label-primary">Private key</div>
                  <Input
                    type="password"
                    size="medium"
                    variant="password"
                    placeholder="S..."
                    input={input}
                    meta={meta}
                  />
                </div>
              )}
            </Field>

            {submitError && <Error>{submitError}</Error>}

            <ButtonContainer fixedBottom mb={39}>
              <Button
                type="submit"
                variant="primary"
                size="medium"
                content="Import"
                disabled={pristine}
              />
            </ButtonContainer>
          </form>
        )}
      />
    </div>
  );
};

export default PrivateKey;
