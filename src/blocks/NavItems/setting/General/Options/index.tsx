import React, { useState } from 'react';
import styled from 'styled-components';
import BottomSheet from 'components/common/BottomSheet';
import { ElementOption } from 'models';
import Layout from 'components/common/Layouts/BaseLayout';
import AngleDownBold from 'svgs/AngleDownBold';

type AppProps = {
  items: ElementOption[];
  defaultValue?: ElementOption;
  onChange: (value: any) => void;
};

const Container = styled.div`
  min-width: 134px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;

const Options = ({ items, onChange, defaultValue }: AppProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const height =
    items.length > 0 ? (items.length + 1) * 44 + 22 : 100;

  const onChangeOption = (value: ElementOption) => {
    onChange(value);
    onClose();
  };

  return (
    <div>
      <Container onClick={onOpen}>
        {defaultValue && defaultValue.label}
        <AngleDownBold />
      </Container>
      <BottomSheet isOpen={open} setOpen={setOpen} height={height}>
        <Layout>
          {items.map((item) => (
            <div
              key={item.value}
              className="py-[10px]"
              onClick={() => onChangeOption(item)}
            >
              {item.label}
            </div>
          ))}
        </Layout>
      </BottomSheet>
    </div>
  );
};

Options.defaultProps = {
  defaultValue: null,
};

export default Options;
