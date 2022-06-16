import { useDropzone } from 'react-dropzone';
import { Form, Field } from 'react-final-form';
import React, { useState, useCallback } from 'react';

import { decrypt } from 'helpers/crypto';
import Download from 'svgs/Download';
import Error from 'components/common/Error';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import ButtonContainer from 'components/common/ButtonContainer';
import addBackupAccountsAction from 'actions/accounts/addBackup';

type FormValues = {
  key: string;
};

type ImportBackupFileType = {
  onSubmit: () => void;
};

const ImportBackupFile = ({ onSubmit }: ImportBackupFileType) => {
  const [fileContent, setFileContent] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();

    reader.onabort = () => {};
    reader.onerror = () => {};
    reader.onload = () => {
      const binaryStr = reader.result;
      const enc = new TextDecoder('utf-8');
      const text = enc.decode(binaryStr);

      setFileContent(text);
    };
    reader.readAsArrayBuffer(file);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'text/plain',
    maxFiles: 1,
  });

  const handleSubmitFunc = async (values: FormValues) => {
    if (!fileContent) {
      return {
        key: 'Uploaded file has no content',
      };
    }

    let data;

    try {
      data = JSON.parse(decrypt(values.key, fileContent));
    } catch (e) {
      return {
        key: 'Could not decrypt the specified file.',
      };
    }

    await addBackupAccountsAction(data);

    onSubmit();

    return {};
  };

  const validateForm = (values: FormValues) => {
    const errors = {} as FormValues;

    if (!values.key) {
      errors.key = '';
    } else if (values.key.length < 10) {
      errors.key = 'Invalid key';
    }

    return errors;
  };

  const isUploaded = acceptedFiles && acceptedFiles.length;

  return (
    <div className="content">
      <div {...getRootProps()} className="mt-3">
        <input {...getInputProps()} />
        <Button
          type="file"
          variant="outlined"
          size="medium"
          content={
            isUploaded ? acceptedFiles[0].name : 'Select backup file'
          }
          startIcon={isUploaded ? '' : <Download />}
          style={{
            borderRadius: '4px',
            marginTop: '5px',
          }}
        />
      </div>
      <Form
        onSubmit={handleSubmitFunc}
        validate={validateForm}
        render={({ submitError, handleSubmit, pristine }) => (
          <form
            className="form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {isUploaded ? (
              <Field name="key">
                {({ input, meta }) => (
                  <div className="mt-6">
                    <label className="label-primary">Key</label>
                    <Input
                      type="text"
                      size="medium"
                      placeholder="Enter your key"
                      input={input}
                      meta={meta}
                      autoFocus
                    />
                  </div>
                )}
              </Field>
            ) : (
              ''
            )}

            {submitError && <Error>{submitError}</Error>}

            <ButtonContainer fixedBottom mb={32}>
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

export default ImportBackupFile;
