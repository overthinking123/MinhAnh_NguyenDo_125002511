# PROMPT LOG — AUTO VIỆT

- **Họ và tên:** Nguyễn Đỗ Minh Anh
- **MSSV:** 125002511
- **Tên website:** AUTO VIỆT — Website giới thiệu và mô phỏng đặt mua ô tô
- **Công cụ AI:** ChatGPT
- **Công nghệ:** HTML5, CSS3, JavaScript, Animate.css, AOS, GitHub Pages

## 1. Prompt ban đầu

> Hãy xây dựng một website giới thiệu và mô phỏng bán ô tô tên AUTO VIỆT bằng HTML, CSS và JavaScript. Website cần giao diện hiện đại, responsive, có header, nav, main, section/article, footer; sử dụng CSS Variables, Flexbox, Grid, hiệu ứng hover/focus, Animate.css và AOS. Hãy tổ chức mã nguồn thành index.html, style.css, script.js, README.md và PROMPT_LOG.md. Hướng dẫn cách đưa website lên GitHub Pages.

## 2. Các lần tinh chỉnh prompt

### Lần 1 — Chuyển chủ đề website
> Chuyển giao diện từ cửa hàng linh kiện máy tính sang showroom ô tô. Thiết kế phong cách cao cấp, nền tối, điểm nhấn xanh neon, có hero banner, bộ sưu tập xe, giới thiệu dịch vụ và liên hệ.

**Kết quả mong muốn:** Nội dung, tên thương hiệu, danh mục và thông tin sản phẩm nhất quán với chủ đề ô tô.

### Lần 2 — Thẻ sản phẩm lật mặt
> Mỗi mẫu xe có thẻ hai mặt. Mặt trước hiển thị hình ảnh, tên xe, giá tham khảo và thông tin nổi bật. Khi nhấn xem chi tiết, thẻ lật để hiển thị thông số kỹ thuật, màu ngoại thất và phiên bản.

**Kết quả mong muốn:** Người xem có thể khám phá thông tin xe mà không phải rời khỏi trang danh mục.

### Lần 3 — Giỏ xe và đặt yêu cầu mua
> Bổ sung chức năng thêm xe vào giỏ, tăng giảm số lượng, xóa sản phẩm, tính tổng giá tham khảo và biểu mẫu đặt mua/tư vấn. Cho phép chọn màu và phiên bản xe trước khi thêm vào giỏ. Thông báo rõ đây là bản mô phỏng, chưa tích hợp thanh toán hoặc máy chủ.

**Kết quả mong muốn:** Các thao tác chính hoạt động ở phía trình duyệt, thông tin cấu hình được giữ trong giỏ trong phiên hiện tại.

### Lần 4 — Responsive và khả năng truy cập
> Kiểm tra bố cục trên desktop, tablet và điện thoại. Thêm menu mobile, trạng thái hover/focus, nhãn cho biểu mẫu, nút có aria-label, đóng hộp thoại bằng Escape và hỗ trợ prefers-reduced-motion.

**Kết quả mong muốn:** Website dễ sử dụng trên nhiều kích thước màn hình và có các trạng thái tương tác rõ ràng.

## 3. Lỗi hoặc thách thức cần kiểm tra

- Hình ảnh từ nguồn bên ngoài có thể không tải nếu thiết bị không có kết nối Internet hoặc nguồn ảnh thay đổi.
- Giá xe trong dự án là dữ liệu minh họa, không phải báo giá thực tế.
- Giỏ hàng và yêu cầu đặt mua chỉ chạy trong trình duyệt; chưa có cơ sở dữ liệu, thanh toán hoặc gửi yêu cầu đến nhân viên.
- Cần kiểm thử lật thẻ, chọn màu/phiên bản, cập nhật giỏ và gửi biểu mẫu trên trình duyệt thực tế.

## 4. Prompt hỗ trợ gỡ lỗi

> Hãy kiểm tra luồng tương tác JavaScript của website: lật thẻ sản phẩm, chọn màu và phiên bản, thêm vào giỏ, tăng/giảm số lượng, xóa xe, tính tổng giá và gửi yêu cầu tư vấn. Tìm lỗi liên kết giữa dữ liệu cấu hình và giỏ hàng, kiểm tra trạng thái modal, và đề xuất cách tái hiện lỗi trên trình duyệt.

## 5. Tự đánh giá và kiểm thử

Website được tổ chức thành các file HTML, CSS và JavaScript riêng biệt. Các chức năng được viết theo hướng mô phỏng học tập. Trước khi nộp, cần tự kiểm tra:
- [ ] Các liên kết điều hướng đến đúng phần.
- [ ] Bộ lọc danh mục và tìm kiếm xe hoạt động.
- [ ] Thẻ lật qua lại được và hiển thị thông số.
- [ ] Chọn màu và phiên bản, giá thay đổi theo phiên bản.
- [ ] Thêm xe vào giỏ; tăng/giảm số lượng; xóa xe; tổng tiền cập nhật.
- [ ] Form đặt mua kiểm tra dữ liệu bắt buộc và hiển thị thông báo xác nhận.
- [ ] Giao diện không tràn trên màn hình hẹp.
- [ ] GitHub Pages mở được và tài nguyên CSS/JS tải thành công.

**Ghi chú:** Chỉ đánh dấu các mục đã tự kiểm thử thành công sau khi thực sự chạy thử trên trình duyệt. Không sử dụng website này để nhận thanh toán hoặc xử lý giao dịch thật.


### Lần 5 — Sửa trải nghiệm thẻ xe và hộp thoại cấu hình
> Điều chỉnh giao diện theo phản hồi khi chạy thử: đưa nút lật thẻ (↻) lên góc trên bên phải ảnh xe; tách nút “Xem chi tiết” thành hộp thoại riêng để xem thông số, chọn màu ngoại thất và phiên bản; cập nhật giá theo phiên bản đã chọn; chuyển phần chọn màu/phiên bản ra khỏi mặt sau thẻ để tránh bị cắt hoặc che ở đáy thẻ.

**Kết quả mong muốn:** Mặt sau chỉ hiển thị thông số xe gọn gàng; hộp thoại chi tiết có thể cuộn, thích ứng với điện thoại và cho phép thêm đúng cấu hình đang chọn vào giỏ hàng.

**Lưu ý kiểm thử:** Đã kiểm tra cú pháp JavaScript bằng `node --check`. Cần mở website trên trình duyệt sau khi cập nhật để xác nhận trực quan các thao tác lật thẻ, chọn màu, chọn phiên bản và thêm cấu hình vào giỏ.


### Lần 6 — Khắc phục animation khi cuộn trang
> Kiểm tra vì sao hiệu ứng AOS không xuất hiện ở các thẻ xe được tạo bằng JavaScript và ở phần liên hệ/chân trang. Gắn `data-aos="fade-up"` cho từng thẻ xe được render động, thêm hiệu ứng cho phần liên hệ và footer, giữ `AOS.refreshHard()` sau khi render danh mục, đồng thời tôn trọng thiết lập `prefers-reduced-motion`.

**Kết quả chỉnh sửa:** Các thẻ xe được gắn AOS ngay khi tạo; phần liên hệ và footer có hiệu ứng cuộn. Hộp thoại giỏ xe vẫn dùng hiệu ứng mở bằng CSS riêng, không phụ thuộc AOS.

**Lưu ý kiểm thử:** Đây là thay đổi mã nguồn; cần mở website trên trình duyệt, cuộn từ đầu đến cuối, lọc/tìm xe và mở giỏ để xác nhận trực quan trước khi đánh dấu hoàn tất.
