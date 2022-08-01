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
  margin-left: auto;

  svg {
    width: 10px;
    height: auto;

    path {
      fill: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

const Items = styled.div`
  .item:not(:last-child) {
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.primary.lighter};
  }
`;

const Options = ({ items, onChange, defaultValue }: AppProps) => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const height =
    items.length > 0 ? (items.length + 1) * 54 + 22 : 100;

  const onChangeOption = (value: ElementOption) => {
    onChange(value);
    onClose();
  };

  return (
    <>
      <Container onClick={onOpen}>
        {defaultValue && defaultValue.label}
        <AngleDownBold />
      </Container>
      <BottomSheet isOpen={open} setOpen={setOpen} height={height}>
        <Layout>
          <Items>
            {items.map((item) => (
              <div
                key={item.value}
                className="item py-[15px]"
                onClick={() => onChangeOption(item)}
              >
                {item.label}
              </div>
            ))}
          </Items>
        </Layout>
      </BottomSheet>
    </>
  );
};

Options.defaultProps = {
  defaultValue: null,
};

export default Options;
