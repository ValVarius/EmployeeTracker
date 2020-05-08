import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200";

// https://randomuser.me/api/?results=200

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
