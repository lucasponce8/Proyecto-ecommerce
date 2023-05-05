import { SliderPromotion } from '../../components/SliderPromotion/SliderPromotion';

import SaleBar from '../../components/SaleBar/SaleBar';
import styles from './Home.module.css';

export const Home = () => {

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContainer_slider}>
        <SliderPromotion />
      </div>
      <div>
        <SaleBar></SaleBar>
      </div>
    </div>
  );
};
