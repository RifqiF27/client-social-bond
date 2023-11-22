import { defineStore } from "pinia";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const BASE_URL = "https://SocialBond.rifqif.my.id";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    username: "",
    email: "",
    threads: [],
    details: {},
    params: {
      myThread: "",
    },
  }),
  getters: {},
  actions: {
    async registerHandler(input) {
      try {
        const { data } = await axios({
          url: BASE_URL + "/register",
          method: "POST",
          data: input,
        });
        // console.log(data);
        this.router.push("/login");
        this.showToastSuccess("Register Success");
      } catch (err) {
        console.log(err);
        this.showToastError(err.responseJson.data.message);
      }
    },
    async loginHandler(input) {
      console.log(input);
      try {
        const { data } = await axios({
          url: BASE_URL + "/login",
          method: "POST",
          data: input,
        });
        console.log(data);
        localStorage.access_token = data.access_token;
        localStorage.username = data.data.username;
        localStorage.email = data.data.email;
        this.username = data.data.username;
        this.email = data.data.email;
        this.router.push("/threads");
        this.showToastSuccess("Welcome");
      } catch (err) {
        console.log(err);
        this.showToastError(err.responseJson.data.message);
      }
    },
    logoutHandler() {
      localStorage.clear();
      this.username = "";
      this.router.push("/");
    },

    async fetchThreads() {
      try {
        const { data } = await axios({
          url: BASE_URL + "/threads",
          method: "GET",
          headers: { access_token: localStorage.getItem("access_token") },
          params: this.params,
        });
        // console.log(data);

        this.threads = data;
      } catch (err) {
        this.showToastError(err.responseJson.data.message);
      }
    },
    async handleAddThread(input) {
      try {
        const { data } = await axios({
          url: BASE_URL + "/threads",
          method: "POST",
          data: input,
          headers: {
            access_token: localStorage.getItem("access_token"),
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(data);
        this.router.push("/threads");
        this.showToastSuccess("Add Success");
      } catch (err) {
        console.log(err);
        this.showToastError(err.responseJson.data.message);
      }
    },
    async detailThread(id) {
      try {
        console.log(id, "store");
        const { data } = await axios({
          url: BASE_URL + "/threads/" + id,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data);
        this.details = data;
      } catch (err) {
        console.log(err.response.data.message);
        this.showToastError(err.response.data.message);
      }
    },
    async deleteThread(id){
      try {
        // console.log(id);
        await axios({
          url: BASE_URL + "/threads/"+id,
          method: "DELETE",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        })
        this.router.push('/threads')
        this.fetchThreads()
        this.showToastSuccess("Your thread has been deleted");

      } catch (err) {
        console.log(err.response.data.message);
        this.showToastError(err.response.data.message);
        
      }
    },

    showToastSuccess(message) {
      toast.success(message, { autoClose: 3000 });
    },
    showToastError(message) {
      toast.error(message, { autoClose: 3000 });
    },
  },
});
