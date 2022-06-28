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

const EditName = () => {
  const onSubmit = () => {};
  return (
    <>
      <ExtTitle title="Edit name" />

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
                  <>
                    <label className="label-primary">
                      Wallet name
                    </label>
                    <Input
                      type="text"
                      size="medium"
                      placeholder="John"
                      input={input}
                      meta={meta}
                      autoFocus
                    />
                  </>
                )}
              </Field>

              {submitError && <Error>{submitError}</Error>}

              <ButtonContainer fixedBottom mb={32}>
                <Button
                  type="submit"
                  variant="primary"
                  size="medium"
                  content="Done"
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

export default EditName;
