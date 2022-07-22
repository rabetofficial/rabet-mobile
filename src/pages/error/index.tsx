import ErrorCode from 'blocks/Error';

export const getServerSideProps = () => ({
  props: {
    logged: 2,
    registered: 2,
    account: 2,
  },
});

export default ErrorCode;
