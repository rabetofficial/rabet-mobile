import React from 'react';
import { StrKey } from 'stellar-sdk';
import { Form, Field } from 'react-final-form';

import Input from 'components/common/Input';
import { Contact } from 'reducers/contacts';
import ExitTitle from 'components/common/ExitTitle';
import Button from 'components/common/Button';
import useTypedSelector from 'hooks/useTypedSelector';
import editContactAction from 'actions/contacts/edit';
import ButtonContainer from 'components/common/ButtonContainer';
import Error from 'components/common/Error';

import { ChildLabel, FirstItem } from '../styles';

type EditContactType = {
  contact: Contact;
};

const EditContact = ({ contact }: EditContactType) => {
  const [accounts, contacts] = useTypedSelector((store) => [
    store.accounts,
    store.contacts,
  ]);

  const validateForm = (values: Contact) => {
    const errors: Partial<Contact> = {};

    if (!values.name) {
      errors.name = '';
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
          const otherContacts = contacts.filter(
            (aContact) => aContact.publicKey !== contact.publicKey,
          );

          const foundContact = otherContacts.find(
            (aContact) => aContact.publicKey === values.publicKey,
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

  const onSubmit = (values: Contact) => {
    editContactAction(contact, values);

    return {};
  };

  return (
    <>
      <ExitTitle title="Edit contact" />
      <div className="content">
        <div>
          <Form
            validate={validateForm}
            onSubmit={onSubmit}
            initialValues={{
              name: contact.name,
              publicKey: contact.publicKey,
              memo: contact.memo || '',
            }}
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
                    content="Save"
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

export default EditContact;
