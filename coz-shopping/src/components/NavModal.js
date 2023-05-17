import React, { useState } from 'react';

function NavModal() {
  const [bookmarkedProducts, setBookmarkedProducts] = useState([]);

  // 북마크한 상품들을 조회하는 함수
  const fetchBookmarkedProducts = () => {
    // 상품 조회 로직 구현
    // bookmarkedProducts 상태 업데이트
  };

  // 초기 마운트 시 북마크한 상품들을 조회합니다.
  useEffect(() => {
    fetchBookmarkedProducts();
  }, []);

  return (
    <div className="NavModal">
      <h3>북마크한 상품들</h3>
      {bookmarkedProducts.length > 0 ? (
        <ul>
          {bookmarkedProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>북마크한 상품이 없습니다.</p>
      )}
    </div>
  );
}

export default NavModal;