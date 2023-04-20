import axios from "axios";
import {Card} from "../context/redux-slices/cardsFeedSlice";
import {BACKEND_URL} from "../CONST_VALUES";

axios.defaults.baseURL = BACKEND_URL;

const axiosService = {
  cardsRequests:{
    getAnother10Cards(successCallback:Function, errorCallback:Function) {
      axios.get<Card[]>(`/api/cards/other10`).then((r) => {
        successCallback(r.data)
      }).catch(e => errorCallback(e))
    }
  }
}
export default axiosService;
