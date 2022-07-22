import SuccessCode from 'blocks/Success';

export const getServerSideProps = () => ({
  props: {
    logged: 2,
    registered: 2,
    account: 2,
  },
});

export default SuccessCode;
