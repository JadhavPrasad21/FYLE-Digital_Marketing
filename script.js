// modal

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

// Adding event listeners to open modal buttons
openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Getting the modal element using data attribute
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

// Adding event listener to overlay for closing modals when clicked outside
overlay.addEventListener("click", () => {
  // Selecting all active modals
  const modals = document.querySelectorAll(".modal.active");
  // Closing each active modal
  modals.forEach(modal => {
    closeModal(modal);
  });
});

// Adding event listeners to close modal buttons
closeModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Getting the closest modal element
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

// Function to open modal
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

// Function to close modal
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// Swiper jS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Image toggler functionality

let tabs = document.querySelectorAll(".tab");
let images = document.querySelectorAll(".img");

// Adding event listeners to each tab
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Removing active class from all images
    images.forEach(content => {
      content.classList.remove("active");
      console.log("this is working");
    });
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    // Adding active class to the clicked tab and corresponding image
    images[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});
