import { Survey } from '../types';

export const SURVEYS_LIST: Survey[] = [
  {
    id: 1,
    title: 'Thói quen mua sắm trực tuyến trên sàn TMĐT',
    category: 'Thương mại điện tử',
    description: 'Khảo sát tần suất mua hàng trên Shopee, Lazada, TikTok Shop và các phương thức thanh toán yêu thích.',
    iconName: 'ShoppingBag',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn thường mua sắm trên sàn thương mại điện tử nào nhiều nhất?',
        options: [
          { id: '1a', text: 'Shopee' },
          { id: '1b', text: 'TikTok Shop' },
          { id: '1c', text: 'Lazada' },
          { id: '1d', text: 'Tiki hoặc sàn khác' },
        ],
      },
      {
        id: 2,
        text: 'Tần suất bạn đặt hàng trực tuyến trong một tháng là bao nhiêu?',
        options: [
          { id: '2a', text: 'Hàng ngày hoặc cách ngày' },
          { id: '2b', text: '2 - 4 lần mỗi tháng' },
          { id: '2c', text: '1 lần mỗi tháng' },
          { id: '2d', text: 'Hiếm khi mua (dưới 1 lần/tháng)' },
        ],
      },
      {
        id: 3,
        text: 'Yếu tố nào quyết định lớn nhất khi bạn chọn mua một món hàng?',
        options: [
          { id: '3a', text: 'Mã giảm giá và freeship' },
          { id: '3b', text: 'Đánh giá và lượt bán của shop' },
          { id: '3c', text: 'Chất lượng sản phẩm và thương hiệu' },
          { id: '3d', text: 'Tốc độ giao hàng hỏa tốc' },
        ],
      },
      {
        id: 4,
        text: 'Bạn ưu tiên phương thức thanh toán nào khi mua sắm online?',
        options: [
          { id: '4a', text: 'Thanh toán khi nhận hàng (COD)' },
          { id: '4b', text: 'Ví điện tử (MoMo, ShopeePay, ZaloPay)' },
          { id: '4c', text: 'Chuyển khoản ngân hàng / VietQR' },
          { id: '4d', text: 'Thẻ tín dụng / Thẻ ghi nợ' },
        ],
      },
      {
        id: 5,
        text: 'Theo bạn, sàn thương mại điện tử cần cải thiện điều gì nhất để trải nghiệm mua sắm của bạn tốt hơn?',
        type: 'text',
        placeholder: 'Nhập nhận xét hoặc đề xuất của bạn (ví dụ: Phí ship rẻ hơn, giao hàng nhanh hơn...)',
        suggestions: [
          'Phí ship rẻ hơn & nhiều mã freeship',
          'Giao hàng nhanh và chuẩn hẹn',
          'Chính sách đổi trả dễ dàng',
          'Kiểm soát hàng giả chặt chẽ hơn'
        ],
        options: [
          { id: '5a', text: 'Phí ship rẻ hơn & nhiều mã freeship' },
          { id: '5b', text: 'Giao hàng nhanh và chuẩn hẹn' },
          { id: '5c', text: 'Chính sách đổi trả dễ dàng' },
          { id: '5d', text: 'Kiểm soát hàng giả chặt chẽ hơn' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Thói quen ăn uống & Dịch vụ đồ ăn hàng ngày',
    category: 'Ẩm thực & Đời sống',
    description: 'Tìm hiểu về thói quen ăn ngoài, tự nấu và sử dụng các ứng dụng đặt món ăn.',
    iconName: 'Utensils',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn dành bao nhiêu bữa trong tuần để tự nấu ăn tại nhà?',
        options: [
          { id: '1a', text: 'Hầu như tất cả các ngày (trên 10 bữa)' },
          { id: '1b', text: 'Khoảng 5 - 9 bữa' },
          { id: '1c', text: 'Chỉ 1 - 4 bữa cuối tuần' },
          { id: '1d', text: 'Hầu như không nấu, ăn ngoài 100%' },
        ],
      },
      {
        id: 2,
        text: 'Bạn thường sử dụng ứng dụng gọi món nào nhiều nhất?',
        options: [
          { id: '2a', text: 'ShopeeFood' },
          { id: '2b', text: 'GrabFood' },
          { id: '2c', text: 'Baemin / BeFood / GoFood' },
          { id: '2d', text: 'Không dùng app, tự mua trực tiếp' },
        ],
      },
      {
        id: 3,
        text: 'Mức giá một bữa ăn trưa/tối thông thường của bạn là bao nhiêu?',
        options: [
          { id: '3a', text: 'Dưới 35.000đ' },
          { id: '3b', text: 'Từ 35.000đ - 60.000đ' },
          { id: '3c', text: 'Từ 60.000đ - 120.000đ' },
          { id: '3d', text: 'Trên 120.000đ' },
        ],
      },
      {
        id: 4,
        text: 'Khi chọn quán ăn, điều gì khiến bạn quan tâm nhất?',
        options: [
          { id: '4a', text: 'Vệ sinh an toàn thực phẩm & độ ngon' },
          { id: '4b', text: 'Giá cả hợp túi tiền' },
          { id: '4c', text: 'Không gian đẹp, thoáng mát, check-in' },
          { id: '4d', text: 'Phục vụ nhanh nhẹn, thân thiện' },
        ],
      },
      {
        id: 5,
        text: 'Hãy chia sẻ món ăn yêu thích nhất hoặc quán ăn bạn thường xuyên ghé qua:',
        type: 'text',
        placeholder: 'Nhập tên món ăn hoặc quán ăn quen thuộc của bạn...',
        suggestions: [
          'Phở bò / Bún bò Huế truyền thống',
          'Cơm tấm sườn bì chả',
          'Trà sữa & đồ ăn vặt vỉa hè',
          'Lẩu & nướng BBQ cùng bạn bè'
        ],
        options: [
          { id: '5a', text: 'Phở bò / Bún bò Huế' },
          { id: '5b', text: 'Cơm tấm sườn bì chả' },
          { id: '5c', text: 'Trà sữa & đồ ăn vặt' },
          { id: '5d', text: 'Lẩu & đồ nướng BBQ' },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Sử dụng mạng xã hội & Video ngắn (TikTok, Reels, Shorts)',
    category: 'Truyền thông số',
    description: 'Thống kê thời lượng lướt mạng xã hội và nội dung thu hút người dùng hiện nay.',
    iconName: 'Smartphone',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn dành trung bình bao nhiêu giờ mỗi ngày cho mạng xã hội?',
        options: [
          { id: '1a', text: 'Dưới 1 tiếng' },
          { id: '1b', text: 'Từ 1 - 3 tiếng' },
          { id: '1c', text: 'Từ 3 - 5 tiếng' },
          { id: '1d', text: 'Trên 5 tiếng mỗi ngày' },
        ],
      },
      {
        id: 2,
        text: 'Nền tảng mạng xã hội nào bạn mở đầu tiên vào buổi sáng?',
        options: [
          { id: '2a', text: 'Facebook / Messenger' },
          { id: '2b', text: 'TikTok' },
          { id: '2c', text: 'Zalo' },
          { id: '2d', text: 'Instagram / YouTube' },
        ],
      },
      {
        id: 3,
        text: 'Chủ đề video ngắn bạn thích xem nhất là gì?',
        options: [
          { id: '3a', text: 'Hài hước, giải trí thư giãn' },
          { id: '3b', text: 'Review đồ ăn, du lịch, đời sống' },
          { id: '3c', text: 'Tin tức thời sự nóng hổi' },
          { id: '3d', text: 'Kiến thức, học ngoại ngữ, tài chính' },
        ],
      },
      {
        id: 4,
        text: 'Bạn đã từng mua sản phẩm sau khi xem video review trên mạng xã hội chưa?',
        options: [
          { id: '4a', text: 'Rất nhiều lần' },
          { id: '4b', text: 'Đã mua một vài lần' },
          { id: '4c', text: 'Chỉ xem tham khảo chứ chưa mua' },
          { id: '4d', text: 'Không bao giờ tin review trên mạng' },
        ],
      },
      {
        id: 5,
        text: 'Nội dung hoặc kênh sáng tạo nội dung (creator) nào bạn hay theo dõi nhất?',
        type: 'text',
        placeholder: 'Nhập tên kênh hoặc chủ đề nội dung bạn yêu thích...',
        suggestions: [
          'Kênh hài kịch & giải trí đời sống',
          'Kênh podcast kỹ năng & kiến thức',
          'Kênh ẩm thực & trải nghiệm du lịch',
          'Kênh review công nghệ & đồ gia dụng'
        ],
        options: [
          { id: '5a', text: 'Kênh hài hước & giải trí' },
          { id: '5b', text: 'Kênh học hỏi kiến thức & kỹ năng' },
          { id: '5c', text: 'Kênh ẩm thực & du lịch' },
          { id: '5d', text: 'Kênh âm nhạc & thể thao' },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Phương tiện di chuyển & Xu hướng xe điện',
    category: 'Giao thông & Đô thị',
    description: 'Đánh giá thói quen đi lại hàng ngày và mức độ quan tâm đến xe máy điện, ô tô điện.',
    iconName: 'Car',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Phương tiện di chuyển chính hàng ngày của bạn là gì?',
        options: [
          { id: '1a', text: 'Xe máy xăng' },
          { id: '1b', text: 'Xe máy điện (VinFast, Dat Bike, Yadea...)' },
          { id: '1c', text: 'Ô tô cá nhân' },
          { id: '1d', text: 'Xe buýt / Tàu điện / Xe ôm công nghệ' },
        ],
      },
      {
        id: 2,
        text: 'Bạn di chuyển trung bình bao nhiêu km mỗi ngày?',
        options: [
          { id: '2a', text: 'Dưới 10 km' },
          { id: '2b', text: 'Từ 10 - 25 km' },
          { id: '2c', text: 'Từ 25 - 50 km' },
          { id: '2d', text: 'Trên 50 km' },
        ],
      },
      {
        id: 3,
        text: 'Bạn có dự định chuyển sang sử dụng xe điện trong 2 năm tới không?',
        options: [
          { id: '3a', text: 'Đã và đang sử dụng xe điện' },
          { id: '3b', text: 'Chắc chắn sẽ mua' },
          { id: '3c', text: 'Đang cân nhắc tùy trạm sạc' },
          { id: '3d', text: 'Chưa có ý định, vẫn thích xe xăng' },
        ],
      },
      {
        id: 4,
        text: 'Rào cản lớn nhất đối với bạn khi cân nhắc mua xe điện là gì?',
        options: [
          { id: '4a', text: 'Số lượng và khoảng cách trạm sạc' },
          { id: '4b', text: 'Độ bền và chi phí thay pin' },
          { id: '4c', text: 'Giá bán ban đầu' },
          { id: '4d', text: 'Thời gian sạc đầy pin' },
        ],
      },
      {
        id: 5,
        text: 'Bạn đánh giá như thế nào về dịch vụ taxi điện (như Xanh SM) hiện nay?',
        options: [
          { id: '5a', text: 'Rất hài lòng về thái độ và độ êm' },
          { id: '5b', text: 'Tốt, giá cả cạnh tranh' },
          { id: '5c', text: 'Bình thường như các hãng khác' },
          { id: '5d', text: 'Chưa từng trải nghiệm' },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Dịch vụ ngân hàng số & Ứng dụng thanh toán',
    category: 'Tài chính & Ngân hàng',
    description: 'Thói quen chuyển khoản VietQR, sử dụng app ngân hàng và gửi tiết kiệm online.',
    iconName: 'CreditCard',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Ngân hàng số nào bạn đang sử dụng làm tài khoản nhận lương/giao dịch chính?',
        options: [
          { id: '1a', text: 'Vietcombank' },
          { id: '1b', text: 'Techcombank' },
          { id: '1c', text: 'MB Bank' },
          { id: '1d', text: 'VietinBank, BIDV hoặc VPBank' },
        ],
      },
      {
        id: 2,
        text: 'Tính năng nào trên app ngân hàng bạn sử dụng thường xuyên nhất?',
        options: [
          { id: '2a', text: 'Chuyển tiền quét mã VietQR' },
          { id: '2b', text: 'Thanh toán hóa đơn điện/nước/internet' },
          { id: '2c', text: 'Gửi tiết kiệm online sinh lời' },
          { id: '2d', text: 'Kiểm tra biến động số dư tài khoản' },
        ],
      },
      {
        id: 3,
        text: 'Bạn có mang theo nhiều tiền mặt khi ra khỏi nhà không?',
        options: [
          { id: '3a', text: 'Hầu như không mang hoặc dưới 50.000đ' },
          { id: '3b', text: 'Mang từ 100.000đ - 500.000đ phòng hờ' },
          { id: '3c', text: 'Mang trên 1.000.000đ tiền mặt' },
          { id: '3d', text: 'Chỉ mang điện thoại có app ngân hàng' },
        ],
      },
      {
        id: 4,
        text: 'Trải nghiệm nào khiến bạn hài lòng nhất ở một ứng dụng ngân hàng?',
        options: [
          { id: '4a', text: 'Giao diện mượt mà, chuyển tiền 1 chạm' },
          { id: '4b', text: 'Bảo mật an toàn và sinh trắc học vân tay/FaceID' },
          { id: '4c', text: 'Miễn 100% phí duy trì và chuyển khoản' },
          { id: '4d', text: 'Nhiều ưu đãi hoàn tiền và tích điểm' },
        ],
      },
      {
        id: 5,
        text: 'Theo bạn, ứng dụng ngân hàng số cần bổ sung hoặc hoàn thiện tính năng gì nhất?',
        type: 'text',
        placeholder: 'Nhập tính năng bạn muốn ngân hàng phát triển thêm...',
        suggestions: [
          'Chuyển tiền nhanh không cần số tài khoản',
          'Quản lý chi tiêu tự động thông minh',
          'Tích hợp đầu tư và tiết kiệm linh hoạt',
          'Bảo mật sinh trắc học mượt mà hơn'
        ],
        options: [
          { id: '5a', text: 'Quản lý chi tiêu thông minh' },
          { id: '5b', text: 'Đầu tư và tiết kiệm linh hoạt' },
          { id: '5c', text: 'Chuyển tiền 1 chạm VietQR' },
          { id: '5d', text: 'Hỗ trợ khách hàng 24/7 trực tiếp' },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Giải trí & Nền tảng xem phim trực tuyến',
    category: 'Giải trí & Nghệ thuật',
    description: 'Thói quen xem phim qua Netflix, YouTube, rạp chiếu phim và nhu cầu giải trí.',
    iconName: 'Tv',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Nền tảng xem phim, video trực tuyến bạn ưa thích nhất là gì?',
        options: [
          { id: '1a', text: 'YouTube' },
          { id: '1b', text: 'Netflix' },
          { id: '1c', text: 'VieON / FPT Play / TV360' },
          { id: '1d', text: 'Các trang web xem phim miễn phí' },
        ],
      },
      {
        id: 2,
        text: 'Bạn thường đi xem phim tại rạp chiếu phim bao lâu một lần?',
        options: [
          { id: '2a', text: '1 - 2 lần mỗi tháng' },
          { id: '2b', text: 'Chỉ đi khi có phim bom tấn cực hot' },
          { id: '2c', text: 'Khoảng 2 - 3 tháng một lần' },
          { id: '2d', text: 'Rất hiếm khi hoặc không bao giờ đi' },
        ],
      },
      {
        id: 3,
        text: 'Thể loại phim nào thu hút bạn nhất?',
        options: [
          { id: '3a', text: 'Hành động, khoa học viễn tưởng' },
          { id: '3b', text: 'Tình cảm, lãng mạn Hàn Quốc/Trung Quốc' },
          { id: '3c', text: 'Kinh dị, trinh thám, giật gân' },
          { id: '3d', text: 'Hài hước, hoạt hình anime' },
        ],
      },
      {
        id: 4,
        text: 'Bạn thường xem phim vào khung thời gian nào trong ngày?',
        options: [
          { id: '4a', text: 'Buổi tối trước khi đi ngủ (21h - 24h)' },
          { id: '4b', text: 'Buổi chiều tối sau giờ học/làm' },
          { id: '4c', text: 'Cuối tuần thứ 7, Chủ Nhật' },
          { id: '4d', text: 'Xem vào giờ nghỉ trưa' },
        ],
      },
      {
        id: 5,
        text: 'Bạn có sẵn sàng chi trả gói thuê bao xem phim chất lượng 4K không?',
        options: [
          { id: '5a', text: 'Sẵn sàng chi từ 100k - 260k/tháng' },
          { id: '5b', text: 'Chung tiền mua gói gia đình tiết kiệm' },
          { id: '5c', text: 'Chỉ dùng gói miễn phí có quảng cáo' },
          { id: '5d', text: 'Không chi tiền cho dịch vụ phim' },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Chăm sóc sức khỏe & Thể dục thể thao',
    category: 'Sức khỏe & Đời sống',
    description: 'Thói quen rèn luyện thể chất, chế độ sinh hoạt và các môn thể thao yêu thích.',
    iconName: 'Activity',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn tập luyện thể dục thể thao bao nhiêu buổi mỗi tuần?',
        options: [
          { id: '1a', text: 'Hầu như mỗi ngày (5 - 7 buổi)' },
          { id: '1b', text: '3 - 4 buổi mỗi tuần' },
          { id: '1c', text: '1 - 2 buổi cuối tuần' },
          { id: '1d', text: 'Hiếm khi hoặc không tập thể thao' },
        ],
      },
      {
        id: 2,
        text: 'Bộ môn rèn luyện sức khỏe yêu thích của bạn là gì?',
        options: [
          { id: '2a', text: 'Chạy bộ / Đi bộ ngoài trời' },
          { id: '2b', text: 'Gym / Fitness / Thể hình' },
          { id: '2c', text: 'Cầu lông / Pickleball / Bóng đá' },
          { id: '2d', text: 'Yoga / Pilates / Bơi lội' },
        ],
      },
      {
        id: 3,
        text: 'Bạn có sử dụng đồng hồ thông minh (Smartwatch) theo dõi sức khỏe không?',
        options: [
          { id: '3a', text: 'Có, đeo hàng ngày để đếm bước & giấc ngủ' },
          { id: '3b', text: 'Chỉ đeo khi đi tập thể thao' },
          { id: '3c', text: 'Chưa có nhưng muốn mua' },
          { id: '3d', text: 'Không quan tâm đến thiết bị này' },
        ],
      },
      {
        id: 4,
        text: 'Bạn ngủ trung bình bao nhiêu tiếng mỗi đêm?',
        options: [
          { id: '4a', text: 'Dưới 6 tiếng' },
          { id: '4b', text: 'Từ 6 - 8 tiếng (đủ giấc)' },
          { id: '4c', text: 'Trên 8 tiếng' },
          { id: '4d', text: 'Giờ giấc thất thường, hay thức khuya' },
        ],
      },
      {
        id: 5,
        text: 'Hãy chia sẻ thói quen rèn luyện sức khỏe hoặc môn thể thao bạn muốn thử sức trong tương lai:',
        type: 'text',
        placeholder: 'Nhập thói quen rèn luyện thể chất hoặc mục tiêu sức khỏe của bạn...',
        suggestions: [
          'Chạy bộ 5km mỗi tuần nâng cao thể lực',
          'Tập Pickleball / Cầu lông cùng bạn bè',
          'Học Yoga / Pilates cải thiện vóc dáng',
          'Tập Gym tăng cơ bắp & ăn uống healthy'
        ],
        options: [
          { id: '5a', text: 'Chạy bộ ngoài trời' },
          { id: '5b', text: 'Chơi Pickleball / Cầu lông' },
          { id: '5c', text: 'Tập Yoga / Pilates' },
          { id: '5d', text: 'Tập Gym & Thể hình' },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Du lịch & Nghỉ dưỡng trong nước',
    category: 'Du lịch & Khách sạn',
    description: 'Thị hiếu du lịch, địa điểm yêu thích và xu hướng đặt phòng, tour tự túc.',
    iconName: 'Compass',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Một năm bạn thường đi du lịch xa bao nhiêu chuyến?',
        options: [
          { id: '1a', text: '1 - 2 chuyến' },
          { id: '1b', text: '3 - 4 chuyến' },
          { id: '1c', text: 'Trên 5 chuyến' },
          { id: '1d', text: 'Chưa có điều kiện đi trong năm qua' },
        ],
      },
      {
        id: 2,
        text: 'Bạn thích hình thức du lịch nào hơn?',
        options: [
          { id: '2a', text: 'Du lịch tự túc, khám phá trải nghiệm' },
          { id: '2b', text: 'Nghỉ dưỡng tại resort cao cấp bên biển' },
          { id: '2c', text: 'Đi theo tour trọn gói có hướng dẫn viên' },
          { id: '2d', text: 'Cắm trại (camping/glamping) hòa mình vào thiên nhiên' },
        ],
      },
      {
        id: 3,
        text: 'Điểm đến du lịch nào ở Việt Nam bạn muốn ghé thăm nhất tiếp theo?',
        options: [
          { id: '3a', text: 'Đà Lạt / Sapa (khí hậu se lạnh núi rừng)' },
          { id: '3b', text: 'Đà Nẵng / Hội An / Quy Nhơn' },
          { id: '3c', text: 'Phú Quốc / Nha Trang (biển đảo)' },
          { id: '3d', text: 'Hà Giang / Ninh Bình / Miền Tây sông nước' },
        ],
      },
      {
        id: 4,
        text: 'Bạn thường đặt vé máy bay và phòng khách sạn qua kênh nào?',
        options: [
          { id: '4a', text: 'Traveloka / Agoda / Booking.com' },
          { id: '4b', text: 'Đặt trực tiếp qua website hãng/khách sạn' },
          { id: '4c', text: 'Qua đại lý du lịch / Người quen' },
          { id: '4d', text: 'Tới nơi mới tìm chỗ ở trực tiếp' },
        ],
      },
      {
        id: 5,
        text: 'Hãy chia sẻ trải nghiệm du lịch đáng nhớ nhất hoặc vùng đất mơ ước bạn muốn đặt chân đến:',
        type: 'text',
        placeholder: 'Nhập địa điểm du lịch bạn mong muốn được khám phá...',
        suggestions: [
          'Chinh phục các cung đường Hà Giang hùng vĩ',
          'Nghỉ dưỡng biển Phú Quốc ngắm hoàng hôn',
          'Dạo phố cổ Hội An và thưởng thức ẩm thực Đà Nẵng',
          'Du lịch nước ngoài (Thái Lan, Nhật Bản, Hàn Quốc)'
        ],
        options: [
          { id: '5a', text: 'Cung đường Hà Giang' },
          { id: '5b', text: 'Kỳ nghỉ Phú Quốc' },
          { id: '5c', text: 'Phố cổ Hội An - Đà Nẵng' },
          { id: '5d', text: 'Du lịch quốc tế' },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Sử dụng smartphone & Thiết bị công nghệ cá nhân',
    category: 'Công nghệ & Điện thoại',
    description: 'Thị phần hệ điều hành iOS/Android, chu kỳ đổi điện thoại và phụ kiện đi kèm.',
    iconName: 'Laptop',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn đang sử dụng điện thoại chạy hệ điều hành nào?',
        options: [
          { id: '1a', text: 'iOS (Apple iPhone)' },
          { id: '1b', text: 'Android (Samsung, Xiaomi, Oppo, Vivo...)' },
          { id: '1c', text: 'Dùng song song cả 2 máy (iOS & Android)' },
          { id: '1d', text: 'Điện thoại phổ thông phím bấm' },
        ],
      },
      {
        id: 2,
        text: 'Chu kỳ bạn nâng cấp hoặc đổi điện thoại mới là bao lâu?',
        options: [
          { id: '2a', text: 'Khoảng 1 năm đổi một lần theo dòng mới' },
          { id: '2b', text: '2 - 3 năm đổi một lần' },
          { id: '2c', text: 'Khi nào máy cũ hỏng hoặc chậm mới đổi' },
          { id: '2d', text: 'Trên 4 năm' },
        ],
      },
      {
        id: 3,
        text: 'Tiêu chí nào quan trọng nhất khi bạn chọn mua smartphone?',
        options: [
          { id: '3a', text: 'Camera chụp ảnh và quay video đẹp' },
          { id: '3b', text: 'Hiệu năng mượt mà, chơi game khỏe' },
          { id: '3c', text: 'Pin trâu và sạc siêu nhanh' },
          { id: '3d', text: 'Thiết kế sang trọng, thương hiệu uy tín' },
        ],
      },
      {
        id: 4,
        text: 'Bạn sở hữu những phụ kiện công nghệ nào sau đây?',
        options: [
          { id: '4a', text: 'Tai nghe không dây True Wireless' },
          { id: '4b', text: 'Sạc dự phòng dung lượng lớn' },
          { id: '4c', text: 'Máy tính bảng (iPad/Tablet)' },
          { id: '4d', text: 'Có đầy đủ tất cả các thiết bị trên' },
        ],
      },
      {
        id: 5,
        text: 'Bạn thường mua điện thoại chính hãng ở đâu?',
        options: [
          { id: '5a', text: 'Thế Giới Di Động / Điện Thoại Vui' },
          { id: '5b', text: 'FPT Shop / CellphoneS / Viettel Store' },
          { id: '5c', text: 'Gian hàng chính hãng Mall trên sàn TMĐT' },
          { id: '5d', text: 'Cửa hàng xách tay / Hàng lướt qua sử dụng' },
        ],
      },
    ],
  },
  {
    id: 10,
    title: 'Dịch vụ giao hàng nhanh & Vận chuyển bưu phẩm',
    category: 'Vận tải & Logistics',
    description: 'Trải nghiệm dịch vụ giao hàng nhanh, thái độ shipper và thời gian nhận hàng.',
    iconName: 'Truck',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Đơn vị vận chuyển bưu phẩm nào bạn cảm thấy hài lòng nhất?',
        options: [
          { id: '1a', text: 'Giao Hàng Tiết Kiệm (GHTK)' },
          { id: '1b', text: 'Giao Hàng Nhanh (GHN)' },
          { id: '1c', text: 'J&T Express / Ninja Van / Viettel Post' },
          { id: '1d', text: 'SPX Express (Shopee Xpress)' },
        ],
      },
      {
        id: 2,
        text: 'Thời gian giao hàng tiêu chuẩn bạn mong muốn cho đơn nội tỉnh là bao lâu?',
        options: [
          { id: '2a', text: 'Giao trong ngày hoặc hỏa tốc 2 giờ' },
          { id: '2b', text: 'Sang ngày hôm sau (24 giờ)' },
          { id: '2c', text: '2 - 3 ngày là chấp nhận được' },
          { id: '2d', text: 'Không quá quan trọng, miễn là rẻ' },
        ],
      },
      {
        id: 3,
        text: 'Bạn đánh giá thế nào về thái độ phục vụ của nhân viên giao hàng (Shipper)?',
        options: [
          { id: '3a', text: 'Rất thân thiện, nhiệt tình gọi trước khi giao' },
          { id: '3b', text: 'Đa số lịch sự, thỉnh thoảng có vài trường hợp vội vã' },
          { id: '3c', text: 'Bình thường, chỉ giao đúng hàng' },
          { id: '3d', text: 'Từng gặp trải nghiệm không vui' },
        ],
      },
      {
        id: 4,
        text: 'Nếu shipper hỗ trợ cho bạn đồng kiểm tra hàng trước khi nhận, bạn thấy sao?',
        options: [
          { id: '4a', text: 'Rất tuyệt vời, yên tâm tuyệt đối' },
          { id: '4b', text: 'Tốt nhưng mất thời gian cả hai' },
          { id: '4c', text: 'Chỉ cần đối với hàng giá trị cao' },
          { id: '4d', text: 'Không quan trọng lắm' },
        ],
      },
      {
        id: 5,
        text: 'Bạn đã từng sử dụng tủ nhận hàng tự động (Smart Locker) chưa?',
        options: [
          { id: '5a', text: 'Đã dùng và thấy rất tiện lợi' },
          { id: '5b', text: 'Có thấy ở chung cư/công ty nhưng chưa dùng' },
          { id: '5c', text: 'Chưa từng thấy hoặc chưa biết cách dùng' },
          { id: '5d', text: 'Thích nhận trực tiếp từ shipper hơn' },
        ],
      },
    ],
  },
  {
    id: 11,
    title: 'Học tập trực tuyến & Nâng cao kỹ năng nghề nghiệp',
    category: 'Giáo dục & Kỹ năng',
    description: 'Nhu cầu học tiếng Anh, kỹ năng mềm, lập trình và khóa học online.',
    iconName: 'GraduationCap',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn quan tâm đến việc học thêm kỹ năng nào nhất hiện nay?',
        options: [
          { id: '1a', text: 'Ngoại ngữ (Tiếng Anh, Tiếng Trung, Tiếng Nhật)' },
          { id: '1b', text: 'Tin học, Lập trình, Trí tuệ nhân tạo (AI)' },
          { id: '1c', text: 'Marketing, Bán hàng, Kinh doanh online' },
          { id: '1d', text: 'Thiết kế đồ họa, Chỉnh sửa video' },
        ],
      },
      {
        id: 2,
        text: 'Hình thức học tập nào phù hợp nhất với thời gian biểu của bạn?',
        options: [
          { id: '2a', text: 'Tự học qua video bài giảng thu sẵn (Udemy, Coursera, YouTube)' },
          { id: '2b', text: 'Học qua Zoom/Google Meet tương tác trực tiếp với giáo viên' },
          { id: '2c', text: 'Học tại trung tâm hoặc lớp học offline' },
          { id: '2d', text: 'Đọc sách chuyên ngành và tài liệu tự nghiên cứu' },
        ],
      },
      {
        id: 3,
        text: 'Mức học phí bạn sẵn sàng đầu tư cho một khóa học kỹ năng chất lượng là?',
        options: [
          { id: '3a', text: 'Dưới 500.000đ' },
          { id: '3b', text: 'Từ 500.000đ - 2.000.000đ' },
          { id: '3c', text: 'Từ 2.000.000đ - 5.000.000đ' },
          { id: '3d', text: 'Trên 5.000.000đ' },
        ],
      },
      {
        id: 4,
        text: 'Động lực lớn nhất thôi thúc bạn học thêm kiến thức mới là gì?',
        options: [
          { id: '4a', text: 'Tăng thu nhập và cơ hội thăng tiến' },
          { id: '4b', text: 'Sở thích cá nhân và mở rộng hiểu biết' },
          { id: '4c', text: 'Chuyển đổi sang ngành nghề mới tiềm năng hơn' },
          { id: '4d', text: 'Yêu cầu bắt buộc từ công ty/trường học' },
        ],
      },
      {
        id: 5,
        text: 'Bạn có sử dụng các công cụ AI (như ChatGPT, Gemini) để hỗ trợ học tập không?',
        options: [
          { id: '5a', text: 'Sử dụng hàng ngày để giải thích và tra cứu' },
          { id: '5b', text: 'Thỉnh thoảng dùng khi gặp bài khó' },
          { id: '5c', text: 'Mới tìm hiểu thử vài lần' },
          { id: '5d', text: 'Chưa từng sử dụng AI vào việc học' },
        ],
      },
    ],
  },
  {
    id: 12,
    title: 'Thú cưng & Nhu cầu chăm sóc chó mèo',
    category: 'Thú cưng & Động vật',
    description: 'Thói quen nuôi dưỡng, mua thức ăn, phụ kiện và khám chữa bệnh cho thú cưng.',
    iconName: 'Heart',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Hiện tại bạn hoặc gia đình có đang nuôi thú cưng không?',
        options: [
          { id: '1a', text: 'Đang nuôi mèo' },
          { id: '1b', text: 'Đang nuôi chó' },
          { id: '1c', text: 'Nuôi cả chó và mèo hoặc loài khác' },
          { id: '1d', text: 'Chưa nuôi nhưng rất yêu thích thú cưng' },
        ],
      },
      {
        id: 2,
        text: 'Chi phí hàng tháng bạn chi cho thú cưng (thức ăn, cát vệ sinh, pate) là bao nhiêu?',
        options: [
          { id: '2a', text: 'Dưới 300.000đ' },
          { id: '2b', text: 'Từ 300.000đ - 800.000đ' },
          { id: '2c', text: 'Từ 800.000đ - 2.000.000đ' },
          { id: '2d', text: 'Trên 2.000.000đ' },
        ],
      },
      {
        id: 3,
        text: 'Bạn thường mua đồ ăn cho thú cưng từ nguồn nào?',
        options: [
          { id: '3a', text: 'Đặt trên Shopee/TikTok Shop' },
          { id: '3b', text: 'Mua tại cửa hàng Pet Shop gần nhà' },
          { id: '3c', text: 'Tự nấu thức ăn hạt, thịt tươi tại nhà' },
          { id: '3d', text: 'Cho ăn chung thức ăn với người' },
        ],
      },
      {
        id: 4,
        text: 'Bạn có thường xuyên đưa thú cưng đi tiêm phòng và spa cắt tỉa lông không?',
        options: [
          { id: '4a', text: 'Tiêm phòng định kỳ đầy đủ và đi spa thường xuyên' },
          { id: '4b', text: 'Có tiêm phòng, còn tắm rửa tự làm ở nhà' },
          { id: '4c', text: 'Khi nào ốm mới đưa ra trạm thú y' },
          { id: '4d', text: 'Chưa từng đưa đi thú y' },
        ],
      },
      {
        id: 5,
        text: 'Nuôi thú cưng mang lại giá trị tinh thần lớn nhất nào cho bạn?',
        options: [
          { id: '5a', text: 'Giúp giải tỏa căng thẳng sau ngày làm việc' },
          { id: '5b', text: 'Có bạn đồng hành trung thành, bớt cô đơn' },
          { id: '5c', text: 'Rèn luyện tính kiên nhẫn và trách nhiệm' },
          { id: '5d', text: 'Cả 3 yếu tố trên' },
        ],
      },
    ],
  },
  {
    id: 13,
    title: 'Chăm sóc da mặt & Mỹ phẩm làm đẹp',
    category: 'Làm đẹp & Sức khỏe',
    description: 'Quy trình skincare hàng ngày, sản phẩm chống nắng và nguồn mỹ phẩm tin cậy.',
    iconName: 'Sparkles',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn có thói quen thoa kem chống nắng mỗi ngày không?',
        options: [
          { id: '1a', text: 'Mỗi ngày dù ở trong nhà hay ra ngoài' },
          { id: '1b', text: 'Chỉ thoa khi đi ngoài trời nắng gắt' },
          { id: '1c', text: 'Thỉnh thoảng khi nhớ ra' },
          { id: '1d', text: 'Hầu như không dùng kem chống nắng' },
        ],
      },
      {
        id: 2,
        text: 'Quy trình chăm sóc da ban đêm của bạn gồm bao nhiêu bước?',
        options: [
          { id: '2a', text: 'Đơn giản: Sữa rửa mặt + Dưỡng ẩm' },
          { id: '2b', text: 'Đầy đủ: Tẩy trang + Sữa rửa mặt + Toner + Serum + Kem dưỡng' },
          { id: '2c', text: 'Chuyên sâu có Treatment (Retinol, BHA, Niacinamide...)' },
          { id: '2d', text: 'Chỉ rửa mặt bằng nước sạch' },
        ],
      },
      {
        id: 3,
        text: 'Bạn tin tưởng mỹ phẩm xuất xứ từ quốc gia nào nhất?',
        options: [
          { id: '3a', text: 'Hàn Quốc (K-Beauty)' },
          { id: '3b', text: 'Nhật Bản (J-Beauty)' },
          { id: '3c', text: 'Pháp / Châu Âu / Mỹ (Dược mỹ phẩm)' },
          { id: '3d', text: 'Việt Nam (Thương hiệu nội địa uy tín)' },
        ],
      },
      {
        id: 4,
        text: 'Ngân sách hàng tháng bạn chi cho mỹ phẩm là bao nhiêu?',
        options: [
          { id: '4a', text: 'Dưới 200.000đ' },
          { id: '4b', text: 'Từ 200.000đ - 600.000đ' },
          { id: '4c', text: 'Từ 600.000đ - 1.500.000đ' },
          { id: '4d', text: 'Trên 1.500.000đ' },
        ],
      },
      {
        id: 5,
        text: 'Bạn thường xem ai để quyết định mua sản phẩm skincare mới?',
        options: [
          { id: '5a', text: 'Bác sĩ da liễu / Chuyên gia da liễu chia sẻ' },
          { id: '5b', text: 'Beauty Blogger uy tín trên YouTube/TikTok' },
          { id: '5c', text: 'Bạn bè, người thân giới thiệu dùng tốt' },
          { id: '5d', text: 'Tự tìm hiểu bảng thành phần hóa học' },
        ],
      },
    ],
  },
  {
    id: 14,
    title: 'Thời trang, Phong cách ăn mặc & Mua sắm quần áo',
    category: 'Thời trang & Phong cách',
    description: 'Xu hướng thời trang tối giản, local brand và địa chỉ mua sắm trang phục.',
    iconName: 'Shirt',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Phong cách thời trang bạn yêu thích nhất khi đi làm hoặc đi chơi là gì?',
        options: [
          { id: '1a', text: 'Đơn giản, thanh lịch (Minimalism / Casual)' },
          { id: '1b', text: 'Trẻ trung, năng động kiểu Hàn Quốc' },
          { id: '1c', text: 'Đường phố, cá tính (Streetwear / Y2K)' },
          { id: '1d', text: 'Lịch sự, công sở chỉn chu (Smart Casual)' },
        ],
      },
      {
        id: 2,
        text: 'Bạn có thường ủng hộ các thương hiệu thời trang Việt Nam (Local Brand) không?',
        options: [
          { id: '2a', text: 'Rất hay mua, tủ đồ đa số là Local Brand' },
          { id: '2b', text: 'Thỉnh thoảng mua khi thấy mẫu mã đẹp' },
          { id: '2c', text: 'Thích mua đồ quốc tế (Uniqlo, Zara, H&M)' },
          { id: '2d', text: 'Không quan tâm thương hiệu, miễn đẹp và rẻ' },
        ],
      },
      {
        id: 3,
        text: 'Bao lâu bạn mua quần áo mới một lần?',
        options: [
          { id: '3a', text: 'Mỗi tháng đều sắm vài bộ' },
          { id: '3b', text: '2 - 3 tháng mua một lần' },
          { id: '3c', text: 'Chỉ mua vào các dịp lễ Tết, sự kiện đặc biệt' },
          { id: '3d', text: 'Chỉ mua khi quần áo cũ đã hỏng' },
        ],
      },
      {
        id: 4,
        text: 'Bạn thích thử đồ tại cửa hàng hay đặt online giao tận nhà?',
        options: [
          { id: '4a', text: 'Thích đến shop thử trực tiếp cho chuẩn form dáng' },
          { id: '4b', text: 'Thích săn sale online vì giá rẻ và nhiều mã giảm' },
          { id: '4c', text: 'Kết hợp cả hai tùy món đồ đắt hay rẻ' },
          { id: '4d', text: 'Chỉ mua đồ may đo riêng' },
        ],
      },
      {
        id: 5,
        text: 'Chất liệu vải nào bạn ưu tiên chọn hàng đầu cho mùa hè?',
        options: [
          { id: '5a', text: 'Cotton 100% thoáng mát, thấm mồ hôi' },
          { id: '5b', text: 'Vải Linen (Đũi) mộc mạc, nhẹ tênh' },
          { id: '5c', text: 'Vải lụa mát mẻ' },
          { id: '5d', text: 'Vải co giãn thể thao (Spandex/Polyester)' },
        ],
      },
    ],
  },
  {
    id: 15,
    title: 'Quản lý tài chính cá nhân, Tiết kiệm & Tích lũy',
    category: 'Tài chính & Đầu tư',
    description: 'Thói quen ghi chép chi tiêu, quỹ dự phòng khẩn cấp và các kênh tích lũy sinh lời.',
    iconName: 'PiggyBank',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn có thói quen ghi chép thu chi hàng ngày không?',
        options: [
          { id: '1a', text: 'Có, dùng app quản lý chi tiêu đều đặn' },
          { id: '1b', text: 'Có ghi chép trên sổ tay hoặc Excel' },
          { id: '1c', text: 'Chỉ ước lượng nhẩm trong đầu' },
          { id: '1d', text: 'Không ghi chép, tiêu đến đâu biết đến đó' },
        ],
      },
      {
        id: 2,
        text: 'Bạn thường trích bao nhiêu phần trăm thu nhập để tiết kiệm mỗi tháng?',
        options: [
          { id: '2a', text: 'Dưới 10% hoặc không có dư' },
          { id: '2b', text: 'Từ 10% - 20%' },
          { id: '2c', text: 'Từ 20% - 40%' },
          { id: '2d', text: 'Trên 40% thu nhập hàng tháng' },
        ],
      },
      {
        id: 3,
        text: 'Bạn đã xây dựng quỹ khẩn cấp đủ cho bao nhiêu tháng sinh hoạt?',
        options: [
          { id: '3a', text: 'Đủ trên 6 tháng chi tiêu an toàn' },
          { id: '3b', text: 'Đủ từ 3 - 6 tháng' },
          { id: '3c', text: 'Đủ 1 - 2 tháng' },
          { id: '3d', text: 'Chưa có quỹ dự phòng' },
        ],
      },
      {
        id: 4,
        text: 'Kênh đầu tư/tích lũy sinh lời nào bạn quan tâm hoặc đang tham gia?',
        options: [
          { id: '4a', text: 'Gửi tiết kiệm ngân hàng / Chứng chỉ tiền gửi' },
          { id: '4b', text: 'Mua vàng miếng / Vàng nhẫn tích trữ' },
          { id: '4c', text: 'Chứng khoán / Quỹ mở' },
          { id: '4d', text: 'Bất động sản hoặc đầu tư kinh doanh riêng' },
        ],
      },
      {
        id: 5,
        text: 'Quy tắc tài chính nào bạn thấy hiệu quả nhất cho bản thân?',
        options: [
          { id: '5a', text: 'Quy tắc 50/30/20 (Thiết yếu/Sở thích/Tiết kiệm)' },
          { id: '5b', text: 'Phương pháp 6 chiếc hũ tài chính' },
          { id: '5c', text: 'Trả cho bản thân trước ngay khi nhận lương' },
          { id: '5d', text: 'Tự điều chỉnh linh hoạt theo từng tháng' },
        ],
      },
    ],
  },
  {
    id: 16,
    title: 'Thiết bị gia dụng thông minh & Cuộc sống tiện nghi',
    category: 'Nhà cửa & Đời sống',
    description: 'Sử dụng robot hút bụi, nồi chiên không dầu, máy rửa bát và thiết bị Smart Home.',
    iconName: 'Home',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Thiết bị gia dụng thông minh nào bạn cảm thấy đáng tiền mua nhất?',
        options: [
          { id: '1a', text: 'Nồi chiên không dầu' },
          { id: '1b', text: 'Robot hút bụi lau nhà tự động' },
          { id: '1c', text: 'Máy rửa bát' },
          { id: '1d', text: 'Máy lọc không khí' },
        ],
      },
      {
        id: 2,
        text: 'Bạn có điều khiển các thiết bị trong nhà qua điện thoại (App Smart Life, Mi Home...) không?',
        options: [
          { id: '2a', text: 'Có, điều khiển đèn, điều hòa, camera qua app' },
          { id: '2b', text: 'Chỉ điều khiển một số thiết bị đơn giản' },
          { id: '2c', text: 'Chưa dùng nhưng có hứng thú trải nghiệm' },
          { id: '2d', text: 'Thích bấm công tắc cơ truyền thống hơn' },
        ],
      },
      {
        id: 3,
        text: 'Tiêu chí nào quan trọng nhất khi bạn sắm đồ điện gia dụng mới?',
        options: [
          { id: '3a', text: 'Tiết kiệm điện năng (Inverter)' },
          { id: '3b', text: 'Độ bền cao, bảo hành dài hạn' },
          { id: '3c', text: 'Thiết kế đẹp, thẩm mỹ cao' },
          { id: '3d', text: 'Giá cả phải chăng' },
        ],
      },
      {
        id: 4,
        text: 'Gia đình bạn đã trang bị máy lọc nước uống trực tiếp chưa?',
        options: [
          { id: '4a', text: 'Đã có máy lọc nước RO/Nano cao cấp' },
          { id: '4b', text: 'Dùng bình nước lọc 20L đổi hàng tuần' },
          { id: '4c', text: 'Tự đun sôi nước máy để nguội uống' },
          { id: '4d', text: 'Chưa trang bị' },
        ],
      },
      {
        id: 5,
        text: 'Bạn dự định nâng cấp thêm thiết bị nào cho ngôi nhà trong năm nay?',
        options: [
          { id: '5a', text: 'Máy giặt sấy 2 trong 1' },
          { id: '5b', text: 'Tivi màn hình lớn chất lượng cao' },
          { id: '5c', text: 'Khóa cửa thông minh vân tay' },
          { id: '5d', text: 'Máy hút ẩm chống nồm ẩm' },
        ],
      },
    ],
  },
  {
    id: 17,
    title: 'Thói quen đọc sách & Nghe Podcast phát triển bản thân',
    category: 'Văn hóa & Đọc sách',
    description: 'Sách giấy, máy đọc sách Kindle, sách nói Voiz FM/Fonos và kênh Podcast yêu thích.',
    iconName: 'BookOpen',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn thích đọc sách giấy truyền thống hay sách điện tử (Ebook/Kindle)?',
        options: [
          { id: '1a', text: 'Yêu sách giấy vì cảm giác chạm và mùi thơm sách' },
          { id: '1b', text: 'Dùng máy đọc sách Kindle/Kobo cực kỳ tiện lợi' },
          { id: '1c', text: 'Đọc Ebook trực tiếp trên điện thoại/máy tính' },
          { id: '1d', text: 'Thích nghe sách nói (Audiobook) hơn là đọc' },
        ],
      },
      {
        id: 2,
        text: 'Một năm bạn đọc hoặc nghe hoàn thành khoảng bao nhiêu cuốn sách?',
        options: [
          { id: '2a', text: 'Trên 12 cuốn (trên 1 cuốn/tháng)' },
          { id: '2b', text: 'Từ 5 - 12 cuốn' },
          { id: '2c', text: 'Từ 1 - 4 cuốn' },
          { id: '2d', text: 'Hầu như không đọc sách' },
        ],
      },
      {
        id: 3,
        text: 'Thể loại sách nào bạn thường tìm đọc nhất?',
        options: [
          { id: '3a', text: 'Tâm lý học, phát triển bản thân (Self-help)' },
          { id: '3b', text: 'Kinh doanh, tài chính, đầu tư' },
          { id: '3c', text: 'Văn học, tiểu thuyết, truyện ngắn' },
          { id: '3d', text: 'Lịch sử, triết học, khoa học vũ trụ' },
        ],
      },
      {
        id: 4,
        text: 'Bạn có thường xuyên nghe Podcast khi đi đường hoặc trước khi ngủ không?',
        options: [
          { id: '4a', text: 'Nghe mỗi ngày trên Spotify / Apple Podcasts' },
          { id: '4b', text: 'Thỉnh thoảng nghe khi rảnh rỗi' },
          { id: '4c', text: 'Chưa từng nghe Podcast' },
          { id: '4d', text: 'Thích nghe nhạc hơn là nghe nói chuyện' },
        ],
      },
      {
        id: 5,
        text: 'Kênh nội dung nào truyền cảm hứng nhiều nhất cho bạn?',
        options: [
          { id: '5a', text: 'Vietcetera (Have A Sip / The Quốc Khánh Show)' },
          { id: '5b', text: 'Tri Kỷ Cảm Xúc / Sunhuyn Podcast' },
          { id: '5c', text: 'Kênh phỏng vấn doanh nhân & kinh tế' },
          { id: '5d', text: 'Kênh truyện ma & audio tâm sự đêm khuya' },
        ],
      },
    ],
  },
  {
    id: 18,
    title: 'Thị hiếu Chơi Game trên Điện thoại & Máy tính',
    category: 'Trò chơi điện tử',
    description: 'Các tựa game MOBA, bắn súng, giải đố và mức độ nạp tiền ingame.',
    iconName: 'Gamepad2',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn chơi game trên thiết bị nào thường xuyên nhất?',
        options: [
          { id: '1a', text: 'Điện thoại Smartphone' },
          { id: '1b', text: 'Máy tính PC / Laptop Gaming' },
          { id: '1c', text: 'Máy chơi game cầm tay (Nintendo Switch, PS5...)' },
          { id: '1d', text: 'Tôi không chơi game' },
        ],
      },
      {
        id: 2,
        text: 'Tựa game di động nào bạn đang chơi hoặc yêu thích nhất?',
        options: [
          { id: '2a', text: 'Liên Quân Mobile / Tốc Chiến' },
          { id: '2b', text: 'PUBG Mobile / Free Fire / Đột Kích' },
          { id: '2c', text: 'Genshin Impact / Honkai: Star Rail' },
          { id: '2d', text: 'Game giải đố, nông trại nhẹ nhàng (Candy Crush, Hay Day...)' },
        ],
      },
      {
        id: 3,
        text: 'Thời gian bạn dành cho game mỗi ngày là bao nhiêu?',
        options: [
          { id: '3a', text: 'Dưới 30 phút giải trí ngắn' },
          { id: '3b', text: 'Từ 30 phút - 1 tiếng rưỡi' },
          { id: '3c', text: 'Từ 2 - 4 tiếng' },
          { id: '3d', text: 'Trên 4 tiếng mỗi ngày' },
        ],
      },
      {
        id: 4,
        text: 'Bạn có thường nạp tiền mua trang phục (skin) hoặc thẻ tháng trong game không?',
        options: [
          { id: '4a', text: 'Chơi hoàn toàn miễn phí (F2P), không nạp tiền' },
          { id: '4b', text: 'Chỉ nạp các gói ưu đãi nhỏ (Sổ sứ mệnh, Battle Pass)' },
          { id: '4c', text: 'Chi từ vài trăm nghìn đến vài triệu mỗi tháng' },
          { id: '4d', text: 'Đã từng nạp nhiều khi còn chơi nhiều' },
        ],
      },
      {
        id: 5,
        text: 'Chơi game đem lại trải nghiệm thú vị nhất ở điểm nào?',
        options: [
          { id: '5a', text: 'Kết nối leo rank vui vẻ cùng bạn bè' },
          { id: '5b', text: 'Thỏa mãn cảm giác chiến thắng và kỹ năng cá nhân' },
          { id: '5c', text: 'Đồ họa đẹp mắt và cốt truyện hấp dẫn' },
          { id: '5d', text: 'Giết thời gian những lúc rảnh rỗi' },
        ],
      },
    ],
  },
  {
    id: 19,
    title: 'Văn hóa Cà phê, Trà sữa & Không gian quán xá',
    category: 'Văn hóa & Thức uống',
    description: 'Thương hiệu cà phê yêu thích, thói quen đi cafe làm việc hay tán gẫu bạn bè.',
    iconName: 'Coffee',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Thương hiệu đồ uống nào bạn hay ghé tới nhất?',
        options: [
          { id: '1a', text: 'Highlands Coffee / Phúc Long' },
          { id: '1b', text: 'The Coffee House / Katinat' },
          { id: '1c', text: 'Starbucks / Phê La' },
          { id: '1d', text: 'Cà phê vỉa hè / Quán cóc mộc mạc gần nhà' },
        ],
      },
      {
        id: 2,
        text: 'Món đồ uống nào bạn chọn nhiều nhất khi đến quán?',
        options: [
          { id: '2a', text: 'Cà phê sữa đá / Bạc xỉu truyền thống' },
          { id: '2b', text: 'Cà phê muối / Cold Brew / Espresso' },
          { id: '2c', text: 'Trà sữa trân châu / Trà ô long kem cheese' },
          { id: '2d', text: 'Trà trái cây thanh mát (Trà đào, trà ổi hồng...)' },
        ],
      },
      {
        id: 3,
        text: 'Mục đích chính của bạn khi đi cà phê là gì?',
        options: [
          { id: '3a', text: 'Gặp gỡ, trò chuyện cùng bạn bè và người yêu' },
          { id: '3b', text: 'Mang laptop đi làm việc hoặc học tập cần tập trung' },
          { id: '3c', text: 'Chụp ảnh sống ảo check-in không gian đẹp' },
          { id: '3d', text: 'Chỉ mua mang đi (Take-away) cho tỉnh táo' },
        ],
      },
      {
        id: 4,
        text: 'Bạn uống bao nhiêu ly cà phê hoặc trà mỗi ngày?',
        options: [
          { id: '4a', text: '1 ly vào mỗi buổi sáng' },
          { id: '4b', text: 'Từ 2 - 3 ly trong ngày' },
          { id: '4c', text: 'Vài ngày mới uống 1 lần' },
          { id: '4d', text: 'Không uống cà phê vì say caffeine' },
        ],
      },
      {
        id: 5,
        text: 'Mức giá một ly đồ uống tại quán mà bạn thấy hợp lý nhất là?',
        options: [
          { id: '5a', text: 'Từ 15.000đ - 30.000đ' },
          { id: '5b', text: 'Từ 30.000đ - 55.000đ' },
          { id: '5c', text: 'Từ 55.000đ - 85.000đ' },
          { id: '5d', text: 'Trên 85.000đ nếu không gian đẳng cấp' },
        ],
      },
    ],
  },
  {
    id: 20,
    title: 'Bảo vệ môi trường & Lối sống xanh, bền vững',
    category: 'Môi trường & Xã hội',
    description: 'Thói quen hạn chế rác thải nhựa, sử dụng túi vải và phân loại rác tại nguồn.',
    iconName: 'Leaf',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn có mang theo bình nước cá nhân hoặc ly giữ nhiệt khi đi học/đi làm không?',
        options: [
          { id: '1a', text: 'Có, luôn mang theo bình giữ nhiệt riêng' },
          { id: '1b', text: 'Thỉnh thoảng mang' },
          { id: '1c', text: 'Mua nước đóng chai dùng một lần' },
          { id: '1d', text: 'Dùng cốc có sẵn tại cơ quan' },
        ],
      },
      {
        id: 2,
        text: 'Khi đi siêu thị, bạn xử lý việc dùng túi nilon như thế nào?',
        options: [
          { id: '2a', text: 'Luôn mang theo túi vải (Tote bag) tái sử dụng' },
          { id: '2b', text: 'Hạn chế lấy nhiều túi nhất có thể' },
          { id: '2c', text: 'Vẫn nhận túi nilon bình thường' },
          { id: '2d', text: 'Gom túi nilon về để lót thùng rác tái chế' },
        ],
      },
      {
        id: 3,
        text: 'Bạn đánh giá như thế nào về việc phân loại rác thải tại gia đình?',
        options: [
          { id: '3a', text: 'Đang thực hiện phân loại rác hữu cơ và tái chế riêng' },
          { id: '3b', text: 'Chỉ gom riêng vỏ lon, chai nhựa và giấy bìa để bán ve chai' },
          { id: '3c', text: 'Muốn phân loại nhưng chưa có hướng dẫn rõ ràng' },
          { id: '3d', text: 'Bỏ chung tất cả vào một thùng rác duy nhất' },
        ],
      },
      {
        id: 4,
        text: 'Bạn có sẵn sàng trả thêm một khoản nhỏ để dùng bao bì thân thiện môi trường không?',
        options: [
          { id: '4a', text: 'Sẵn sàng trả thêm 2.000đ - 5.000đ/đơn hàng' },
          { id: '4b', text: 'Ủng hộ nếu doanh nghiệp tự chịu chi phí' },
          { id: '4c', text: 'Chỉ chấp nhận nếu không tăng giá sản phẩm' },
          { id: '4d', text: 'Không muốn tốn thêm tiền' },
        ],
      },
      {
        id: 5,
        text: 'Hành động xanh nào bạn thực hiện thường xuyên nhất?',
        options: [
          { id: '5a', text: 'Tắt đèn và thiết bị điện khi không sử dụng' },
          { id: '5b', text: 'Hạn chế sử dụng ống hút nhựa và dao muỗng nhựa dùng 1 lần' },
          { id: '5c', text: 'Trồng thêm cây xanh trong nhà hoặc ban công' },
          { id: '5d', text: 'Tất cả các hành động trên' },
        ],
      },
    ],
  },
  {
    id: 21,
    title: 'Thị trường Thuê nhà & Không gian sống lý tưởng',
    category: 'Bất động sản & Nhà ở',
    description: 'Nhu cầu thuê trọ, căn hộ dịch vụ và các tiện ích nội khu ưu tiên.',
    iconName: 'Building',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Hiện tại bạn đang sinh sống ở loại hình nhà ở nào?',
        options: [
          { id: '1a', text: 'Nhà riêng của gia đình' },
          { id: '1b', text: 'Thuê căn hộ chung cư / Căn hộ mini' },
          { id: '1c', text: 'Thuê phòng trọ khép kín' },
          { id: '1d', text: 'Ở ký túc xá / Nhà ở tập thể' },
        ],
      },
      {
        id: 2,
        text: 'Mức tiền thuê nhà hợp lý với thu nhập của bạn là khoảng bao nhiêu?',
        options: [
          { id: '2a', text: 'Dưới 2.500.000đ/tháng' },
          { id: '2b', text: 'Từ 2.500.000đ - 5.000.000đ/tháng' },
          { id: '2c', text: 'Từ 5.000.000đ - 10.000.000đ/tháng' },
          { id: '2d', text: 'Trên 10.000.000đ/tháng' },
        ],
      },
      {
        id: 3,
        text: 'Yếu tố nào quan trọng nhất khi bạn chọn thuê một nơi ở?',
        options: [
          { id: '3a', text: 'An ninh tốt, giờ giấc tự do không chung chủ' },
          { id: '3b', text: 'Gần nơi làm việc / trường học, giao thông thuận tiện' },
          { id: '3c', text: 'Phòng sạch sẽ, thoáng mát, có cửa sổ/ban công' },
          { id: '3d', text: 'Giá điện nước tính theo giá nhà nước rõ ràng' },
        ],
      },
      {
        id: 4,
        text: 'Bạn thường tìm kiếm thông tin nhà trọ qua kênh nào?',
        options: [
          { id: '4a', text: 'Nhóm Facebook tìm phòng trọ sinh viên/người đi làm' },
          { id: '4b', text: 'Trang web đăng tin bất động sản (Batdongsan, Chotot...)' },
          { id: '4c', text: 'Bạn bè, người quen giới thiệu' },
          { id: '4d', text: 'Đi thực tế tìm biển treo cho thuê quanh khu vực' },
        ],
      },
      {
        id: 5,
        text: 'Mục tiêu mua nhà của bạn trong tương lai dự kiến như thế nào?',
        options: [
          { id: '5a', text: 'Dự định mua nhà/chung cư trong 3 - 5 năm tới' },
          { id: '5b', text: 'Đã sở hữu nhà riêng' },
          { id: '5c', text: 'Thích thuê nhà lâu dài để linh hoạt tài chính' },
          { id: '5d', text: 'Chưa tính tới vì giá nhà quá cao' },
        ],
      },
    ],
  },
  {
    id: 22,
    title: 'Thói quen Sử dụng Ví điện tử & Tích điểm thành viên',
    category: 'Fintech & Ví điện tử',
    description: 'Mức độ gắn bó với ví MoMo, ZaloPay, Viettel Money và các chương trình tích điểm.',
    iconName: 'Wallet',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Ví điện tử nào bạn mở và sử dụng nhiều nhất?',
        options: [
          { id: '1a', text: 'MoMo' },
          { id: '1b', text: 'ZaloPay' },
          { id: '1c', text: 'Viettel Money / VNPT Pay' },
          { id: '1d', text: 'ShopeePay' },
        ],
      },
      {
        id: 2,
        text: 'Bạn dùng ví điện tử cho mục đích nào thường xuyên nhất?',
        options: [
          { id: '2a', text: 'Nạp tiền điện thoại & mua gói data 4G' },
          { id: '2b', text: 'Thanh toán ăn uống, cafe tại quầy' },
          { id: '2c', text: 'Thanh toán tiền điện, nước, cước internet' },
          { id: '2d', text: 'Chơi mini-game lắc thưởng, nuôi heo đất tích lũy' },
        ],
      },
      {
        id: 3,
        text: 'Chương trình ưu đãi nào của ví điện tử hấp dẫn bạn nhất?',
        options: [
          { id: '3a', text: 'Hoàn tiền mặt trực tiếp vào ví' },
          { id: '3b', text: 'Voucher giảm giá ăn uống / xem phim' },
          { id: '3c', text: 'Miễn phí chuyển khoản liên ngân hàng' },
          { id: '3d', text: 'Tích điểm đổi quà tặng hấp dẫn' },
        ],
      },
      {
        id: 4,
        text: 'Bạn có tin tưởng vào độ an toàn và bảo mật của ví điện tử không?',
        options: [
          { id: '4a', text: 'Rất tin tưởng, luôn bảo mật bằng mã OTP & FaceID' },
          { id: '4b', text: 'Tin tưởng nhưng chỉ để số dư vừa phải' },
          { id: '4c', text: 'Hơi lo ngại rủi ro mất tiền' },
          { id: '4d', text: 'Chỉ dùng khi bắt buộc' },
        ],
      },
      {
        id: 5,
        text: 'Bạn thấy thanh toán qua mã QR có thay thế hoàn toàn tiền mặt được chưa?',
        options: [
          { id: '5a', text: 'Đã thay thế 90% cuộc sống hàng ngày của tôi' },
          { id: '5b', text: 'Rất tiện nhưng vùng quê vẫn cần tiền mặt' },
          { id: '5c', text: 'Thỉnh thoảng mạng lỗi hoặc máy hết pin vẫn phải có tiền mặt' },
          { id: '5d', text: 'Chưa thay thế được nhiều' },
        ],
      },
    ],
  },
  {
    id: 23,
    title: 'Âm nhạc & Đăng ký dịch vụ Nghe nhạc Trực tuyến',
    category: 'Âm nhạc & Nghệ thuật',
    description: 'Thị hiếu V-Pop, US-UK, K-Pop và thói quen nghe nhạc có bản quyền trên Spotify/Apple Music.',
    iconName: 'Music',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Nền tảng nghe nhạc trực tuyến nào bạn dùng mỗi ngày?',
        options: [
          { id: '1a', text: 'Spotify' },
          { id: '1b', text: 'YouTube / YouTube Music' },
          { id: '1c', text: 'Apple Music / Zing MP3 / NhacCuaTui' },
          { id: '1d', text: 'SoundCloud hoặc tải file về máy' },
        ],
      },
      {
        id: 2,
        text: 'Dòng nhạc nào chiếm nhiều nhất trong danh sách phát (Playlist) của bạn?',
        options: [
          { id: '2a', text: 'V-Pop (Nhạc trẻ Việt Nam / Indie Việt)' },
          { id: '2b', text: 'K-Pop (Nhạc Hàn Quốc)' },
          { id: '2c', text: 'US-UK / Pop / R&B quốc tế' },
          { id: '2d', text: 'EDM, Lo-fi chill, Nhạc không lời tập trung' },
        ],
      },
      {
        id: 3,
        text: 'Bạn có trả phí gói Premium hàng tháng để nghe nhạc không quảng cáo không?',
        options: [
          { id: '3a', text: 'Có, gói cá nhân hoặc sinh viên' },
          { id: '3b', text: 'Dùng chung gói gia đình (Family plan) tiết kiệm' },
          { id: '3c', text: 'Nghe bản miễn phí chấp nhận quảng cáo' },
          { id: '3d', text: 'Dùng bản mod hoặc nghe trên YouTube có chặn quảng cáo' },
        ],
      },
      {
        id: 4,
        text: 'Bạn thường nghe nhạc trong những hoàn cảnh nào nhất?',
        options: [
          { id: '4a', text: 'Khi đang làm việc / học bài để tăng tập trung' },
          { id: '4b', text: 'Khi đang chạy xe trên đường hoặc tập gym' },
          { id: '4c', text: 'Buổi tối nằm thư giãn trước khi ngủ' },
          { id: '4d', text: 'Nghe liên tục gần như cả ngày' },
        ],
      },
      {
        id: 5,
        text: 'Bạn có từng đi xem các đêm nhạc trực tiếp (Live Concert / Mini show) chưa?',
        options: [
          { id: '5a', text: 'Đã đi nhiều concert của các ca sĩ yêu thích' },
          { id: '5b', text: 'Thỉnh thoảng đi phòng trà, acoustic bar cuối tuần' },
          { id: '5c', text: 'Chưa đi lần nào vì giá vé cao' },
          { id: '5d', text: 'Thích nghe qua tai nghe tại nhà hơn' },
        ],
      },
    ],
  },
  {
    id: 24,
    title: 'Mô hình Làm việc Từ xa (Remote/Hybrid) & Văn phòng',
    category: 'Việc làm & Công sở',
    description: 'So sánh hiệu quả giữa làm việc tại văn phòng và làm việc tại nhà (WFH).',
    iconName: 'Briefcase',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Hình thức làm việc hiện tại của bạn là gì?',
        options: [
          { id: '1a', text: '100% tại văn phòng/công ty' },
          { id: '1b', text: 'Mô hình kết hợp linh hoạt (Hybrid: 2-3 ngày WFH)' },
          { id: '1c', text: '100% làm việc từ xa (Remote / Freelancer)' },
          { id: '1d', text: 'Tôi đang là học sinh/sinh viên' },
        ],
      },
      {
        id: 2,
        text: 'Bạn cảm thấy hình thức nào mang lại năng suất làm việc cao nhất cho bạn?',
        options: [
          { id: '2a', text: 'Làm việc kết hợp Hybrid (Vừa linh hoạt vừa gắn kết)' },
          { id: '2b', text: 'Làm việc tại nhà WFH (Tiết kiệm thời gian kẹt xe)' },
          { id: '2c', text: 'Lên văn phòng (Tập trung hơn, trao đổi trực tiếp nhanh)' },
          { id: '2d', text: 'Ra quán cà phê yên tĩnh' },
        ],
      },
      {
        id: 3,
        text: 'Khó khăn lớn nhất khi bạn làm việc tại nhà là gì?',
        options: [
          { id: '3a', text: 'Dễ bị xao nhãng bởi việc nhà và mạng xã hội' },
          { id: '3b', text: 'Ranh giới giữa công việc và nghỉ ngơi bị xóa nhòa' },
          { id: '3c', text: 'Giao tiếp với đồng nghiệp chậm hơn' },
          { id: '3d', text: 'Tôi không gặp khó khăn nào cả' },
        ],
      },
      {
        id: 4,
        text: 'Công cụ làm việc nhóm nào bạn thấy không thể thiếu?',
        options: [
          { id: '4a', text: 'Zalo / Telegram / Slack trao đổi chat' },
          { id: '4b', text: 'Google Workspace (Docs, Sheets, Drive, Meet)' },
          { id: '4c', text: 'Trello / Notion / Jira quản lý tiến độ công việc' },
          { id: '4d', text: 'Email truyền thống' },
        ],
      },
      {
        id: 5,
        text: 'Thời gian di chuyển từ nhà đến nơi làm việc/học tập của bạn là bao lâu?',
        options: [
          { id: '5a', text: 'Dưới 15 phút (rất gần)' },
          { id: '5b', text: 'Từ 15 - 30 phút' },
          { id: '5c', text: 'Từ 30 - 60 phút (khá xa và kẹt xe)' },
          { id: '5d', text: 'Trên 1 tiếng mỗi chiều' },
        ],
      },
    ],
  },
  {
    id: 25,
    title: 'Đồ uống giải khát & Thói quen Tụ tập bạn bè',
    category: 'Đời sống & Xã hội',
    description: 'Thói quen ăn uống tụ tập, lựa chọn nước khoáng, bia không cồn và sinh tố.',
    iconName: 'GlassWater',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Tần suất bạn đi ăn uống, tụ tập với bạn bè/đồng nghiệp là bao lâu?',
        options: [
          { id: '1a', text: '1 - 2 lần mỗi tuần' },
          { id: '1b', text: 'Vài lần mỗi tháng' },
          { id: '1c', text: 'Chỉ các dịp sinh nhật, tất niên, lễ lớn' },
          { id: '1d', text: 'Hiếm khi tham gia tụ tập' },
        ],
      },
      {
        id: 2,
        text: 'Khi đi liên hoan, bạn thường chọn loại đồ uống nào?',
        options: [
          { id: '2a', text: 'Nước ngọt có ga / Nước khoáng có ga' },
          { id: '2b', text: 'Bia nhẹ / Bia thủ công (Craft Beer)' },
          { id: '2c', text: 'Bia không cồn (0.0%) an toàn lái xe' },
          { id: '2d', text: 'Nước ép trái cây / Trà đá' },
        ],
      },
      {
        id: 3,
        text: 'Sau khi uống rượu bia trong các buổi tiệc, bạn di chuyển về bằng cách nào?',
        options: [
          { id: '3a', text: 'Luôn gọi xe công nghệ (Grab/Be/Xanh SM)' },
          { id: '3b', text: 'Nhờ người nhà hoặc bạn bè không uống chở về' },
          { id: '3c', text: 'Gửi xe lại quán và bắt taxi' },
          { id: '3d', text: 'Tôi không bao giờ uống đồ uống có cồn' },
        ],
      },
      {
        id: 4,
        text: 'Địa điểm tụ họp bạn bè yêu thích nhất của bạn là gì?',
        options: [
          { id: '4a', text: 'Quán nướng BBQ / Lẩu buffet ấm cúng' },
          { id: '4b', text: 'Quán nhậu vỉa hè bình dân thoáng đãng' },
          { id: '4c', text: 'Tổ chức tiệc nấu nướng tại nhà riêng' },
          { id: '4d', text: 'Quán cafe rộng rãi chơi board game' },
        ],
      },
      {
        id: 5,
        text: 'Ngân sách trung bình cho một buổi tụ tập ăn uống của bạn là bao nhiêu?',
        options: [
          { id: '5a', text: 'Dưới 150.000đ/người' },
          { id: '5b', text: 'Từ 150.000đ - 350.000đ/người' },
          { id: '5c', text: 'Từ 350.000đ - 700.000đ/người' },
          { id: '5d', text: 'Trên 700.000đ/người' },
        ],
      },
    ],
  },
  {
    id: 26,
    title: 'Mua sắm Thiết bị Điện máy & Tiết kiệm Điện',
    category: 'Điện máy & Công nghệ',
    description: 'Thói quen dùng máy lạnh Inverter, máy giặt, tivi và hóa đơn tiền điện mùa hè.',
    iconName: 'Tv2',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Hóa đơn tiền điện trung bình hàng tháng của hộ gia đình bạn là bao nhiêu?',
        options: [
          { id: '1a', text: 'Dưới 500.000đ' },
          { id: '1b', text: 'Từ 500.000đ - 1.200.000đ' },
          { id: '1c', text: 'Từ 1.200.000đ - 2.500.000đ' },
          { id: '1d', text: 'Trên 2.500.000đ (nhất là các tháng mùa nóng)' },
        ],
      },
      {
        id: 2,
        text: 'Thương hiệu máy điều hòa/máy lạnh bạn tin dùng nhất là gì?',
        options: [
          { id: '2a', text: 'Daikin' },
          { id: '2b', text: 'Panasonic' },
          { id: '2c', text: 'Casper / LG / Samsung' },
          { id: '2d', text: 'Midea / Gree / Funiki' },
        ],
      },
      {
        id: 3,
        text: 'Bạn thường cài đặt nhiệt độ máy lạnh ở mức bao nhiêu độ C?',
        options: [
          { id: '3a', text: '26 - 28 độ C kèm quạt gió (tiết kiệm điện)' },
          { id: '3b', text: '23 - 25 độ C' },
          { id: '3c', text: 'Dưới 22 độ C để phòng mát thật sâu' },
          { id: '3d', text: 'Chỉ bật quạt chứ ít khi bật điều hòa' },
        ],
      },
      {
        id: 4,
        text: 'Bao lâu bạn gọi thợ đến vệ sinh, bảo dưỡng máy lạnh một lần?',
        options: [
          { id: '4a', text: 'Định kỳ 6 tháng một lần' },
          { id: '4b', text: '1 năm một lần trước mùa nóng' },
          { id: '4c', text: 'Khi nào thấy máy không mát hoặc rỉ nước mới gọi' },
          { id: '4d', text: 'Tự tháo lưới lọc vệ sinh tại nhà' },
        ],
      },
      {
        id: 5,
        text: 'Bạn có quan tâm đến việc lắp đặt hệ thống điện mặt trời áp mái không?',
        options: [
          { id: '5a', text: 'Đã lắp đặt và tiết kiệm điện rõ rệt' },
          { id: '5b', text: 'Rất muốn lắp nhưng chi phí ban đầu còn cao' },
          { id: '5c', text: 'Đang ở nhà thuê/chung cư nên không lắp được' },
          { id: '5d', text: 'Chưa có nhu cầu tìm hiểu' },
        ],
      },
    ],
  },
  {
    id: 27,
    title: 'Chăm sóc & Bảo dưỡng Xe máy, Ô tô định kỳ',
    category: 'Xe cộ & Kỹ thuật',
    description: 'Thói quen thay dầu nhớt, kiểm tra lốp và chọn cửa hàng sửa xe uy tín.',
    iconName: 'Wrench',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bao lâu bạn thay dầu nhớt cho xe máy/ô tô một lần?',
        options: [
          { id: '1a', text: 'Định kỳ sau mỗi 1.500 - 2.000 km' },
          { id: '1b', text: 'Khoảng 2 - 3 tháng thay một lần' },
          { id: '1c', text: 'Khi nào nhớ ra hoặc xe có tiếng kêu lạ' },
          { id: '1d', text: 'Dùng xe điện nên không cần thay nhớt động cơ' },
        ],
      },
      {
        id: 2,
        text: 'Bạn thường bảo dưỡng và sửa chữa xe ở đâu?',
        options: [
          { id: '2a', text: 'Trung tâm bảo hành chính hãng (HEAD Honda, Yamaha Town, Showroom ô tô)' },
          { id: '2b', text: 'Tiệm sửa xe quen uy tín gần nhà' },
          { id: '2c', text: 'Chuỗi cửa hàng dịch vụ chuyên nghiệp (Shop2banh, BikerShield...)' },
          { id: '2d', text: 'Tự mua đồ về bảo dưỡng đơn giản tại nhà' },
        ],
      },
      {
        id: 3,
        text: 'Bạn kiểm tra áp suất lốp xe bao lâu một lần?',
        options: [
          { id: '3a', text: '1 - 2 tuần một lần hoặc trước mỗi chuyến đi xa' },
          { id: '3b', text: 'Mỗi tháng một lần khi đi rửa xe' },
          { id: '3c', text: 'Khi nào thấy lốp non mềm mới bơm' },
          { id: '3d', text: 'Có cảm biến áp suất lốp theo dõi tự động' },
        ],
      },
      {
        id: 4,
        text: 'Chi phí chăm sóc, bảo dưỡng xe định kỳ hàng năm của bạn khoảng bao nhiêu?',
        options: [
          { id: '4a', text: 'Dưới 1.000.000đ/năm' },
          { id: '4b', text: 'Từ 1.000.000đ - 3.000.000đ/năm' },
          { id: '4c', text: 'Từ 3.000.000đ - 10.000.000đ/năm' },
          { id: '4d', text: 'Trên 10.000.000đ/năm' },
        ],
      },
      {
        id: 5,
        text: 'Bạn có mua bảo hiểm tự nguyện cho phương tiện của mình không?',
        options: [
          { id: '5a', text: 'Có mua đầy đủ bảo hiểm thân vỏ & tai nạn' },
          { id: '5b', text: 'Chỉ mua bảo hiểm trách nhiệm dân sự bắt buộc' },
          { id: '5c', text: 'Chưa mua gói nào' },
          { id: '5d', text: 'Hết hạn bảo hiểm mà chưa kịp mua lại' },
        ],
      },
    ],
  },
  {
    id: 28,
    title: 'Chất lượng Giấc ngủ & Giải tỏa Căng thẳng tinh thần',
    category: 'Sức khỏe tinh thần',
    description: 'Thói quen dùng điện thoại trước khi ngủ, giải pháp cải thiện giấc ngủ và thư giãn.',
    iconName: 'Moon',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn thường đi ngủ vào lúc mấy giờ đêm?',
        options: [
          { id: '1a', text: 'Trước 22h30 (ngủ sớm lành mạnh)' },
          { id: '1b', text: 'Từ 22h30 - 23h30' },
          { id: '1c', text: 'Từ 23h30 - 01h00 sáng' },
          { id: '1d', text: 'Sau 01h00 sáng (cú đêm)' },
        ],
      },
      {
        id: 2,
        text: 'Bạn có thói quen lướt điện thoại trên giường trước khi chìm vào giấc ngủ không?',
        options: [
          { id: '2a', text: 'Lướt từ 30 phút đến 1 tiếng mỗi tối' },
          { id: '2b', text: 'Chỉ xem vài phút rồi tắt máy đi ngủ ngay' },
          { id: '2c', text: 'Để điện thoại xa giường để không bị cám dỗ' },
          { id: '2d', text: 'Vừa nghe nhạc vừa ngủ quên' },
        ],
      },
      {
        id: 3,
        text: 'Bạn có hay gặp tình trạng khó ngủ hoặc thức giấc giữa đêm không?',
        options: [
          { id: '3a', text: 'Hiếm khi, đặt lưng là ngủ ngon tới sáng' },
          { id: '3b', text: 'Thỉnh thoảng những hôm có nhiều áp lực công việc' },
          { id: '3c', text: 'Khá thường xuyên (2-3 lần/tuần)' },
          { id: '3d', text: 'Mất ngủ kinh niên' },
        ],
      },
      {
        id: 4,
        text: 'Phương pháp nào giúp bạn xả stress và thư giãn hiệu quả nhất?',
        options: [
          { id: '4a', text: 'Nghe nhạc êm dịu, đốt nến thơm hoặc xông tinh dầu' },
          { id: '4b', text: 'Đi dạo hóng gió ngoài trời hoặc chạy bộ' },
          { id: '4c', text: 'Tâm sự với người thân, bạn bè thân thiết' },
          { id: '4d', text: 'Chơi game hoặc xem phim yêu thích' },
        ],
      },
      {
        id: 5,
        text: 'Bạn đánh giá chất lượng giấc ngủ ảnh hưởng thế nào đến ngày làm việc hôm sau?',
        options: [
          { id: '5a', text: 'Cực kỳ quan trọng, quyết định 100% năng lượng và tâm trạng' },
          { id: '5b', text: 'Có ảnh hưởng nhưng uống cà phê là tỉnh táo lại' },
          { id: '5c', text: 'Quen với việc ngủ ít nên thấy bình thường' },
          { id: '5d', text: 'Chưa từng để ý' },
        ],
      },
    ],
  },
  {
    id: 29,
    title: 'Ứng dụng Trí tuệ Nhân tạo (AI) trong Cuộc sống hàng ngày',
    category: 'Công nghệ & Tương lai',
    description: 'Trải nghiệm sử dụng Gemini, ChatGPT, trợ lý giọng nói và tự động hóa công việc.',
    iconName: 'Cpu',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Bạn đã từng sử dụng công cụ AI tạo sinh nào dưới đây?',
        options: [
          { id: '1a', text: 'Google Gemini' },
          { id: '1b', text: 'ChatGPT (OpenAI)' },
          { id: '1c', text: 'Copilot / Claude / Midjourney' },
          { id: '1d', text: 'Đã sử dụng nhiều công cụ kết hợp' },
        ],
      },
      {
        id: 2,
        text: 'Bạn ứng dụng AI vào những công việc gì nhiều nhất?',
        options: [
          { id: '2a', text: 'Viết email, soạn thảo nội dung, dịch thuật' },
          { id: '2b', text: 'Hỏi đáp tra cứu thông tin, tóm tắt bài viết' },
          { id: '2c', text: 'Hỗ trợ lập trình, sửa lỗi code' },
          { id: '2d', text: 'Tạo hình ảnh nghệ thuật, ý tưởng sáng tạo' },
        ],
      },
      {
        id: 3,
        text: 'AI giúp bạn tiết kiệm được bao nhiêu thời gian làm việc mỗi tuần?',
        options: [
          { id: '3a', text: 'Tiết kiệm từ 5 - 10 tiếng mỗi tuần' },
          { id: '3b', text: 'Tiết kiệm từ 1 - 4 tiếng' },
          { id: '3c', text: 'Mới chỉ thử nghiệm chứ chưa ứng dụng sâu' },
          { id: '3d', text: 'Không tiết kiệm được nhiều' },
        ],
      },
      {
        id: 4,
        text: 'Bạn có lo ngại AI sẽ thay thế một phần công việc của con người trong 5 năm tới không?',
        options: [
          { id: '4a', text: 'Có, cần chủ động nâng cao kỹ năng để thích ứng' },
          { id: '4b', text: 'Chỉ thay thế các công việc lặp đi lặp lại đơn giản' },
          { id: '4c', text: 'Không, AI chỉ là công cụ hỗ trợ con người tốt hơn' },
          { id: '4d', text: 'Chưa có suy nghĩ về vấn đề này' },
        ],
      },
      {
        id: 5,
        text: 'Bạn có sẵn sàng trả phí cho các phiên bản AI cao cấp (như Gemini Advanced, ChatGPT Plus)?',
        options: [
          { id: '5a', text: 'Đang trả phí vì phục vụ công việc đắc lực' },
          { id: '5b', text: 'Sẵn sàng trả nếu giá dưới 200k/tháng' },
          { id: '5c', text: 'Chỉ dùng bản miễn phí là đủ nhu cầu' },
          { id: '5d', text: 'Không có ý định trả phí' },
        ],
      },
    ],
  },
  {
    id: 30,
    title: 'Kế hoạch Tài chính Cá nhân & Mục tiêu Tương lai',
    category: 'Định hướng cuộc sống',
    description: 'Các mục tiêu tài chính ngắn hạn, kế hoạch mua nhà, mua xe và nghỉ hưu an nhàn.',
    iconName: 'Target',
    estimatedMinutes: 2,
    questions: [
      {
        id: 1,
        text: 'Mục tiêu tài chính lớn nhất của bạn trong 3 năm tới là gì?',
        options: [
          { id: '1a', text: 'Tích lũy một khoản tiền tiết kiệm vững chắc' },
          { id: '1b', text: 'Mua nhà riêng / Mua căn hộ chung cư' },
          { id: '1c', text: 'Mua ô tô phục vụ gia đình' },
          { id: '1d', text: 'Khởi nghiệp kinh doanh riêng hoặc học lên cao' },
        ],
      },
      {
        id: 2,
        text: 'Bạn mong muốn độ tuổi nghỉ hưu tài chính tự do (FIRE) của mình là bao nhiêu?',
        options: [
          { id: '2a', text: 'Nghỉ hưu sớm trước 45 tuổi' },
          { id: '2b', text: 'Khoảng 50 - 55 tuổi' },
          { id: '2c', text: '60 tuổi theo quy định' },
          { id: '2d', text: 'Thích làm việc cống hiến suốt đời' },
        ],
      },
      {
        id: 3,
        text: 'Nguồn thu nhập của bạn hiện tại gồm những gì?',
        options: [
          { id: '3a', text: '1 nguồn thu nhập duy nhất từ lương chính' },
          { id: '3b', text: 'Lương chính + Nghề tay trái (Side hustle / Freelance)' },
          { id: '3c', text: 'Thu nhập từ kinh doanh bán hàng' },
          { id: '3d', text: 'Thu nhập thụ động từ đầu tư, cho thuê' },
        ],
      },
      {
        id: 4,
        text: 'Kỹ năng nào bạn cho rằng quyết định nhiều nhất đến sự thịnh vượng tài chính?',
        options: [
          { id: '4a', text: 'Kỹ năng chuyên môn giỏi & không ngừng học tập' },
          { id: '4b', text: 'Kỹ năng quản lý tài chính, kiểm soát lòng tham và kiên trì' },
          { id: '4c', text: 'Kỹ năng giao tiếp, xây dựng mạng lưới quan hệ chất lượng' },
          { id: '4d', text: 'Sự nhạy bén nắm bắt thời cơ thị trường' },
        ],
      },
      {
        id: 5,
        text: 'Trải nghiệm làm khảo sát và tích lũy tiền thưởng online hôm nay của bạn thế nào?',
        options: [
          { id: '5a', text: 'Rất tuyệt vời, vừa học hỏi kiến thức vừa nhận thưởng tiền mặt!' },
          { id: '5b', text: 'Giao diện mượt mà, tiền thưởng câu hỏi cộng ngay' },
          { id: '5c', text: 'Rất hài lòng với tính năng rút tiền ngân hàng nhanh chóng' },
          { id: '5d', text: 'Sẽ giới thiệu cho bạn bè cùng tham gia' },
        ],
      },
    ],
  },
];
