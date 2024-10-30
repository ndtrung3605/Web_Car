document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '../assets/image/BuyCar/CarImg/1/1.JPG',
        '../assets/image/BuyCar/CarImg/1/2.JPG',
        '../assets/image/BuyCar/CarImg/1/3.JPG',
        '../assets/image/BuyCar/CarImg/1/4.JPG',
        '../assets/image/BuyCar/CarImg/1/5.JPG'
    ];

    let currentIndex = 0;
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');

    // Hàm cập nhật ảnh chính và highlight thumbnail
    function updateImage(index) {
        mainImage.src = images[index];
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index); // Highlight thumbnail hiện tại
        });
    }

    // Chuyển sang ảnh trước
    function prevImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage(currentIndex);
    }

    // Chuyển sang ảnh kế tiếp
    function nextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage(currentIndex);
    }

    // Chuyển đổi ảnh khi nhấn vào thumbnail
    function changeImage(imageUrl, index) {
        currentIndex = index;
        updateImage(currentIndex);
    }

    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    // Gán sự kiện click cho từng thumbnail để thay đổi ảnh
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => changeImage(images[index], index));
    });

    // Hiển thị ảnh đầu tiên khi tải trang
    updateImage(currentIndex);
});
