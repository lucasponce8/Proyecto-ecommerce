import styles from './CartItem.module.css';


export const CartItem = ({
  image,
  price,
  name,
  quantity,
  id,
  addToCart,
  deleteProductCart,
  stock,
  product,
}) => {

  console.log(`Stock de ${name} : ${stock}`);

  return (
    <li key={id} className={styles.item}>
      <img src={image} alt={name} className={styles.itemImg} />

      <div className={styles.itemName}>
        <strong>{name}</strong>
      </div>

      <div className={styles.itemPrice}>
        <strong>${price}</strong>
      </div>

      <footer>
        <small>Cantidad: {quantity}</small>
        {
          quantity +1  <= stock ?           
          <button onClick={addToCart}>+</button>
          : <p>No se puede agregar mas</p>
        }
        <button onClick={deleteProductCart}>-</button>
      </footer>
    </li>
  );
};
