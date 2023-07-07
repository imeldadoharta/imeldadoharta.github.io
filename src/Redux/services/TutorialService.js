import axios from "../../Config//http-common";

const getAll = () => {
  return axios.get("/user");
};

const get = id => {
  return axios.get(`/user/${id}`);
};

const create = data => {
  return axios.post("/user", data.user);
};

const update = (id, data) => {
  return axios.put(`/user/${id}`, data);
};

const remove = id => {
  return axios.delete(`/user/${id}`);
};

const removeAll = () => {
  return axios.delete(`/user`);
};

const findByTitle = title => {
  return axios.get(`/user?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;