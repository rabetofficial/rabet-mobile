import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';

import Input from 'components/common/Input';
import Error from 'components/common/Error';
import Button from 'components/common/Button';
import Layout from 'components/common/Layouts/BaseLayout';
import ButtonContainer from 'components/common/ButtonContainer';
import Card from 'components/common/Card';
import currentActiveAccount from 'utils/activeAccount';
import CopyKey from 'components/common/CopyKey';
import useActiveAccount from 'hooks/useActiveAccount';
import showPrivateKey from 'actions/accounts/showPrivateKey';

const Msg = styled.div`
  font-size: 14px;
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.primary.dark};
  margin-top: 8px;

  span {
    color: black;
    font-weight: 500;
  }
`;

export type FormValues = {
  key: string;
};

const PrivateKey = () => {
  const account = useActiveAccount();
  const [show, setShow] = useState(false);

  const onSubmit = async (values: FormValues) => {
    const result = await showPrivateKey(values.key);

    if (result) {
      setShow(true);
    }
  };

  return (
    <Layout className="mt-6">
      <>
        {show ? (
          <>
            <Msg>
              <span>Do not lose it!</span> It cannot be recovered if
              you lose it. <br />
              <span>Do not share it!</span> Your funds will be stolen
              if you use this file on a phishing site.
            </Msg>
            <div className="label-primary mb-[6px] mt-[32px] font-medium">
              Private Key
            </div>

            <Card type="primary" className="shadow-transparent">
              <CopyKey keyValue={account.privateKey} />
            </Card>
          </>
        ) : (
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
                        Password
                      </label>
                      <Input
                        type="password"
                        size="medium"
                        variant="password"
                        placeholder="Enter your password"
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
                    content="Show"
                    disabled={pristine || submitting}
                  />
                </ButtonContainer>
              </form>
            )}
          />
        )}
      </>
    </Layout>
  );
};

export default PrivateKey;
