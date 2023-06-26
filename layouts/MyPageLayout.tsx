import React from 'react';
import * as S from './MyPageLayout.style';
import { ICustomer } from '@zipzoong/sdk/lib/structures/user/customer';
import { IHSProvider } from '@zipzoong/sdk/lib/structures/user/hs_provider';
import { IREAgent } from '@zipzoong/sdk/lib/structures/user/re_agent';

interface MyPageLayoutPropsType {
  data: ICustomer.IPrivate;
  major: IHSProvider.IPrivate | IREAgent.IPrivate;
}

const MyPageLayout = ({ data, major }: MyPageLayoutPropsType) => {
  return (
    <S.MyPageLayout>
      <S.MyPageContainer>
        <S.MyPageProfileContainer>
          <S.MyPageProfileTitleContainer>
            <S.MyPageProfileTitleContainerTitle>일반 회원</S.MyPageProfileTitleContainerTitle>
            <S.MyPageProfileTitleContainerBadge>인증 완료</S.MyPageProfileTitleContainerBadge>
          </S.MyPageProfileTitleContainer>
          <S.MyPageProfileImageContainer>
            <S.MyPageProfileImage src="/" alt="" width={100} height={100} />
            <S.MyPageProfileImageText>
              <b>{data.name}</b>
            </S.MyPageProfileImageText>
            <S.MyPageProfileImageText>
              {!major.type && '회원님'}
              {major.type === 'real estate agent' && '공인중개사님'}
              {major.type === 'home service provider' && '생활전문가님'}
            </S.MyPageProfileImageText>
          </S.MyPageProfileImageContainer>
          <S.MyPageProfileList>
            <S.MyPageProfileListItem>나의 정보</S.MyPageProfileListItem>
            <S.MyPageProfileListItem>내정보 관리</S.MyPageProfileListItem>
            <S.MyPageProfileListItem>커뮤니티</S.MyPageProfileListItem>
          </S.MyPageProfileList>
          <S.MyPageProfileList>
            <S.MyPageProfileListItem>공지 사항</S.MyPageProfileListItem>
            <S.MyPageProfileListItem>고객 센터</S.MyPageProfileListItem>
          </S.MyPageProfileList>
        </S.MyPageProfileContainer>
        <S.MyPageInfomationContainer>
          <S.MyPageInfomationBox>
            <S.MyPageInfomationHeader>내정보</S.MyPageInfomationHeader>
            <S.MyPageInfomationFigure tree>
              내정보
              <button>수정</button>
            </S.MyPageInfomationFigure>
            <S.MyPageInfomationFigure>
              본명 : {data.name}
              <button>수정</button>
            </S.MyPageInfomationFigure>
            <S.MyPageInfomationFigure>
              {data.phone}
              <button>수정</button>
            </S.MyPageInfomationFigure>
            <S.MyPageInfomationFigure last>
              {data.email}
              <button>수정</button>
            </S.MyPageInfomationFigure>
          </S.MyPageInfomationBox>
          {data.type !== 'customer' && (
            <S.MyPageInfomationBox>
              <S.MyPageInfomationHeader>포트폴리오 관리</S.MyPageInfomationHeader>
              <S.MyPageInfomationFigure tree>
                포트폴리오 관리 <button>확인</button>
              </S.MyPageInfomationFigure>
              {data.type === 'real estate agent' && (
                <S.MyPageInfomationFigure tree>
                  매물 수정/삭제
                  <button>확인</button>
                </S.MyPageInfomationFigure>
              )}
            </S.MyPageInfomationBox>
          )}
          {data.type === 'customer' && (
            <S.MyPageInfomationBox>
              <S.MyPageInfomationHeader>내정보 관리</S.MyPageInfomationHeader>
              <S.MyPageInfomationFigure tree>
                찜<button>관리</button>
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure tree>
                집중 케어
                <button>관리</button>
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure tree>
                후기 관리
                <button>관리</button>
              </S.MyPageInfomationFigure>
            </S.MyPageInfomationBox>
          )}
          <S.MyPageInfomationBox>
            <S.MyPageInfomationHeader>커뮤니티</S.MyPageInfomationHeader>
            <S.MyPageInfomationFigure tree>
              내가 작성한 글 목록<button>확인</button>
            </S.MyPageInfomationFigure>
            <S.MyPageInfomationFigure tree>
              내가 작성한 댓글 목록
              <button>확인</button>
            </S.MyPageInfomationFigure>
          </S.MyPageInfomationBox>
        </S.MyPageInfomationContainer>
      </S.MyPageContainer>
    </S.MyPageLayout>
  );
};

export default MyPageLayout;
