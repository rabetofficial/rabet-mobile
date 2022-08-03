import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';

import Plus from 'svgs/Plus';
import EditPen from 'svgs/EditPen';
import maxText from 'utils/maxText';
import shorter from 'utils/shorter';
import Multiply from 'svgs/Multiply';
import showName from 'helpers/showName';
import RouteName from 'staticRes/routes';
import Button from 'components/common/Button';
import CopyText from 'components/common/CopyText';
import useTypedSelector from 'hooks/useTypedSelector';
import deleteContactAction from 'actions/contacts/delete';
import { Contact as ContactType } from 'reducers/contacts';
import DeleteModal from 'components/DeleteModal';
import BottomSheet from 'components/common/BottomSheet';

import * as S from './styles';

const Contact = () => {
  const router = useRouter();
  const contacts = useTypedSelector((store) => store.contacts);
  const [open, setOpen] = useState(false);

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({} as any), []);

  const handleOpenAddContact = () => {
    router.push(RouteName.ContactActionSetting);
  };

  const handleOpenEditContact = (contact: ContactType) => {
    router.push({
      pathname: RouteName.ContactActionSetting,
      query: {
        contactPublicKey: contact.publicKey,
      },
    });
  };

  const onOpen = () => setOpen(true);

  const handleDelete = (contact: ContactType) => {
    deleteContactAction(contact);

    forceUpdate();
  };

  return (
    <div className="content">
      <Button
        type="file"
        variant="outlined"
        size="medium"
        content="Add Contact"
        startIcon={<Plus width="14px" height="14px" />}
        onClick={handleOpenAddContact}
        style={{
          borderRadius: '4px',
          marginTop: '26px',
        }}
      />

      <S.Container>
        {contacts.map((contact, index) => (
          <div key={`contact${contact.publicKey}`}>
            <S.ContentContainer>
              <div style={{ display: 'flex' }}>
                <div>
                  <S.IconContainer>
                    <S.IconExample>
                      {contact.name[0].toUpperCase()}
                    </S.IconExample>
                  </S.IconContainer>
                </div>

                <div>
                  <S.Name>
                    <span>{showName(contact.name)}</span>
                  </S.Name>

                  <CopyText
                    text={contact.publicKey}
                    custom={
                      <S.Address>
                        {shorter(contact.publicKey, 8)}
                      </S.Address>
                    }
                  />
                </div>
              </div>

              {contact.memo && (
                <div className="ml-4">
                  <S.Title>Memo</S.Title>
                  <S.Code>{maxText(contact.memo, 8) || '-'}</S.Code>
                </div>
              )}

              <S.ActionIcons>
                <span
                  style={{ marginRight: '15px' }}
                  onClick={() => {
                    handleOpenEditContact(contact);
                  }}
                >
                  <EditPen />
                </span>
                <span onClick={onOpen}>
                  <Multiply />
                </span>

                <BottomSheet
                  isOpen={open}
                  setOpen={setOpen}
                  height={250}
                >
                  <DeleteModal
                    onConfirm={() => {
                      handleDelete(contact);
                    }}
                    variant="medium"
                    title="Delete Contact"
                    message="Please note that by clicking on the Delete, your contact is deleted."
                  />
                </BottomSheet>
              </S.ActionIcons>
            </S.ContentContainer>
            {contacts.length !== index + 1 && <S.Hr />}
          </div>
        ))}
      </S.Container>
    </div>
  );
};

export default Contact;
