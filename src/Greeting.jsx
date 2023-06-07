import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.value);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      {greeting}
    </div>
  );
};

export default Greeting;
