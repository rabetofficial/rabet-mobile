import React from 'react';
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

import * as S from './styles';

const Contact = () => {
  const router = useRouter();
  const contacts = useTypedSelector((store) => store.contacts);

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

  const handleDelete = (contact: ContactType) => {
    deleteContactAction(contact);
    router.push(RouteName.ContactsSetting);
  };

  return (
    <div>
      <div className="content">
        <Button
          type="file"
          variant="outlined"
          size="medium"
          content="Add Contact"
          startIcon={<Plus />}
          onClick={handleOpenAddContact}
          style={{
            borderRadius: '4px',
            marginTop: '13px',
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
                  <div>
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
                  <span
                    onClick={() => {
                      handleDelete(contact);
                    }}
                  >
                    <Multiply />
                  </span>
                </S.ActionIcons>
              </S.ContentContainer>
              {contacts.length !== index + 1 && <S.Hr />}
            </div>
          ))}
        </S.Container>
      </div>
    </div>
  );
};

export default Contact;
