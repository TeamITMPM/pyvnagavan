import { useDispatch, useEffect } from "react";
import { getAdress } from "../../actions/adressAction";

export default function AdressComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdress());
  }, []);

  return <div>AdressComponent</div>;
}
