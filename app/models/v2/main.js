import {
  BASE_URL,
  fetchFoodList,
  layThongTinTuForm,
  showMessage,
  showThongTin,
} from "./controller.js";
fetchFoodList();

let deleteFood = (id) => {
  axios
    .delete(`${BASE_URL}/${id}`)
    .then((res) => {
      fetchFoodList();
      showMessage("Xoa Thanh cong !!!");
    })
    .catch((err) => {
      showMessage("Da co loi xay ra !!!", false);
    });
};
window.deleteFood = deleteFood;

let addFood = () => {
  let data = layThongTinTuForm();
  axios
    .post(BASE_URL, data)
    .then((res) => {
      console.log(res);
      $("#exampleModal").modal("hide");
      showMessage("Them Thanh cong !!!");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};
window.addFood = addFood;

window.editFood = (id) => {
  $("#exampleModal").modal("show");
  document.getElementById("foodID").readOnly = true;
  let url = `${BASE_URL}/${id}`;
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      showThongTin(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.updateFood = () => {
  let data = layThongTinTuForm();
  axios
    .put(`${BASE_URL}/${data.ma}`, data)
    .then((res) => {
      console.log(res);
      $("#exampleModal").modal("hide");
      showMessage("Update thanh cong !!!");
      fetchFoodList();
    })
    .catch((err) => {
      console.log(err);
    });
};
