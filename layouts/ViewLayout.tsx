import SelectBox from '@/components/SelectBox';
import color from '@/styles/color.theme';
import reset from 'assets/reset.svg';
import Image from 'next/image';
import React from 'react';
import * as S from './ViewLayout.style';
import SelectOptionType from '@/types/selectOption.type';
import { IHSProvider } from '@zipzoong/sdk/lib/structures/user/hs_provider';
import { IREAgent } from '@zipzoong/sdk/lib/structures/user/re_agent';

interface ViewLayoutPropsType {
  option: SelectOptionType;
  data: IHSProvider.ISummary[] | IREAgent.ISummary[];
  type: string;
}

const ViewLayout = ({ option, data, type }: ViewLayoutPropsType) => {
  return (
    <S.SearchContainer>
      <S.SearchLayout>
        <S.SearchButton />
        <S.SearchBoxContainer>
          <S.SearchSelectBoxContainer>
            <SelectBox option={option} />
          </S.SearchSelectBoxContainer>
          <S.SearchItemContainer>
            <S.SearchSearchContainer>
              <Image id="search--image" src={reset} alt="" />
              {['전문분야 선택', '지역 옵션', '전문가 옵션', '인기순'].map((title, index) => (
                <S.SearchSearchButton
                  backgroundColor={!index ? color.black : color.white}
                  color={!index ? color.tertiary_container : color.gray}
                  key={index}
                >
                  <span>{title}</span>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#F6F6F6" />
                  </svg>
                </S.SearchSearchButton>
              ))}
              <S.SearchSearchClearButton>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#B3B3B3"
                  />
                </svg>
                <span>초기화하기</span>
              </S.SearchSearchClearButton>
            </S.SearchSearchContainer>
            {data.map(item => (
              <S.SearchItem href={`/detail/${item.type.replace(/ /gi, '_')}/${item.id}`} key={item.id}>
                <S.SearchItemImage src={`/${item.profile_image_url}`} alt="" width={500} height={500} />
                <S.SearchItemDetailContainer>
                  <S.SearchBlueSubTitleWrap>
                    <div id="tag">
                      <div id="circle" />
                      <span>{item.expertise.super_category_name}</span>
                    </div>
                    <S.SearchReviewBox>후기 00건</S.SearchReviewBox>
                  </S.SearchBlueSubTitleWrap>
                  <S.SearchTitleContainer>{item.name}</S.SearchTitleContainer>
                  <S.SearchTitleSubText>{item.introduction.content}</S.SearchTitleSubText>
                  <S.SearchFlexBox>
                    <S.SearchHashtagContainer>
                      {item.expertise.sub_expertises.map(category => (
                        <S.SearchHashtag key={category.sub_category_id}>#{category.sub_category_name}</S.SearchHashtag>
                      ))}
                    </S.SearchHashtagContainer>
                    <S.SearchLinkButtonContainer>
                      <S.SearchLinkButton color={color.on_tertiary_container}>
                        자세히
                        <br />
                        알아보기
                      </S.SearchLinkButton>
                      <S.SearchLinkButton color={color.primary}>
                        바로
                        <br />
                        상담하기
                      </S.SearchLinkButton>
                    </S.SearchLinkButtonContainer>
                  </S.SearchFlexBox>
                </S.SearchItemDetailContainer>
              </S.SearchItem>
            ))}
            <S.SearchPagenationContainer>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.705 7.41L14.295 6L8.29504 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
                  fill="#898989"
                />
              </svg>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.70504 0L0.295044 1.41L4.87504 6L0.295044 10.59L1.70504 12L7.70504 6L1.70504 0Z"
                  fill="#898989"
                />
              </svg>
            </S.SearchPagenationContainer>
          </S.SearchItemContainer>
        </S.SearchBoxContainer>
      </S.SearchLayout>
    </S.SearchContainer>
  );
};

export default ViewLayout;
