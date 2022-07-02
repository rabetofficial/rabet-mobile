import React from 'react';
import { StrKey } from 'stellar-sdk';
import { Form, Field } from 'react-final-form';

import Error from 'components/common/Error';
import Input from 'components/common/Input';
import ExitTitle from 'components/common/ExitTitle';
import Button from 'components/common/Button';
import addContactAction from 'actions/contacts/add';
import useTypedSelector from 'hooks/useTypedSelector';
import ButtonContainer from 'components/common/ButtonContainer';

import { ChildLabel, FirstItem } from '../styles';

type FormValues = {
  name: string;
  publicKey: string;
  memo?: string;
};



const CreateContact = () => {
  const [accounts, contacts] = useTypedSelector((store) => [
    store.accounts,
    store.contacts,
  ]);

  const validateForm = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (!values.name) {
      errors.name = '';
    } else {
      if (values.name.length > 50) {
        errors.name = 'Name cannot be more than 50 characters.';
      }
    }

    if (!values.publicKey) {
      errors.publicKey = '';
    } else {
      if (!StrKey.isValidEd25519PublicKey(values.publicKey)) {
        errors.publicKey = 'Address is invalid.';
      } else {
        const foundAccount = accounts.find(
          (account) => account.publicKey === values.publicKey,
        );

        if (foundAccount) {
          errors.publicKey =
            'You cannot add your own account as a contact.';
        } else {
          const foundContact = contacts.find(
            (contact) => contact.publicKey === values.publicKey,
          );

          if (foundContact) {
            errors.publicKey = 'Contact is duplicated.';
          }
        }
      }
    }

    if (values.memo && values.memo.length > 20) {
      errors.memo = 'Memo is too large.';
    }

    return errors;
  };

  const onSubmit = (values: FormValues) => {
    addContactAction(values);

    return {};
  };

  return (
    <>
      <ExitTitle title="Create contact" />
      <div className="content">
        <div>
          <Form
            onSubmit={onSubmit}
            validate={validateForm}
            render={({
              invalid,
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
                    <FirstItem>
                      <ChildLabel>Name</ChildLabel>
                      <Input
                        type="text"
                        placeholder="John"
                        size="medium"
                        input={input}
                        meta={meta}
                        autoFocus
                      />
                    </FirstItem>
                  )}
                </Field>

                <Field name="publicKey">
                  {({ input, meta }) => (
                    <div>
                      <ChildLabel>Address</ChildLabel>
                      <Input
                        type="text"
                        placeholder="G..."
                        size="medium"
                        input={input}
                        meta={meta}
                      />
                    </div>
                  )}
                </Field>

                <Field name="memo">
                  {({ input, meta }) => (
                    <div>
                      <ChildLabel>
                        Memo
                        <span className=" text-xs text-primary-dark">
                          (optional)
                        </span>
                      </ChildLabel>
                      <Input
                        type="text"
                        placeholder="My friend"
                        size="medium"
                        input={input}
                        meta={meta}
                      />
                    </div>
                  )}
                </Field>

                {submitError && <Error>{submitError}</Error>}

                <ButtonContainer mb={39} fixedBottom>
                  <Button
                    type="submit"
                    variant="primary"
                    size="medium"
                    content="Add"
                    disabled={pristine || submitting || invalid}
                  />
                </ButtonContainer>
              </form>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default CreateContact;
