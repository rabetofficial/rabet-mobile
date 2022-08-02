import * as React from 'react';
import styled from 'styled-components';
import Sheet from 'react-modal-sheet';

const BoxList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
  overflow: auto;
`;

const Box = styled.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;

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

const Scrollable = () => {
  const [isOpen, setOpen] = React.useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <button onClick={open}>Scrollable Bottom Sheet</button>

      <CustomSheet
        rootId="root"
        snapPoints={[400, 0]}
        isOpen={isOpen}
        onClose={close}
      >
        <Sheet.Container>
          <Sheet.Header />

          <Sheet.Content>
            <BoxList>
              {Array.from({ length: 2 })
                .fill(1)
                .map((_, i) => (
                  <Box key={i}>{i}</Box>
                ))}
            </BoxList>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop onTap={close} />
      </CustomSheet>
    </>
  );
};

export default Scrollable;
