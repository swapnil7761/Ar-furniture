window.addEventListener("DOMContentLoaded", () => {
  const productdetailcard =
    document.getElementsByClassName("productdetailcard");
  const infosection = document.getElementById("infosection");
  const imgsection = document.getElementById("imgsection");

  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  console.log(product);

  if (product) {
    infosection.innerHTML = `
        <h1>${product.name}</h1>
        <br>
        <p>${product.description}</p><br>
        <h3> Price : ${product.price}</h3>
        <p>(depends upon regulated price of materials near your area)</p><br>
        <p style="float:clear">Dimensions: ${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} (L*B*H)</p>
        <p>Material : ${product.material}</p>
        <p> Stock available : ${product.stock}</p>
        <div id="forcolor" style="display:flex"><p style="padding-top:2px">Colors:</p></div><br>
        <div class="infoaddcart">
          <button class="infowish">❤</button>
          <button class="infoitemadd">Buy Now</button>
        </div>
        <div class="infopayment">
          <img src="./images/products/payment-product.png">
          <p>Guaranteed Checkout</p>
        </div>`;

    const forcolor = document.getElementById("forcolor");
    product.colors.forEach((color) => {
      const colorDiv = document.createElement("div");
      colorDiv.classList.add("productdetailcolor");
      colorDiv.style.backgroundColor = color;
      forcolor.appendChild(colorDiv);
    });

    imgsection.innerHTML = `
        <div class="imglist">
          <img src="${product.imgUrl1}" alt="${product.name} Image 1">
          <img src="${product.imgUrl2}" alt="${product.name} Image 2">
          <img src="${product.imgUrl3}" alt="${product.name} Image 3">
        </div>
        <div class="viewimg" id="viewimg">
          <img src="${product.imgUrl1}" alt="${product.name} Image 1">
        </div>`;

    const imglist = imgsection.getElementsByTagName("img");
    Array.from(imglist).forEach((img) => {
      img.addEventListener("click", () => {
        const viewimg = document.getElementById("viewimg");
        viewimg.innerHTML = "";
        const selectedImg = document.createElement("img");
        selectedImg.src = img.src;
        selectedImg.alt = img.alt;
        viewimg.appendChild(selectedImg);
      });
    });

    const wishlistContainer = document.getElementById("wishlisteditems");
    const addpopup = document.getElementById("wishlistaddpopup");
    const removepopup = document.getElementById("wishlistremovepopup");
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistBtn = document.querySelector(".infowish");

    const isProductInWishlist = wishlist.some(
      (item) => item.name === product.name
    );
    if (isProductInWishlist) {
      wishlistBtn.style.color = "orange";
    }
    wishlistBtn.addEventListener("click", () => {
      if (
        wishlistBtn.style.color === "black" ||
        wishlistBtn.style.color === ""
      ) {
        wishlistBtn.style.color = "orange";
        addpopup.classList.add("show");
        addToWishlist(product);
        setTimeout(() => {
          addpopup.classList.remove("show");
        }, 2000);
      } else {
        wishlistBtn.style.color = "black";
        removepopup.classList.add("show");
        removeFromWishlist(product);
        setTimeout(() => {
          removepopup.classList.remove("show");
        }, 2000);
      }
    });

    function addToWishlist(product) {
      const isProductInWishlist = wishlist.some(
        (item) => item.name === product.name
      );
      if (!isProductInWishlist) {
        wishlist.push({
          name: product.name,
          price: product.price,
          imgUrl: product.imgUrl1,
        });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        updateWishlistUI();
      }
    }
    function removeFromWishlist(product) {
      wishlist = wishlist.filter((item) => item.name !== product.name);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      updateWishlistUI();
    }

    function updateWishlistUI() {
      wishlistContainer.innerHTML = "";
      if (wishlist.length === 0) {
        wishlistContainer.innerHTML =
          "<p>There are no products on the Wishlist!</p>";
        const wishlistcount = document.getElementById("wishlishcount");
        wishlistcount.style.display = "none";
      } else {
        wishlist.forEach((item) => {
          const listItem = document.createElement("div");
          listItem.classList.add("wishlist-item");
          listItem.innerHTML = `
              <div><img src="${item.imgUrl}" alt="${item.name}" width="50" height="50"></div>
              <div><p>${item.name}</p>
              <p>${item.price}</p></div>`;
          wishlistContainer.appendChild(listItem);
          const wishlistcount = document.getElementById("wishlishcount");
          wishlistcount.style.display = "block";
          wishlistcount.textContent = wishlist.length;
        });
      }
    }
    updateWishlistUI();
  }
});
