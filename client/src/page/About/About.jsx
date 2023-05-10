import React from 'react'
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.aboutConteiner}>
      <h1 className={styles.aboutConteiner_title}>PREGUNTAS FRECUENTES</h1>
      <h4 className={styles.aboutConteiner_subtitle}>Hacé tu pedido por la web y nos estaremos contactando con vos por Whattsapp para coordinar el pago y el envío.</h4>
      <ul className={styles.aboutConteiner_questionContent}>
        <li className={styles.aboutConteiner_sections}>¿Formas de pago?</li>
          <li >-Efectivo en el local</li>
          <li>-Transferencia bancaria</li>
          <li>-Mercado Pago (mediante envío de dinero (mail o teléfono) o ingreso en efectivo con código (vía Pago Fácil, RapiPago o Cobro Express)) </li>

        <li className={styles.aboutConteiner_sections}>¿Cuál es el costo de envío?</li>
          <p>El costo de envío será mostrado en base al total de la compra y ubicación, en el checkout, en el momento previo a la compra.</p>
        <li className={styles.aboutConteiner_sections}>¿Cómo se realizan los envíos?</li>
          <p>El envío se realiza por el medio que el cliente elija. Cuando nos contactamos con vos por whatsapp nos decís cual preferís y nosotros lo despachamos. El costo del mismo depende de la empresa de transporte elegida y se les abona directamente a ellos cuando lo recibís.</p>
        <li className={styles.aboutConteiner_sections}>¿Dónde puedo recibir mi pedido?</li>
          <p>Realizamos envíos a todo el país.</p>
        <li className={styles.aboutConteiner_sections}>¿Cuánto tarda en llegar el pedido?</li>
          <p>El tiempo de entrega dependerá del transporte. Nosotros solemos despachar los pedidos al otro día de haberse acreditado el pago. </p>
        <li className={styles.aboutConteiner_sections}>¿Puedo retirar mi pedido por algún lugar para no pagar envío?</li>
          <p>Obvio! podés elegir la opcíon de retiro en el local y pasar a buscar tu pedido por Concordia 208</p>
        <li className={styles.aboutConteiner_sections}>¿Cuál es el plazo para realizar un cambio?</li>
          <p>No realizamos cambios ni devoluciones ya que somos mayoristas</p>

      </ul>
    </div>
  )
}

export default About
