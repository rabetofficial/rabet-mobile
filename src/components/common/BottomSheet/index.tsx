import * as React from 'react';
import styled from 'styled-components';
import Sheet from 'react-modal-sheet';

type AppProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  height: number;
  isDark?: boolean;
};

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.24) !important;
  }

  .react-modal-sheet-container {
    box-shadow: none !important;
    border-radius: 0 !important;
  }

  .react-modal-sheet-drag-indicator {
    height: 6px !important;
    background-color: #f3f3f3 !important;
    width: 40px !important;
  }
`;

const BoxList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Bottomsheet = ({
  children,
  isOpen,
  height,
  setOpen,
  isDark,
}: AppProps) => {
  const close = () => setOpen(false);

  return (
    <>
      <CustomSheet
        initialSnap={0}
        snapPoints={[height, 0]}
        isOpen={isOpen}
        onClose={close}
      >
        <Sheet.Container>
          {isDark ? <div className="h-[40px]" /> : <Sheet.Header />}

          <Sheet.Content>
            <BoxList>{children}</BoxList>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={close} />
      </CustomSheet>
    </>
  );
};

Bottomsheet.defaultProps = {
  isDark: false,
};

export default Bottomsheet;
