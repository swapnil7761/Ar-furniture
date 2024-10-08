const productslist = [
  {
    name: "LOFT SOFA",
    price: "3400₹ - 3900₹",
    description:
      "A contemporary loft-style sofa designed for spacious living areas. Its broad seating and sturdy build make it ideal for entertaining guests or relaxing with family. The fabric upholstery comes in neutral tones, allowing it to blend seamlessly into any modern or minimalist home interior.",
    imgUrl1: "./images/items/sofa/LOFT SOFA/1.webp",
    imgUrl2: "./images/items/sofa/LOFT SOFA/2.webp",
    imgUrl3: "./images/items/sofa/LOFT SOFA/3.webp",
    category: "Sofa",
    dimensions: { width: "240cm", height: "80cm", depth: "115cm" },
    material: "Fabric",
    colors: ["Gray", "White", "Blue"],
    ratings: 4.4,
    stock: 10,
  },
  {
    name: "WINGBACK CHAIR",
    price: "1800₹ - 2200₹",
    description:
      "A classic wingback chair with deep cushioning and armrests, perfect for cozy evenings by the fireplace. The elegant design, coupled with plush fabric upholstery, ensures a timeless look that enhances any living room or study, offering both comfort and aesthetic appeal.",
    imgUrl1: "./images/items/chair/WINGBACK CHAIR/1.avif",
    imgUrl2: "./images/items/chair/WINGBACK CHAIR/2.webp",
    imgUrl3: "./images/items/chair/WINGBACK CHAIR/3.avif",
    category: "Chair",
    dimensions: { width: "80cm", height: "110cm", depth: "90cm" },
    material: "Fabric",
    colors: ["Blue", "Red", "Yellow"],
    ratings: 4.3,
    stock: 10,
  },
  {
    name: "VINTAGE DESK LAMP",
    price: "1100₹ - 1300₹",
    description:
      "A vintage-style desk lamp with an adjustable arm and a brass finish. This elegant lamp provides a classic touch to your study or workspace, with a warm glow perfect for reading and working.",
    imgUrl1: "./images/items/lamp/New folderVINTAGE DESK LAMP/2.jpg",
    imgUrl2: "./images/items/lamp/New folderVINTAGE DESK LAMP/1.jpg",
    imgUrl3: "./images/items/lamp/New folderVINTAGE DESK LAMP/3.jpg",
    category: "Lamp",
    dimensions: { height: "50cm" },
    material: "Brass, Metal",
    colors: ["#C89F54", "Black"],
    ratings: 4.8,
    stock: 15,
  },
  {
    name: "EXPANDABLE DINING TABLE",
    price: "6200₹ - 6700₹",
    description:
      "An expandable dining table made from high-quality wood, perfect for large family gatherings. It features a hidden leaf extension to adjust the size as needed, combining practicality with a sleek modern design.",
    imgUrl1: "./images/items/table/EXPANDABLE DINING TABLE/1.webp",
    imgUrl2: "./images/items/table/EXPANDABLE DINING TABLE/2.webp",
    imgUrl3: "./images/items/table/EXPANDABLE DINING TABLE/3.webp",
    category: "Table",
    dimensions: { width: "150cm - 220cm", height: "75cm", depth: "90cm" },
    material: "Wood",
    colors: ["#4E3B31", "#DEB887"],
    ratings: 4.9,
    stock: 6,
  },
  {
    name: "WALK-IN WARDROBE SYSTEM",
    price: "9500₹ - 10,000₹",
    description:
      "A premium walk-in wardrobe system with ample storage, perfect for large spaces. It offers a luxurious setup with shelves, hanging rods, and drawers, providing everything you need to keep your wardrobe organized and accessible.",
    imgUrl1: "./images/items/wardrob/WALK-IN WARDROBE SYSTEM/2.avif",
    imgUrl2: "./images/items/wardrob/WALK-IN WARDROBE SYSTEM/1.avif",
    imgUrl3: "./images/items/wardrob/WALK-IN WARDROBE SYSTEM/3.avif",
    category: "Wardrobe",
    dimensions: { width: "300cm", height: "240cm", depth: "80cm" },
    material: "Wood, Metal",
    colors: ["Gray", "White"],
    ratings: 4.9,
    stock: 3,
  },
  {
    name: "LUXURY CHAISE SOFA",
    price: "4800₹ - 5200₹",
    description:
      "A spacious luxury chaise sofa offering both style and comfort. The long chaise lounge provides the perfect place to relax, while the soft cushions and durable fabric ensure long-lasting use. Ideal for larger living rooms and modern interiors.",
    imgUrl1: "./images/items/sofa/LUXURY CHAISE SOFA/2.webp",
    imgUrl2: "./images/items/sofa/LUXURY CHAISE SOFA/1.webp",
    imgUrl3: "./images/items/sofa/LUXURY CHAISE SOFA/3.webp",
    category: "Sofa",
    dimensions: { width: "280cm", height: "85cm", depth: "150cm" },
    material: "Fabric",
    colors: ["Gray", "Navy"],
    ratings: 4.8,
    stock: 7,
  },
  {
    name: "CLASSIC LEATHER LOVESEAT",
    price: "3700₹ - 4200₹",
    description:
      "A classic two-seater leather loveseat with a timeless design. This piece offers exceptional comfort with deep cushions and is perfect for smaller living spaces or as a complement to a larger seating area.",
    imgUrl1: "./images/items/sofa/CLASSIC LEATHER LOVESEAT/2.jpg",
    imgUrl2: "./images/items/sofa/CLASSIC LEATHER LOVESEAT/1.jpg",
    imgUrl3: "./images/items/sofa/CLASSIC LEATHER LOVESEAT/3.jpg",
    category: "Sofa",
    dimensions: { width: "160cm", height: "90cm", depth: "95cm" },
    material: "Leather",
    colors: ["Black", "Brown"],
    ratings: 4.6,
    stock: 5,
  },
  {
    name: "MID-CENTURY MODERN ARMCHAIR",
    price: "2200₹ - 2600₹",
    description:
      "A mid-century modern armchair with clean lines, wooden legs, and soft cushions. This chair is perfect for adding a stylish retro touch to your living room or office, while also offering great comfort.",
    imgUrl1: "./images/items/chair/MID-CENTURY MODERN ARMCHAIR/3.avif",
    imgUrl2: "./images/items/chair/MID-CENTURY MODERN ARMCHAIR/2.avif",
    imgUrl3: "./images/items/chair/MID-CENTURY MODERN ARMCHAIR/1.avif",
    category: "Chair",
    dimensions: { width: "80cm", height: "95cm", depth: "85cm" },
    material: "Fabric, Wood",
    colors: ["Green", "Orange"],
    ratings: 4.5,
    stock: 12,
  },
  {
    name: "RECLINING LOUNGE CHAIR",
    price: "2800₹ - 3200₹",
    description:
      "A reclining lounge chair with plush padding and an adjustable footrest. This chair is designed for relaxation, perfect for reading or watching TV. Its sleek modern design will fit effortlessly into any home.",
    imgUrl1: "./images/items/chair/RECLINING LOUNGE CHAIR/2.avif",
    imgUrl2: "./images/items/chair/RECLINING LOUNGE CHAIR/1.avif",
    imgUrl3: "./images/items/chair/RECLINING LOUNGE CHAIR/3.avif",
    category: "Chair",
    dimensions: { width: "85cm", height: "100cm", depth: "90cm" },
    material: "Leather",
    colors: ["Black", "Brown"],
    ratings: 4.7,
    stock: 8,
  },

  {
    name: "ROUND GLASS SIDE TABLE",
    price: "1400₹ - 1700₹",
    description:
      "A stylish round side table with a tempered glass top and metal legs. This table offers a minimalist look that fits well in any contemporary space, ideal for placing next to a sofa or bed.",
    imgUrl1: "./images/items/table/ROUND GLASS SIDE TABLE/1.jpg",
    imgUrl2: "./images/items/table/ROUND GLASS SIDE TABLE/2.jpg",
    imgUrl3: "./images/items/table/ROUND GLASS SIDE TABLE/3.jpg",
    category: "Table",
    dimensions: { width: "60cm", height: "55cm", depth: "60cm" },
    material: "Glass, Metal",
    colors: ["rgba(255, 255, 255, 0.5)", "Silver"],
    ratings: 4.4,
    stock: 18,
  },
  {
    name: "THREE-DOOR WARDROBE",
    price: "5200₹ - 5700₹",
    description:
      "A spacious three-door wardrobe with adjustable shelving and hanging space. This piece is perfect for organizing clothes, accessories, and more. Its simple design makes it a versatile addition to any bedroom.",
    imgUrl1: "./images/items/wardrob/THREE-DOOR WARDROBE/3.webp",
    imgUrl2: "./images/items/wardrob/THREE-DOOR WARDROBE/2.webp",
    imgUrl3: "./images/items/wardrob/THREE-DOOR WARDROBE/1.webp",
    category: "Wardrobe",
    dimensions: { width: "180cm", height: "220cm", depth: "60cm" },
    material: "Wood",
    colors: ["White", "#C9B69D"],
    ratings: 4.6,
    stock: 10,
  },

  {
    name: "INDUSTRIAL FLOOR LAMP",
    price: "2500₹ - 2800₹",
    description:
      "An industrial-style floor lamp with an exposed bulb and a matte black metal frame. This lamp offers a bold, rustic look that complements loft-style and modern industrial interiors.",
    imgUrl1: "./images/items/lamp/INDUSTRIAL FLOOR LAMP/2.avif",
    imgUrl2: "./images/items/lamp/INDUSTRIAL FLOOR LAMP/1.webp",
    imgUrl3: "./images/items/lamp/INDUSTRIAL FLOOR LAMP/3.avif",
    category: "Lamp",
    dimensions: { height: "175cm" },
    material: "Metal",
    colors: ["Black"],
    ratings: 4.5,
    stock: 12,
  },

  {
    name: "MELLOW SOFA",
    price: "2500₹ - 2800₹",
    description:
      "A comfortable and stylish sofa that perfectly complements any modern living room. Made with premium leather, it offers durability, style, and comfort. With its sleek design, this sofa adds a contemporary feel, while the soft seating makes it a great spot for relaxing after a long day.",
    imgUrl1: "./images/items/sofa/MELLOW SOFA/1.avif",
    imgUrl2: "./images/items/sofa/MELLOW SOFA/2.avif",
    imgUrl3: "./images/items/sofa/MELLOW SOFA/3.avif",
    category: "Sofa",
    dimensions: { width: "200cm", height: "90cm", depth: "100cm" },
    material: "Premium Leather",
    colors: ["Brown", "Black", "White"],
    ratings: 4.5,
    stock: 12,
  },
  {
    name: "MODULAR SECTIONAL",
    price: "3200₹ - 3700₹",
    description:
      "A contemporary modular sectional sofa that allows for versatile layout options. Whether you need extra seating or want to create a cozy corner, this sofa adapts to your space. Its soft fabric finish and robust build ensure longevity while providing ultimate comfort for guests and family alike.",
    imgUrl1: "./images/items/sofa/modular sectional/1.avif",
    imgUrl2: "./images/items/sofa/modular sectional/2.avif",
    imgUrl3: "./images/items/sofa/modular sectional/3.avif",
    category: "Sofa",
    dimensions: { width: "250cm", height: "85cm", depth: "110cm" },
    material: "Fabric",
    colors: ["Gray", "Blue", "Green"],
    ratings: 4.8,
    stock: 8,
  },
  {
    name: "MID-CENTURY SOFA",
    price: "2700₹ - 3100₹",
    description:
      "A retro-style sofa with sleek wooden legs and soft upholstery. Its vibrant colors make it an eye-catching piece, while the plush velvet material ensures that it’s as comfortable as it is stylish. Ideal for adding a mid-century modern touch to your living space, this sofa is built to last.",
    imgUrl1: "./images/items/sofa/MID-CENTURY SOFA/1.jpg",
    imgUrl2: "./images/items/sofa/MID-CENTURY SOFA/2.jpg",
    imgUrl3: "./images/items/sofa/MID-CENTURY SOFA/3.jpg",
    category: "Sofa",
    dimensions: { width: "210cm", height: "95cm", depth: "105cm" },
    material: "Velvet",
    colors: ["Green", "Pink", "Yellow"],
    ratings: 4.2,
    stock: 15,
  },
  {
    name: "RECLINER SOFA",
    price: "4500₹ - 5000₹",
    description:
      "A luxurious recliner sofa with adjustable headrests and leg rests, providing ultimate relaxation. Perfect for movie nights or reading, this recliner combines sleek design with functional comfort. Upholstered in soft leather, it’s available in neutral colors that easily complement various decor styles.",
    imgUrl1: "./images/items/sofa/RECLINER SOFA/1.webp",
    imgUrl2: "./images/items/sofa/RECLINER SOFA/2.webp",
    imgUrl3: "./images/items/sofa/RECLINER SOFA/3.webp",
    category: "Sofa",
    dimensions: { width: "230cm", height: "100cm", depth: "120cm" },
    material: "Leather",
    colors: ["Black", "Brown"],
    ratings: 4.7,
    stock: 6,
  },
];

