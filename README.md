# 🚗 AUTO VIỆT — Showroom ô tô trực tuyến

Website tĩnh giới thiệu các mẫu ô tô, cung cấp thông tin cấu hình xe và mô phỏng một số luồng tương tác mua hàng. Dự án được xây dựng bằng **HTML5, CSS3 và JavaScript**, có giao diện responsive cho máy tính, máy tính bảng và điện thoại.

## 🔗 Live Preview

**(https://vercel.com/overthinking123/minhanhnguyendo125002511)**

> Nếu website chưa được triển khai, hãy bật GitHub Pages trong `Settings → Pages` trước khi sử dụng liên kết này.

## ✨ Chức năng chính

- **Giao diện responsive:** bố cục thích ứng với nhiều kích thước màn hình; menu điều hướng hỗ trợ thiết bị di động.
- **Điều hướng trang:** chuyển đến các khu vực nội dung thông qua menu.
- **Tìm kiếm và lọc xe:** tìm theo tên xe và lọc theo dòng xe.
- **Thẻ sản phẩm tương tác:** lật thẻ để xem thông số kỹ thuật của từng mẫu xe.
- **Tùy chỉnh cấu hình:** chọn màu ngoại thất và phiên bản xe; giá tham khảo thay đổi theo phiên bản được chọn.
- **Giỏ xe mô phỏng:** thêm xe, tăng hoặc giảm số lượng, xóa sản phẩm và tính tổng giá tham khảo.
- **Biểu mẫu liên hệ:** mô phỏng luồng yêu cầu tư vấn hoặc đặt mua.
- **Hiệu ứng giao diện:** sử dụng Animate.css và AOS để tạo hiệu ứng chuyển động.
- **Trải nghiệm người dùng:** hỗ trợ các trạng thái tương tác và hiệu ứng phù hợp với giao diện.

## 🛠️ Công nghệ sử dụng

| Công nghệ          | Vai trò                                                   |
| ------------------ | --------------------------------------------------------- |
| HTML5              | Xây dựng cấu trúc và nội dung trang web                   |
| CSS3               | Thiết kế giao diện, hiệu ứng và bố cục responsive         |
| JavaScript         | Xử lý tìm kiếm, lọc xe, cấu hình xe, giỏ hàng và biểu mẫu |
| Flexbox / CSS Grid | Sắp xếp bố cục giao diện                                  |
| Animate.css        | Tạo hiệu ứng chuyển động                                  |
| AOS                | Tạo hiệu ứng khi cuộn trang                               |
| Google Fonts       | Hiển thị kiểu chữ                                         |

## 📁 Cấu trúc dự án

```text
MinhAnh_NguyenDo_125002511/
├── index.html       # Cấu trúc nội dung website
├── style.css        # Giao diện và responsive
├── script.js        # Dữ liệu xe và xử lý tương tác
├── README.md        # Hướng dẫn và mô tả dự án
└── PROMPT_LOG.md    # Nhật ký quá trình phát triển và kiểm thử
```

## ▶️ Hướng dẫn chạy trên máy tính

### Cách 1: Mở trực tiếp bằng trình duyệt

1. Tải repository về máy bằng cách chọn **Code → Download ZIP** trên GitHub.
2. Giải nén tệp ZIP.
3. Mở thư mục dự án.
4. Mở tệp `index.html` bằng trình duyệt web.

### Cách 2: Sử dụng Visual Studio Code

1. Cài đặt Visual Studio Code.
2. Mở thư mục dự án trong VS Code.
3. Cài tiện ích **Live Server** nếu máy chưa có.
4. Nhấp chuột phải vào `index.html`.
5. Chọn **Open with Live Server**.
6. Trình duyệt sẽ mở website để bạn kiểm tra các chức năng.

**Lưu ý:** Google Fonts, hình ảnh xe, Animate.css và AOS có thể cần kết nối Internet để tải đầy đủ tài nguyên.

## 🌐 Hướng dẫn triển khai GitHub Pages

1. Đưa các tệp dự án lên thư mục gốc của repository GitHub.
2. Mở repository và chọn **Settings**.
3. Trong menu bên trái, chọn **Pages**.
4. Tại mục **Build and deployment**, chọn:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`
   - **Folder:** `/(root)`
5. Nhấn **Save**.
6. Chờ GitHub hoàn tất triển khai.
7. Mở địa chỉ website được hiển thị trong phần Pages và kiểm tra các chức năng.

Sau khi cập nhật mã nguồn, hãy commit hoặc push thay đổi lên nhánh được cấu hình để GitHub Pages triển khai phiên bản mới.

## 🧪 Checklist kiểm thử

Các hạng mục cần kiểm tra trước khi nộp dự án:

- [x] Website tải được trên trình duyệt.
- [x] Menu điều hướng hoạt động trên máy tính và điện thoại.
- [x] Tìm kiếm theo tên xe hoạt động.
- [x] Bộ lọc dòng xe hoạt động.
- [x] Thẻ xe lật được và hiển thị thông số kỹ thuật.
- [x] Chọn phiên bản xe cập nhật giá tham khảo chính xác.
- [x] Chọn màu ngoại thất hoạt động.
- [x] Có thể thêm xe vào giỏ, thay đổi số lượng và xóa xe.
- [x] Tổng giá tham khảo được tính lại khi giỏ xe thay đổi.
- [x] Biểu mẫu hiển thị và xử lý tương tác như thiết kế.
- [x] Hình ảnh, CSS, JavaScript và hiệu ứng tải đúng trên GitHub Pages.
- [x] Không có lỗi JavaScript nghiêm trọng trong Console của trình duyệt.

## 📝 Nhật ký phát triển

Tệp [`PROMPT_LOG.md`](./PROMPT_LOG.md) ghi lại quá trình phát triển, các lần chỉnh sửa và checklist kiểm thử của dự án.

## ⚠️ Giới hạn của dự án

- Đây là website tĩnh phục vụ mục đích học tập và trình diễn giao diện.
- Giá xe và thông số sản phẩm chỉ mang tính minh họa, không đại diện cho báo giá chính thức.
- Giỏ xe là chức năng mô phỏng trên giao diện; dữ liệu không được đảm bảo lưu lại sau khi tải lại trang.
- Biểu mẫu chưa kết nối máy chủ hoặc cơ sở dữ liệu để lưu và xử lý yêu cầu thực tế.
- Dự án chưa tích hợp thanh toán trực tuyến, quản lý đơn hàng hoặc quy trình mua xe thực tế.

## 🎓 Mục tiêu dự án

Dự án giúp vận dụng kiến thức HTML5, CSS3 và JavaScript để xây dựng website giới thiệu sản phẩm, thiết kế giao diện responsive, xử lý các tương tác phía người dùng và triển khai website tĩnh bằng GitHub Pages.
