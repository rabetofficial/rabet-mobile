import { useRouter } from 'next/router';

const Success = () => {
  const router = useRouter();

  const { message } = router.query;

  console.log(`Received message: ${message}`);

  return (
    <div>
      <p>Successful!!!!!</p>
      <p>{message || ''}</p>
    </div>
  );
};

export default Success;
