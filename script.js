$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(".menu-items a").click(function () {
  $("#checkbox").prop("checked", false);
});

  
document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll('.buy-now button');
  const modal = document.getElementById('checkoutModal');
  const closeBtn = document.getElementById('closeCheckout');

  // Show modal on Buy Now click
  buyButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent navigation
      modal.style.display = 'block';
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal if user clicks outside the content
  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });

  // Handle form submission
  document.getElementById("checkoutForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Order placed successfully!");
    modal.style.display = 'none';
    this.reset();
  });
});
