import { getproductapi} from "../../Api/apiendpoint/endPoints";
import { url } from "../../Api/config/config";
import axios from "axios";
export function getProductsApi() {
    return axios.get(`${url.url}${getproductapi}`);
  }


export function fetchproductdata(action) {
    return axios.get(`${url.url}${getproductapi}${action.id}`);
} 
















