import { GET_AUTOS } from "./actionsType.js";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export function getAuto() {
  return async function (dispatch) {
    try {
      const res = await getDocs(collection(db, "auto"));

      return dispatch({
        type: GET_AUTOS,
        payload: res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
}
