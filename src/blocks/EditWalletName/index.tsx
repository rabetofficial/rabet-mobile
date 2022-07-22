import React from 'react';
import { Form, Field } from 'react-final-form';

import Input from 'components/common/Input';
import Error from 'components/common/Error';
import Button from 'components/common/Button';
import Layout from 'components/common/Layouts/BaseLayout';
import changeNameAction from 'actions/accounts/changeName';
import ButtonContainer from 'components/common/ButtonContainer';
import useActiveAccount from 'hooks/useActiveAccount';
import RouteName from 'staticRes/routes';
import { useRouter } from 'next/router';

export type FormValues = {
  name: string;
};

const EditName = () => {
  const router = useRouter();
  const account = useActiveAccount();

  const onSubmit = async (values: FormValues) => {
    await changeNameAction(values.name, account.publicKey);

    router.push(RouteName.Home);
  };

  return (
    <Layout className="mt-6">
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: account.name,
        }}
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
            <Field name="name">
              {({ input, meta }) => (
                <>
                  <label className="label-primary">Wallet name</label>
                  <Input
                    type="text"
                    size="medium"
                    placeholder="John"
                    input={input}
                    meta={meta}
                  />
                </>
              )}
            </Field>

            {submitError && <Error>{submitError}</Error>}

            <ButtonContainer fixedBottom mb={39}>
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
  );
};

export default EditName;
