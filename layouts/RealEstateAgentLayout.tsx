import React from 'react';
import color from '@/styles/color.theme';
import dropdown from 'assets/detaildropdown.svg';
import dropup from 'assets/detaildropup.svg';
import * as S from './DetailLayout.style';
import { IREAgent } from '@zipzoong/sdk/lib/structures/user/re_agent';

interface DetailLayoutPropsType {
  data: IREAgent.IPublic;
}

const RealEstateAgentLayout = ({ data }: DetailLayoutPropsType) => {
  const [detailType, setDetailType] = React.useState('ALL');
  const [isOpenInfo, setIsOpenInfo] = React.useState(true);

  return (
    <S.DetailLayout>
      <S.DetailControlBar>
        <S.DetailControlOption onClick={() => setDetailType('ALL')} colors={detailType === 'ALL' ? color.primary : ''}>
          <span>전체보기</span>
        </S.DetailControlOption>
        <S.DetailControlOption
          onClick={() => setDetailType('ITEM')}
          colors={detailType === 'ITEM' ? color.primary : ''}
        >
          <span>작업사례({0})</span>
        </S.DetailControlOption>
        <S.DetailControlOption
          onClick={() => setDetailType('REVIEW')}
          colors={detailType === 'REVIEW' ? color.primary : ''}
        >
          <span>계약자후기({0})</span>
        </S.DetailControlOption>
      </S.DetailControlBar>
      <S.DetailContainer>
        <S.DetailProfileContainer>
          <S.DetailProfileImage src={`/${data.profile_image_url}`} alt="" width={500} height={500} />
          <S.DetailProfileTitle>{data.name}</S.DetailProfileTitle>
          <S.DetailProfileReview>후기 00건</S.DetailProfileReview>
          <S.DetailProfileGraphContainer>
            {['만족도', '소통', '일정', '가격'].map((title, index) => (
              <S.DetailProfileGraph key={index}>
                <span>{title}</span>
                <S.DetailProfileGraphBar>
                  <S.DetailProfileGraphCharge review={index + 1} />
                </S.DetailProfileGraphBar>
              </S.DetailProfileGraph>
            ))}
          </S.DetailProfileGraphContainer>
          <S.DetailProfileButton color={color.primary}>상담신청</S.DetailProfileButton>
          <S.DetailProfileButton color={color.tertiary_container}>후기작성</S.DetailProfileButton>
        </S.DetailProfileContainer>
        {detailType === 'ALL' && (
          <S.DetailInfoContainer>
            <S.DetailInfoHashtagContainer></S.DetailInfoHashtagContainer>
            <S.DetailInfoTitle>{data.introduction.title}</S.DetailInfoTitle>
            <S.DetailInfoDescription>{data.introduction.content}</S.DetailInfoDescription>
            <S.DetailInfoBoxContainer>
              <S.DetailInfoBox>
                <span>근무형태</span>
                {data.real_estate.licensed_agent_name}
              </S.DetailInfoBox>
              <S.DetailInfoBox>
                <span>전문분야</span> {data.expertise.super_category_name}
              </S.DetailInfoBox>
            </S.DetailInfoBoxContainer>
            <S.DetailInfoButton onClick={() => setIsOpenInfo(!isOpenInfo)}>
              <span>부동산등록 정보</span>
              <S.DetailInfoButtonDropdown src={isOpenInfo ? dropup : dropdown} alt="" />
            </S.DetailInfoButton>
            {isOpenInfo && (
              <S.DetailInfomationContainer>
                <S.DetailInfomation>
                  <div>개설등록번호</div> {data.real_estate.num}
                </S.DetailInfomation>
                <S.DetailInfomation>
                  <div>상호명</div> {data.real_estate.name}
                </S.DetailInfomation>
                <S.DetailInfomation>
                  <div>대표자</div> {data.name}
                </S.DetailInfomation>
                <S.DetailInfomation>
                  <div>대표번호</div> {data.real_estate.phone}
                </S.DetailInfomation>
                <S.DetailInfomation>
                  <div>소재지</div> {'소재지'}
                </S.DetailInfomation>
              </S.DetailInfomationContainer>
            )}
            <S.DetailItemContainer>
              <S.DetailItemTitle>
                <span>매물정보</span>
                <h1 id="full">전체보기</h1>
              </S.DetailItemTitle>
              <S.DetailItemFlexBox></S.DetailItemFlexBox>
            </S.DetailItemContainer>
            {/* <S.DetailReviewContainer>
        <S.DetailItemTitle>
          <span>계약자후기</span>
          <h1 id="full">전체보기</h1>
        </S.DetailItemTitle>
        <S.DetailReviewFlexBox>
          {[1, 2].map(key => (
            <S.DetailReview key={key}>
              <S.DetailReviewInfo>
                <span>뽀롱뽀롱뾰로롱</span>
                <p>
                  집이너무이쁘네요. 로렘 입섬 돌로
                  <br />
                  아멧 집 너무 이뻐요! 서울에
                  <br />
                  집값이 너무비싸요 눈물...
                </p>
              </S.DetailReviewInfo>
              <S.DetailReviewImage src="" alt="" />
            </S.DetailReview>
          ))}
        </S.DetailReviewFlexBox>
      </S.DetailReviewContainer> */}
          </S.DetailInfoContainer>
        )}
        {/* {detailType === 'ITEM' && (
          <S.DetailInfoContainer>
            <S.DetailItemContainer>
              {[1, 2, 3, 4, 5].map(p_key => (
                <S.DetailItemFlexBox key={p_key}>
                  {[1, 2, 3].map(key => (
                    <S.DetailItemBox key={key}>
                      <S.DetailItemImage src="" alt="" />
                      <S.DetailItemName>00시 00동 0000아파트 00평대</S.DetailItemName>
                      <S.DetailItemDescription>찜 00 · 조회 00</S.DetailItemDescription>
                    </S.DetailItemBox>
                  ))}
                </S.DetailItemFlexBox>
              ))}
            </S.DetailItemContainer>
          </S.DetailInfoContainer>
        )} */}
        {/* {detailType === 'REVIEW' && <DetailReview {...props} />} */}
      </S.DetailContainer>
    </S.DetailLayout>
  );
};

export default RealEstateAgentLayout;
