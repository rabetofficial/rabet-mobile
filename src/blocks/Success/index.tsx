import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();

  const { message } = router.query;

  return (
    <div>
      <p>Successful!!!!!</p>
      <p>{message || ''}</p>
    </div>
  );
};

export default Success;
