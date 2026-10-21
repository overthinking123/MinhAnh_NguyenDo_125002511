/* AUTO VIỆT — chức năng demo phía trình duyệt, không xử lý thanh toán thật. */
const vehicles = [
  {id:"av-suv01",name:"Aurora X7",type:"suv",typeLabel:"SUV · 7 CHỖ",tag:"ĐƯỢC QUAN TÂM",subtitle:"SUV gia đình cao cấp",price:1289000000,engine:"2.0L Turbo",power:"245 hp",drive:"AWD",seats:"7 chỗ",transmission:"Tự động 8 cấp",fuel:"Xăng",range:"—",description:"Không gian rộng rãi, thiết kế mạnh mẽ và nhiều tiện nghi cho những chuyến đi cùng gia đình.",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80",colors:[{name:"Trắng ngọc",hex:"#e9e9e5"},{name:"Đen huyền",hex:"#17191b"},{name:"Xám titan",hex:"#7a8287"},{name:"Xanh rêu",hex:"#46594c"}],trims:[{name:"Premium 2.0T",price:1289000000},{name:"Signature AWD",price:1469000000}]},
  {id:"av-sedan02",name:"Lumen S5",type:"sedan",typeLabel:"SEDAN · 5 CHỖ",tag:"THANH LỊCH",subtitle:"Sedan đô thị tinh tế",price:789000000,engine:"1.5L Turbo",power:"178 hp",drive:"FWD",seats:"5 chỗ",transmission:"Tự động 7 cấp",fuel:"Xăng",range:"—",description:"Đường nét thanh lịch, khoang lái tiện nghi và cảm giác lái linh hoạt cho nhịp sống đô thị.",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",colors:[{name:"Trắng",hex:"#f0f0ec"},{name:"Đỏ đô",hex:"#842e31"},{name:"Đen",hex:"#151719"}],trims:[{name:"Luxury 1.5T",price:789000000},{name:"Premium Plus",price:869000000}]},
  {id:"av-ev03",name:"Eon E6",type:"electric",typeLabel:"XE ĐIỆN · 5 CHỖ",tag:"100% ĐIỆN",subtitle:"SUV điện thế hệ mới",price:1099000000,engine:"Mô-tơ điện",power:"215 hp",drive:"RWD",seats:"5 chỗ",transmission:"1 cấp",fuel:"Điện",range:"480 km",description:"Vận hành êm ái, tăng tốc mượt và thiết kế hiện đại hướng đến hành trình bền vững.",image:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80",colors:[{name:"Trắng sứ",hex:"#f1f1eb"},{name:"Xanh băng",hex:"#9cb9c7"},{name:"Đen bóng",hex:"#17191b"}],trims:[{name:"Standard 60 kWh",price:1099000000},{name:"Long Range 82 kWh",price:1299000000}]},
  {id:"av-sport04",name:"Vortex GT",type:"sport",typeLabel:"COUPE THỂ THAO",tag:"HIỆU NĂNG",subtitle:"Coupe thể thao cá tính",price:2190000000,engine:"3.0L Turbo",power:"382 hp",drive:"RWD",seats:"4 chỗ",transmission:"Tự động 8 cấp",fuel:"Xăng",range:"—",description:"Tỷ lệ thân xe thể thao, phản hồi lái nhạy bén và thiết kế dành cho người yêu cảm giác cầm lái.",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",colors:[{name:"Vàng ánh kim",hex:"#c6a33a"},{name:"Trắng",hex:"#e9e9e5"},{name:"Đen",hex:"#151719"}],trims:[{name:"GT 3.0",price:2190000000},{name:"GT Performance",price:2490000000}]},
  {id:"av-suv05",name:"Terra M5",type:"suv",typeLabel:"SUV · 5 CHỖ",tag:"ĐA DỤNG",subtitle:"SUV năng động mỗi ngày",price:925000000,engine:"1.6L Turbo",power:"190 hp",drive:"AWD",seats:"5 chỗ",transmission:"Tự động 7 cấp",fuel:"Xăng",range:"—",description:"Khoảng sáng gầm cao, khoang hành lý linh hoạt và nhiều công nghệ hỗ trợ người lái.",image:"https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=1000&q=80",colors:[{name:"Bạc",hex:"#b9bec1"},{name:"Đen",hex:"#17191b"},{name:"Xanh navy",hex:"#273c50"}],trims:[{name:"Comfort",price:925000000},{name:"Premium AWD",price:1045000000}]},
  {id:"av-ev06",name:"Nova City E",type:"electric",typeLabel:"XE ĐIỆN · 5 CHỖ",tag:"ĐÔ THỊ XANH",subtitle:"Xe điện nhỏ gọn linh hoạt",price:569000000,engine:"Mô-tơ điện",power:"150 hp",drive:"FWD",seats:"5 chỗ",transmission:"1 cấp",fuel:"Điện",range:"360 km",description:"Kích thước gọn gàng, dễ xoay trở trong phố và chi phí vận hành phù hợp cho sử dụng hằng ngày.",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80",colors:[{name:"Trắng",hex:"#e9e9e5"},{name:"Xanh bạc hà",hex:"#90b7a3"},{name:"Xám",hex:"#747b80"}],trims:[{name:"City",price:569000000},{name:"City Plus",price:629000000}]},
  {id:"av-sedan07",name:"Aster L8",type:"sedan",typeLabel:"SEDAN · 5 CHỖ",tag:"SANG TRỌNG",subtitle:"Sedan hạng sang",price:1590000000,engine:"2.0L Turbo",power:"258 hp",drive:"RWD",seats:"5 chỗ",transmission:"Tự động 8 cấp",fuel:"Xăng",range:"—",description:"Nội thất tinh giản, cách âm tốt và nhiều trang bị tiện nghi cho những hành trình dài.",image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",colors:[{name:"Đen",hex:"#17191b"},{name:"Bạc",hex:"#c3c8ca"},{name:"Xanh đậm",hex:"#283c4c"}],trims:[{name:"Elegance",price:1590000000},{name:"Executive",price:1780000000}]},
  {id:"av-sport08",name:"Racer R2",type:"sport",typeLabel:"COUPE · 2 CỬA",tag:"THIẾT KẾ NỔI BẬT",subtitle:"Coupe thể thao gọn nhẹ",price:1790000000,engine:"2.0L Turbo",power:"295 hp",drive:"RWD",seats:"4 chỗ",transmission:"Tự động 8 cấp",fuel:"Xăng",range:"—",description:"Ngoại hình đậm chất thể thao, khung gầm cân bằng và khoang lái tập trung vào người lái.",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80",colors:[{name:"Đỏ",hex:"#9e292c"},{name:"Trắng",hex:"#e9e9e5"},{name:"Đen",hex:"#17191b"}],trims:[{name:"Sport",price:1790000000},{name:"Sport Plus",price:1940000000}]},
  {id:"av-suv09",name:"Summit V9",type:"suv",typeLabel:"SUV · 7 CHỖ",tag:"CAO CẤP",subtitle:"SUV cao cấp đường dài",price:1890000000,engine:"2.5L Turbo",power:"275 hp",drive:"AWD",seats:"7 chỗ",transmission:"Tự động 8 cấp",fuel:"Xăng",range:"—",description:"Không gian ba hàng ghế, khả năng vận hành tự tin và thiết kế hướng đến những chuyến đi xa.",image:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80",colors:[{name:"Trắng",hex:"#e9e9e5"},{name:"Xám",hex:"#737a7e"},{name:"Đen",hex:"#17191b"}],trims:[{name:"Premium",price:1890000000},{name:"Signature AWD",price:2090000000}]}
];
const cart = [];
const grid = document.getElementById("vehicleGrid");
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");
let activeFilter = "all";
let searchTerm = "";
let toastTimer;

function money(value) {
  return new Intl.NumberFormat("vi-VN", {style:"currency", currency:"VND", maximumFractionDigits:0}).format(value);
}
function getCardState(id) {
  const card = document.querySelector(`[data-vehicle-id="${id}"]`);
  if (!card) return {colorIndex:0, trimIndex:0};
  return {
    colorIndex: Number(card.dataset.colorIndex || 0),
    trimIndex: Number(card.dataset.trimIndex || 0)
  };
}
function getConfiguredVehicle(vehicle, state = {colorIndex:0, trimIndex:0}) {
  return {...vehicle, color:vehicle.colors[state.colorIndex] || vehicle.colors[0], trim:vehicle.trims[state.trimIndex] || vehicle.trims[0], price:(vehicle.trims[state.trimIndex] || vehicle.trims[0]).price};
}
function renderVehicles() {
  const filtered = vehicles.filter(v => (activeFilter === "all" || v.type === activeFilter) && `${v.name} ${v.subtitle} ${v.typeLabel}`.toLowerCase().includes(searchTerm));
  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-results">Không tìm thấy mẫu xe phù hợp. Hãy thử từ khóa hoặc danh mục khác.</div>';
    return;
  }
  grid.innerHTML = filtered.map((v, index) => `
    <article class="vehicle-card" data-aos="fade-up" data-aos-delay="${Math.min(index * 80, 320)}" data-vehicle-id="${v.id}" data-color-index="0" data-trim-index="0">
      <div class="vehicle-card-inner">
        <div class="vehicle-face vehicle-front">
          <div class="vehicle-image-wrap">
            <img class="vehicle-image" src="${v.image}" alt="${v.name}" loading="lazy">
            <span class="vehicle-tag">${v.tag}</span>
            <button class="flip-corner flip-btn" data-id="${v.id}" aria-label="Lật thẻ ${v.name}" title="Lật thẻ xem thông số">↻</button>
          </div>
          <div class="vehicle-content">
            <div class="vehicle-meta"><span>${v.typeLabel}</span><span>AV / ${v.id.slice(-2).toUpperCase()}</span></div>
            <h3>${v.name}</h3><span class="vehicle-subtitle">${v.subtitle}</span>
            <div class="vehicle-price">${money(v.price)} <small>từ</small></div>
            <div class="vehicle-specs"><span>♧ ${v.seats}</span><span>⚙ ${v.power}</span><span>◈ ${v.fuel}</span></div>
            <div class="vehicle-actions">
              <button class="btn btn-outline btn-small details-btn" data-id="${v.id}">Xem chi tiết ↗</button>
              <button class="btn btn-primary btn-small quick-add" data-id="${v.id}">Thêm giỏ +</button>
            </div>
          </div>
        </div>
        <div class="vehicle-face vehicle-back">
          <div class="back-heading"><span>THÔNG TIN XE</span><button class="flip-corner flip-btn" data-id="${v.id}" aria-label="Lật về mặt trước">↻</button></div>
          <h3>${v.name}</h3><div class="back-price">${money(v.price)}</div>
          <p>${v.description}</p>
          <div class="spec-list">
            <div><small>Động cơ</small><strong>${v.engine}</strong></div><div><small>Công suất</small><strong>${v.power}</strong></div>
            <div><small>Hộp số</small><strong>${v.transmission}</strong></div><div><small>Dẫn động</small><strong>${v.drive}</strong></div>
            <div><small>Số chỗ</small><strong>${v.seats}</strong></div><div><small>Nhiên liệu / tầm hoạt động</small><strong>${v.fuel}${v.range !== "—" ? " · "+v.range : ""}</strong></div>
          </div>
          <div class="back-actions"><button class="btn btn-outline btn-small flip-btn" data-id="${v.id}">Quay lại</button><button class="btn btn-primary btn-small details-btn" data-id="${v.id}">Chọn màu / phiên bản</button></div>
        </div>
      </div>
    </article>`).join("");
  if (window.AOS) AOS.refreshHard();
}
function renderVehicleDetails(id) {
  const v = vehicles.find(item => item.id === id);
  if (!v) return;
  const card = document.querySelector(`[data-vehicle-id="${id}"]`);
  const state = getCardState(id);
  const selected = getConfiguredVehicle(v, state);
  const host = document.getElementById("vehicleDetailContent");
  host.innerHTML = `
    <div class="detail-layout">
      <div class="detail-image-wrap"><img src="${v.image}" alt="${v.name}" class="detail-image"></div>
      <div class="detail-info">
        <p class="eyebrow">${v.typeLabel}</p>
        <h3>${v.name}</h3><p class="detail-subtitle">${v.description}</p>
        <div class="detail-price" id="detailPrice">${money(selected.price)}</div>
        <div class="detail-spec-grid">
          <div><small>Động cơ</small><strong>${v.engine}</strong></div><div><small>Công suất</small><strong>${v.power}</strong></div>
          <div><small>Hộp số</small><strong>${v.transmission}</strong></div><div><small>Dẫn động</small><strong>${v.drive}</strong></div>
          <div><small>Số chỗ</small><strong>${v.seats}</strong></div><div><small>Nhiên liệu / tầm hoạt động</small><strong>${v.fuel}${v.range !== "—" ? " · "+v.range : ""}</strong></div>
        </div>
        <label class="config-label">Chọn màu ngoại thất: <span id="selectedColorName">${selected.color.name}</span></label>
        <div class="color-options detail-colors">${v.colors.map((c,i)=>`<button type="button" class="color-swatch detail-swatch" style="background:${c.hex}" data-detail-color="${i}" data-id="${v.id}" aria-label="${c.name}" title="${c.name}" aria-pressed="${i===state.colorIndex}"></button>`).join("")}</div>
        <label class="config-label" for="detailTrim">Chọn phiên bản</label>
        <select class="trim-select" id="detailTrim" data-detail-trim="${v.id}">${v.trims.map((t,i)=>`<option value="${i}" ${i===state.trimIndex?"selected":""}>${t.name} — ${money(t.price)}</option>`).join("")}</select>
        <div class="detail-selected"><span>Đang chọn</span><strong id="detailSelection">${selected.color.name} · ${selected.trim.name}</strong></div>
        <button class="btn btn-primary btn-full detail-add" data-id="${v.id}">Thêm cấu hình này vào giỏ +</button>
        <p class="form-note">Giá và thông số mang tính minh họa cho bài tập, không phải báo giá chính thức.</p>
      </div>
    </div>`;
  openModal("vehicleDetailModal");
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2700);
}
function flipCard(id) {
  const card = document.querySelector(`[data-vehicle-id="${id}"]`);
  if (card) card.classList.toggle("is-flipped");
}
function addToCart(id, configured = false) {
  const vehicle = vehicles.find(v => v.id === id);
  if (!vehicle) return;
  const state = configured ? getCardState(id) : {colorIndex:0, trimIndex:0};
  const itemVehicle = getConfiguredVehicle(vehicle, state);
  const key = `${id}-${state.colorIndex}-${state.trimIndex}`;
  const existing = cart.find(item => item.key === key);
  if (existing) existing.quantity += 1;
  else cart.push({key, id, name:vehicle.name, image:vehicle.image, color:itemVehicle.color.name, colorHex:itemVehicle.color.hex, trim:itemVehicle.trim.name, price:itemVehicle.price, quantity:1});
  renderCart();
  showToast(`${vehicle.name} đã được thêm vào giỏ xe.`);
}
function renderCart() {
  const count = cart.reduce((sum,item)=>sum+item.quantity,0);
  cartCount.textContent = count;
  document.getElementById("cartSubtitle").textContent = `(${count})`;
  const cartItems = document.getElementById("cartItems");
  if (!cart.length) cartItems.innerHTML = '<div class="cart-empty">Giỏ xe đang trống.<br>Hãy chọn một mẫu xe bạn yêu thích.</div>';
  else cartItems.innerHTML = cart.map(item => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div><h3>${item.name}</h3><p>${item.trim} · Màu ${item.color}</p><strong>${money(item.price)}</strong>
      <button class="remove-item" data-remove="${item.key}">Xóa khỏi giỏ</button></div>
      <div class="cart-item-actions"><button class="qty-btn" data-qty="-1" data-key="${item.key}" aria-label="Giảm số lượng">−</button><span class="qty-value">${item.quantity}</span><button class="qty-btn" data-qty="1" data-key="${item.key}" aria-label="Tăng số lượng">+</button></div>
    </article>`).join("");
  document.getElementById("cartTotal").textContent = money(cart.reduce((sum,item)=>sum+item.price*item.quantity,0));
  document.getElementById("checkoutSummary").innerHTML = cart.length ? `Bạn đang gửi yêu cầu tư vấn cho <strong>${count} xe</strong>, tổng giá tham khảo <strong>${money(cart.reduce((sum,item)=>sum+item.price*item.quantity,0))}</strong>.` : "Giỏ xe đang trống.";
}
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  const focusTarget = modal.querySelector("button, input, select, textarea");
  if (focusTarget) focusTarget.focus();
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden","true");
  if (!document.querySelector(".modal-backdrop.is-open")) document.body.classList.remove("modal-open");
}
document.addEventListener("click", event => {
  const filter = event.target.closest(".filter-btn");
  if (filter) {
    activeFilter = filter.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.toggle("active", btn === filter));
    renderVehicles();
    return;
  }
  const flip = event.target.closest(".flip-btn");
  if (flip) { flipCard(flip.dataset.id); return; }
  const details = event.target.closest(".details-btn");
  if (details) { renderVehicleDetails(details.dataset.id); return; }
  const detailAdd = event.target.closest(".detail-add");
  if (detailAdd) { addToCart(detailAdd.dataset.id, true); closeModal("vehicleDetailModal"); return; }
  const add = event.target.closest(".quick-add");
  if (add) { addToCart(add.dataset.id, false); return; }
  const configuredAdd = event.target.closest(".add-configured");
  if (configuredAdd) { addToCart(configuredAdd.dataset.id, true); return; }
  const detailSwatch = event.target.closest(".detail-swatch");
  if (detailSwatch) {
    const card = document.querySelector(`[data-vehicle-id="${detailSwatch.dataset.id}"]`);
    card.dataset.colorIndex = detailSwatch.dataset.detailColor;
    document.querySelectorAll(".detail-swatch").forEach(btn => btn.setAttribute("aria-pressed", String(btn === detailSwatch)));
    const vehicle = vehicles.find(v => v.id === detailSwatch.dataset.id);
    const selected = getConfiguredVehicle(vehicle, getCardState(vehicle.id));
    document.getElementById("selectedColorName").textContent = selected.color.name;
    document.getElementById("detailSelection").textContent = `${selected.color.name} · ${selected.trim.name}`;
    return;
  }
  const swatch = event.target.closest(".color-swatch");
  if (swatch) {
    const card = document.querySelector(`[data-vehicle-id="${swatch.dataset.id}"]`);
    card.dataset.colorIndex = swatch.dataset.color;
    card.querySelectorAll(".color-swatch").forEach(btn => btn.setAttribute("aria-pressed", String(btn === swatch)));
    return;
  }
  const qty = event.target.closest(".qty-btn");
  if (qty) {
    const item = cart.find(i=>i.key===qty.dataset.key);
    if (item) { item.quantity += Number(qty.dataset.qty); if (item.quantity <= 0) cart.splice(cart.indexOf(item),1); renderCart(); }
    return;
  }
  const remove = event.target.closest(".remove-item");
  if (remove) { const index=cart.findIndex(i=>i.key===remove.dataset.remove); if(index>=0) cart.splice(index,1); renderCart(); showToast("Đã xóa xe khỏi giỏ."); return; }
  const close = event.target.closest("[data-close]");
  if (close) { closeModal(close.dataset.close); return; }
  if (event.target.classList.contains("modal-backdrop")) { closeModal(event.target.id); return; }
});
document.addEventListener("change", event => {
  const detailSelect = event.target.closest("[data-detail-trim]");
  if (detailSelect) {
    const id = detailSelect.dataset.detailTrim;
    const card = document.querySelector(`[data-vehicle-id="${id}"]`);
    card.dataset.trimIndex = detailSelect.value;
    const vehicle = vehicles.find(v => v.id === id);
    const selected = getConfiguredVehicle(vehicle, getCardState(id));
    document.getElementById("detailPrice").textContent = money(selected.price);
    document.getElementById("detailSelection").textContent = `${selected.color.name} · ${selected.trim.name}`;
    return;
  }
});
document.getElementById("vehicleSearch").addEventListener("input", event => { searchTerm = event.target.value.trim().toLowerCase(); renderVehicles(); });
document.getElementById("openCart").addEventListener("click", () => { renderCart(); openModal("cartModal"); });
document.getElementById("checkoutButton").addEventListener("click", () => {
  if (!cart.length) { showToast("Giỏ xe đang trống. Hãy chọn xe trước khi đặt mua."); return; }
  closeModal("cartModal"); renderCart(); openModal("checkoutModal");
});
document.getElementById("checkoutForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!cart.length) { closeModal("checkoutModal"); showToast("Giỏ xe đang trống."); return; }
  const formData = new FormData(event.currentTarget);
  const reference = "AV-" + Math.random().toString(36).slice(2,8).toUpperCase();
  const name = String(formData.get("customerName") || "").trim();
  if (!name) return;
  closeModal("checkoutModal");
  cart.length = 0;
  renderCart();
  event.currentTarget.reset();
  showToast(`Đã tạo yêu cầu demo ${reference}. Cảm ơn ${name}!`);
});
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get("name");
  event.currentTarget.reset();
  showToast(`Cảm ơn ${String(name).trim()}! Yêu cầu demo đã được ghi nhận trên giao diện.`);
});
const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");
menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
});
primaryNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  primaryNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded","false");
}));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") document.querySelectorAll(".modal-backdrop.is-open").forEach(modal=>closeModal(modal.id));
});
renderVehicles();
renderCart();
if (window.AOS) {
  AOS.init({
    duration: 650,
    once: true,
    offset: 65,
    easing: "ease-out-cubic",
    disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  });
}
