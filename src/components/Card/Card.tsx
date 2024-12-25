import { StaticImageData } from "next/image";
import styles from "./Card.module.css";

interface ICard {
  title: string;
  miniDescription: string;
  imageUrl: string | StaticImageData;
}

const Card: React.FC<ICard> = (props: ICard) => {
  const { title, miniDescription, imageUrl } = props;
  return (
    <div
      className={`${styles.container}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(${imageUrl})`,
      }}
    >
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.miniDescription}>{miniDescription}</p>
      </div>
    </div>
  );
};

export default Card;
