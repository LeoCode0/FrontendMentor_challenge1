const modal = document.getElementById("modal");
const icon = document.getElementById("share");
const iconContainer = document.getElementById('iconContainer');

const showModal = () => {
  modal.style.display = "flex";
  icon.classList.add("active");
  iconContainer.classList.add("active")
};

const closeModal = () => {
  modal.style.display = "none";
  icon.classList.remove("active");
  iconContainer.classList.remove("active")

};
