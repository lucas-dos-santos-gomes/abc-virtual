import PropTypes from 'prop-types';
import Image from 'next/image';
import { Card, Title, Price, Content } from './style';
import styles from './style.module.css';

const SubscriptionCard = ({ title, price, imgSrc, content }) => {
  return (
    <Card className={styles.card}>
      <Image src={imgSrc} alt={`${title} image`} width={200} height={200} />
      <Title>{title}</Title>
      <Price>{price} por mês</Price>
      <Content>{content}</Content>
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
