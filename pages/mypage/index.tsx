import Link from 'next/link';
import React from 'react';

const MyPage = () => {
  return (
    <div>
      <Link href="/mypage/customer">customer</Link>
      <Link href="/mypage/home_service_provider">hsp</Link>
      <Link href="/mypage/real_estate_agent">rea</Link>
    </div>
  );
};

export default MyPage;
