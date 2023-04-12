import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAdress } from "../../actions/adressAction";
import styles from "./AdressComponent.module.css";

export default function AdressComponent() {
  const dispatch = useDispatch();

  const { adressState } = useSelector((state) => state);
  const { loading, adress } = adressState;

  useEffect(() => {
    dispatch(getAdress());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div>
        {adress &&
          adress.map(({ addressUA, district, phone, schedule, id }) => (
            <ul className={styles.ul}>
              <li>Район: {district}</li>
              <li>Адресса:{addressUA}</li>
              <li>Графік роботи: {schedule}</li>
              <li>Телефон: {phone}</li>
            </ul>
          ))}
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5073.506382735783!2d30.508464808289588!3d50.52015892181591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDMxJzE0LjMiTiAzMMKwMzAnNDMuOCJF!5e0!3m2!1sen!2sua!4v1676484108837!5m2!1sen!2sua"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
        {" "}
      </iframe>
    </div>
  );
}
