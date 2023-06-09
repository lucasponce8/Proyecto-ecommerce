import styles from './CartItem.module.css';

export const CartItem = ({
  image,
  price,
  name,
  quantity,
  id,
  stock,
  addToCart,
  deleteProductCart,
  calculateTotalItem
}) => {

  console.log(`Stock de ${name} : ${stock}`);
  console.log(`Cantidad de ${name} : ${quantity}`);

  const total = calculateTotalItem();


  return (
    <li key={id} className={styles.item}>
      <img src={image} alt={name} className={styles.itemImg} />

      <div className={styles.itemName}>
        <strong>{name}</strong>
      </div>

      <div className={styles.itemPrice}>
        <strong>${price}</strong>
      </div>

      <div>
        <small>Cantidad: {quantity}</small>
        {
          quantity+1 <= stock ?           
          <button onClick={addToCart}>+</button>
          : <p>No se puede agregar mas</p>
        }
        <button onClick={deleteProductCart}>-</button>
      </div>

      <div>
        <h4>Total: ${total}</h4>
      </div>
    </li>
  );
};
