import React, {
  useState,
  useEffect,
  useRef,
  CSSProperties,
  ChangeEvent,
} from 'react';
import classNames from 'classnames';

import isEmpty from 'helpers/isEmpty';
import { InputVariant, InputSize } from 'models';
import InputBtn from 'components/common/Input/InputBtn';

import * as S from './styles';

type AppProps = {
  type: string;
  size: InputSize;
  variant?: InputVariant;
  invisible?: boolean;
  defaultValue?: string | number;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  icon?: string;
  style?: CSSProperties;
  className?: string;
  autoFocus?: boolean;
  setMax?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  styleType?: 'light' | 'dark';
  errorMsg?: string;
  [x: string]: any;
};

const Input = (props: AppProps) => {
  const {
    type,
    defaultValue,
    invisible,
    variant,
    size,
    disabled,
    placeholder,
    name,
    style,
    className,
    setMax,
    autoFocus,
    onChange,
    styleType,
    errorMsg,
    ...inputProps
  } = props;
  const inputRef = useRef<any>(null);
  const [visibleType, setVisibleType] = useState(type);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const toggleVisible = () =>
    setVisibleType(visibleType === 'password' ? 'text' : type);

  const inputProps2 = {};

  if (defaultValue) {
    inputProps2.defaultValue = defaultValue;
  }

  return (
    <div
      className="flex flex-col grow"
      style={{ display: invisible ? 'none' : 'block' }}
    >
      <S.Group
        className={classNames(className, size, variant)}
        style={style}
        styleType={styleType}
      >
        <input
          autoComplete="off"
          type={visibleType}
          className="input"
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          {...inputProps}
          {...inputProps2}
          ref={inputRef}
          onChange={onChange}
        />

        <InputBtn
          variant={variant}
          setMax={setMax}
          toggleVisible={toggleVisible}
          visibleType={visibleType}
        />
      </S.Group>

      {!isEmpty(errorMsg) ? (
        <S.ErrorMsg>{errorMsg}</S.ErrorMsg>
      ) : null}
    </div>
  );
};

Input.defaultProps = {
  defaultValue: '',
  variant: '',
  disabled: false,
  placeholder: '',
  name: '',
  icon: '',
  style: {},
  className: '',
  autoFocus: false,
  setMax: () => {},
  onChange: () => {},
  invisible: false,
  styleType: 'dark',
  errorMsg: '',
};

export default Input;
