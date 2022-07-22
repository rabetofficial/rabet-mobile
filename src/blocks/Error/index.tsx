import { useRouter } from 'next/router';

const Error = () => {
  const router = useRouter();

  const { message } = router.query;

  return (
    <div>
      <p>Error!!!!!</p>
      <p>{message || ''}</p>
    </div>
  );
};

export default Error;
