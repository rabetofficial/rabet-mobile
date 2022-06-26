import React from 'react';
import { Form, Field } from 'react-final-form';

import Input from 'components/common/Input';
import Error from 'components/common/Error';
import Button from 'components/common/Button';
import ExtTitle from 'components/common/ExitTitle';
import Layout from 'components/common/Layouts/BaseLayout';
import ButtonContainer from 'components/common/ButtonContainer';

export type FormValues = {
  key: string;
};

const PrivateKey = () => {
  const onSubmit = () => {};
  return (
    <>
      <ExtTitle title="Show private key" />

      <Layout className="mt-6">
        <Form
          onSubmit={onSubmit}
          render={({
            pristine,
            submitting,
            submitError,
            handleSubmit,
          }) => (
            <form
              className="form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <Field name="key">
                {({ input, meta }) => (
                  <div>
                    <label className="label-primary">Password</label>
                    <Input
                      type="password"
                      size="medium"
                      variant="password"
                      placeholder="Enter your password"
                      input={input}
                      meta={meta}
                      autoFocus
                    />
                  </div>
                )}
              </Field>

              {submitError && <Error>{submitError}</Error>}

              <ButtonContainer fixedBottom mb={32}>
                <Button
                  type="submit"
                  variant="primary"
                  size="medium"
                  content="Show"
                  disabled={pristine || submitting}
                />
              </ButtonContainer>
            </form>
          )}
        />
      </Layout>
    </>
  );
};

export default PrivateKey;
