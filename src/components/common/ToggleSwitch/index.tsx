import React from 'react';
import Switch from 'react-switch';
import styled from 'styled-components';

const Container = styled.div`
  .react-switch-handle {
    height: 27px !important;
    width: 27px !important;
    right: 1px !important;
    top: 2px !important;
    left: 1px !important;
  }
`;

type AppProps = {
  handleChange: (value: boolean) => void;
  checked: boolean;
  disabled?: boolean;
};

const ToggleSwitch = ({
  handleChange,
  checked,
  disabled,
}: AppProps) => (
  <Container>
    <Switch
      disabled={disabled}
      onChange={handleChange}
      checked={checked}
      checkedIcon={false}
      uncheckedIcon={false}
      boxShadow="0 0 0 0"
      activeBoxShadow="0 0 0 0"
      height={31}
      width={51}
      offColor="#d9d9d9"
      onColor="#000000"
      offHandleColor="#ffffff"
      onHandleColor="#ffffff"
    />
  </Container>
);

ToggleSwitch.defaultProps = {
  disabled: false,
};

export default ToggleSwitch;