function displayrandomproducts(num) {
  const sortproducts = productslist
    .sort(() => 0.5 - Math.random())
    .slice(0, num);
  const itemsdiv = document.querySelector(".items");
  itemsdiv.innerHTML = "";
  sortproducts.forEach((product) => {
    const item = document.createElement("div");
    item.classList.add("item");
    const img = document.createElement("img");
    img.src = product.imgUrl1;
    img.alt = product.name;
    const name = document.createElement("h4");
    name.textContent = product.name;
    const price = document.createElement("p");
    price.textContent = product.price;

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(price);
    item.addEventListener("click", () => {
      window.location.href = "./products.html";
    });
    itemsdiv.appendChild(item);
  });
}
displayrandomproducts(4);

function validateemail() {
  const emailinput = document.getElementById("emailinput");
  const email = emailinput.value;
  const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailpattern.test(email)) {
    alert(
      "You've successfully subscribed to our News letter! Enjoy our latest deals and updates!"
    );
  } else {
    alert("Please enter a valid email address.");
  }
}

function loginpopup() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <div class="popupcontent">
      <span class="closebtn">&times;</span>
      <h2>Login</h2>
      <form >
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required>

          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>

          <input type="submit" value="Login">
      </form>
      <div class="signuplink">
          <p>Don't have an account? <a href="">Sign up</a></p>
      </div>
    </div>
  `;

  document.body.appendChild(popup);
  const closebtn = popup.querySelector(".closebtn");
  closebtn.addEventListener("click", () => {
    popup.remove();
  });
}
