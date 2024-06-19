import PropTypes from 'prop-types';
import Image from 'next/image';
import { Card, Title, Price } from './style';
import Button from '@/components/Button/style';

const SubscriptionCard = ({ title, price, imgSrc, content }) => {
  return (
    <Card>
      <div>
        <Title>{title}</Title>
        <Price>{price} por mês</Price>
      </div>
      <Image className='img' src={imgSrc} alt={`${title} image`} width={200} height={200} />
      <Button color="white" bgColor="#DE5151" size="large">
        Vamos começar?
      </Button>
    </Card>
  );
};

SubscriptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SubscriptionCard;
