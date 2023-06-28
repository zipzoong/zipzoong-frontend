import React from 'react';
import * as S from '@/layouts/MyPageLayout.style';
import { ICustomer } from '@zipzoong/sdk/lib/structures/user/customer';
import { users } from '@zipzoong/sdk/lib/functional';
import service from '@/constants/service.constants';
import connection from '@/lib/connection';
import { GetServerSideProps } from 'next';
import { IREAgent } from '@zipzoong/sdk/lib/structures/user/re_agent';

interface MyPageSSRPropsType {
  data: IREAgent.IPrivate;
}

const RealEstateAgent = ({ data }: MyPageSSRPropsType) => {
  const [editMode, setEditMode] = React.useState(false);

  const onToggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <S.MyPageLayout>
      <S.MyPageContainer>
        <S.MyPageProfileContainer>
          <S.MyPageProfileTitleContainer>
            <S.MyPageProfileTitleContainerTitle>공인중개사</S.MyPageProfileTitleContainerTitle>
            <S.MyPageProfileTitleContainerBadge>승인</S.MyPageProfileTitleContainerBadge>
          </S.MyPageProfileTitleContainer>
          <S.MyPageProfileImageContainer>
            <S.MyPageProfileImage src="/" alt="" width={100} height={100} />
            <S.MyPageProfileImageText>
              <b>{data.name}</b>
            </S.MyPageProfileImageText>
            <S.MyPageProfileImageText>회원님</S.MyPageProfileImageText>
          </S.MyPageProfileImageContainer>
          <S.MyPageProfileList>
            <S.MyPageProfileListItem>내 정보</S.MyPageProfileListItem>
            <S.MyPageProfileListItem>나의 관리</S.MyPageProfileListItem>
            <S.MyPageProfileListItem>커뮤니티</S.MyPageProfileListItem>
          </S.MyPageProfileList>
          <S.MyPageProfileList>
            <S.MyPageProfileListItem>공지 사항</S.MyPageProfileListItem>
            <S.MyPageProfileListItem>고객 센터</S.MyPageProfileListItem>
          </S.MyPageProfileList>
        </S.MyPageProfileContainer>
        {editMode ? (
          <S.MyPageInfomationContainer>
            <S.MyPageInfomationBox>
              <section>
                <svg width="18" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 4.33333L15.1667 8.66667H18.4167C18.4167 12.2525 15.5025 15.1667 11.9167 15.1667C10.8225 15.1667 9.7825 14.8958 8.88333 14.4083L7.30167 15.99C8.63417 16.835 10.2158 17.3333 11.9167 17.3333C16.705 17.3333 20.5833 13.455 20.5833 8.66667H23.8333L19.5 4.33333ZM5.41667 8.66667C5.41667 5.08083 8.33083 2.16667 11.9167 2.16667C13.0108 2.16667 14.0508 2.4375 14.95 2.925L16.5317 1.34333C15.1992 0.498333 13.6175 0 11.9167 0C7.12833 0 3.25 3.87833 3.25 8.66667H0L4.33333 13L8.66667 8.66667H5.41667Z"
                    fill="#3772F7"
                  />
                </svg>
                <span>소속 공인중개사 전환</span>
              </section>
            </S.MyPageInfomationBox>
            <S.MyPageInfoDefaultBox>
              <S.MyPageDefaultText>기본 정보</S.MyPageDefaultText>
              <S.MyPageDefaultProfileBox>
                <S.MyPageDefaultImage src={`/${data.profile_image_url}`} alt="" width={500} height={500} />
                <S.MyPageDefaultTextBoxContainer>
                  <S.MyPageDefaultTextBox>
                    <span>{data.name} 공인중개사</span>
                    <figure>{data.created_at}</figure>
                  </S.MyPageDefaultTextBox>
                  <button>실명 수정</button>
                </S.MyPageDefaultTextBoxContainer>
              </S.MyPageDefaultProfileBox>
              <S.MyPageInfomationFigure>
                <svg width="12" height="18" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 0.314209H2C1.46957 0.314209 0.960859 0.524923 0.585786 0.899995C0.210714 1.27507 0 1.78378 0 2.31421V18.3142C0 18.8446 0.210714 19.3533 0.585786 19.7284C0.960859 20.1035 1.46957 20.3142 2 20.3142H10C10.5304 20.3142 11.0391 20.1035 11.4142 19.7284C11.7893 19.3533 12 18.8446 12 18.3142V2.31421C12 1.78378 11.7893 1.27507 11.4142 0.899995C11.0391 0.524923 10.5304 0.314209 10 0.314209ZM7 19.3142H5V18.3142H7V19.3142ZM10 17.3142H2V3.31421H10V17.3142Z"
                    fill="black"
                  />
                </svg>
                &nbsp;&nbsp;{data.phone}
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure last>
                <svg width="16" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7446 2.44067C20.7446 1.34067 19.8446 0.440674 18.7446 0.440674H2.74463C1.64463 0.440674 0.744629 1.34067 0.744629 2.44067V14.4407C0.744629 15.5407 1.64463 16.4407 2.74463 16.4407H18.7446C19.8446 16.4407 20.7446 15.5407 20.7446 14.4407V2.44067ZM18.7446 2.44067L10.7446 7.44067L2.74463 2.44067H18.7446ZM18.7446 14.4407H2.74463V4.44067L10.7446 9.44067L18.7446 4.44067V14.4407Z"
                    fill="black"
                  />
                </svg>
                &nbsp;&nbsp;{data.email}
              </S.MyPageInfomationFigure>
            </S.MyPageInfoDefaultBox>
            <S.MyPageInfoDefaultBox>
              <S.MyPageDefaultDiv>
                <S.MyPageDefaultText>구분</S.MyPageDefaultText>
                <section>개업(대표) 공인중개사</section>
              </S.MyPageDefaultDiv>
              <S.MyPageDefaultDiv>
                <S.MyPageDefaultText>
                  전문분야
                  <br />
                  <small>*부득이하게 전문분야를 변경을 원하시는 경우 고객센터로 문의주세요!</small>
                </S.MyPageDefaultText>
                <section>{data.expertise.super_category_name}</section>
              </S.MyPageDefaultDiv>
            </S.MyPageInfoDefaultBox>
            <S.MyPageInfomationBox>
              <S.MyPageInfomationHeader>부동산</S.MyPageInfomationHeader>
              <S.MyPageInputBox>
                <S.MyPageInputText>상호명</S.MyPageInputText>
                <S.MyPageInput placeholder="집중 공인중개사" />
              </S.MyPageInputBox>
              <S.MyPageInputBox>
                <S.MyPageInputText>중개등록 번호</S.MyPageInputText>
                <S.MyPageInput placeholder="12545-5888-25479" />
              </S.MyPageInputBox>
              <S.MyPageInputBox>
                <S.MyPageInputText>대표전화 번호</S.MyPageInputText>
                <div>
                  <S.MyPageInput placeholder="일반 전화번호를 입력 하세요" style={{ width: '42vw' }} />
                  <S.MyPageInput value="재인증하기" style={{ width: '7.4vw', marginLeft: '12px' }} />
                </div>
              </S.MyPageInputBox>
              <S.MyPageInputBox>
                <S.MyPageInputText>사업장 주소</S.MyPageInputText>
                <S.MyPageInput readOnly placeholder="서울특별시 서초구 서초대로 46길 99" />
                <S.MyPageInput placeholder="4층 (주)집중" />
              </S.MyPageInputBox>
            </S.MyPageInfomationBox>
            <S.MyPageInfomationBox>
              <S.MyPageInfomationHeader>대표 정보</S.MyPageInfomationHeader>
              <S.MyPageInputBox>
                <S.MyPageInputText>대표자 성명</S.MyPageInputText>
                <S.MyPageInput placeholder="집중 공인중개사" />
              </S.MyPageInputBox>
              <S.MyPageInputBox>
                <S.MyPageInputText>대표자 연락처</S.MyPageInputText>
                <S.MyPageInput placeholder="12545-5888-25479" />
              </S.MyPageInputBox>
              <S.MyPageInputBox>
                <S.MyPageInputText>공인중개사 인증 서류</S.MyPageInputText>
                <small> ＊ 전문가 자격증을 올려주세요! </small>
                <small> ＊주민번호가 노출될 염려가 있으니 생년월일을 제외한 번호는가려서 올려주세요! </small>
                <S.MyPageLabelBox>
                  <S.MyPageLabel htmlFor="file1">
                    <div>
                      <svg width="50" height="50" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.2759 34C7.87588 34 0.275879 26.4 0.275879 17C0.275879 7.6 7.87588 0 17.2759 0C26.6759 0 34.2759 7.6 34.2759 17C34.2759 26.4 26.6759 34 17.2759 34ZM17.2759 2C8.97588 2 2.27588 8.7 2.27588 17C2.27588 25.3 8.97588 32 17.2759 32C25.5759 32 32.2759 25.3 32.2759 17C32.2759 8.7 25.5759 2 17.2759 2Z"
                          fill="#B3B3B3"
                        />
                        <path d="M8.27588 16H26.2759V18H8.27588V16Z" fill="#B3B3B3" />
                        <path d="M16.2759 8H18.2759V26H16.2759V8Z" fill="#B3B3B3" />
                      </svg>
                      <span>사업자 등록증</span>
                    </div>
                  </S.MyPageLabel>
                  <S.MyPageFile type="file" id="file1" />
                  <S.MyPageLabel htmlFor="file1">
                    <div>
                      <svg width="50" height="50" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.2759 34C7.87588 34 0.275879 26.4 0.275879 17C0.275879 7.6 7.87588 0 17.2759 0C26.6759 0 34.2759 7.6 34.2759 17C34.2759 26.4 26.6759 34 17.2759 34ZM17.2759 2C8.97588 2 2.27588 8.7 2.27588 17C2.27588 25.3 8.97588 32 17.2759 32C25.5759 32 32.2759 25.3 32.2759 17C32.2759 8.7 25.5759 2 17.2759 2Z"
                          fill="#B3B3B3"
                        />
                        <path d="M8.27588 16H26.2759V18H8.27588V16Z" fill="#B3B3B3" />
                        <path d="M16.2759 8H18.2759V26H16.2759V8Z" fill="#B3B3B3" />
                      </svg>
                      <span>중개 사무소 등록증</span>
                    </div>
                  </S.MyPageLabel>
                  <S.MyPageFile type="file" id="file1" />
                  <S.MyPageLabel htmlFor="file1">
                    <div>
                      <svg width="50" height="50" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.2759 34C7.87588 34 0.275879 26.4 0.275879 17C0.275879 7.6 7.87588 0 17.2759 0C26.6759 0 34.2759 7.6 34.2759 17C34.2759 26.4 26.6759 34 17.2759 34ZM17.2759 2C8.97588 2 2.27588 8.7 2.27588 17C2.27588 25.3 8.97588 32 17.2759 32C25.5759 32 32.2759 25.3 32.2759 17C32.2759 8.7 25.5759 2 17.2759 2Z"
                          fill="#B3B3B3"
                        />
                        <path d="M8.27588 16H26.2759V18H8.27588V16Z" fill="#B3B3B3" />
                        <path d="M16.2759 8H18.2759V26H16.2759V8Z" fill="#B3B3B3" />
                      </svg>
                      <span>중개사 자격증</span>
                    </div>
                  </S.MyPageLabel>
                  <S.MyPageFile type="file" id="file1" />
                </S.MyPageLabelBox>
                <S.MyPageButton>이미지 전체 삭제</S.MyPageButton>
              </S.MyPageInputBox>
              <S.MyPageInputBox>
                <S.MyPageInputText>공인중개사 본인 사진</S.MyPageInputText>
                <S.MyPageLabelBox>
                  <S.MyPageLabel htmlFor="file1">
                    <div>
                      <svg width="50" height="50" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.2759 34C7.87588 34 0.275879 26.4 0.275879 17C0.275879 7.6 7.87588 0 17.2759 0C26.6759 0 34.2759 7.6 34.2759 17C34.2759 26.4 26.6759 34 17.2759 34ZM17.2759 2C8.97588 2 2.27588 8.7 2.27588 17C2.27588 25.3 8.97588 32 17.2759 32C25.5759 32 32.2759 25.3 32.2759 17C32.2759 8.7 25.5759 2 17.2759 2Z"
                          fill="#B3B3B3"
                        />
                        <path d="M8.27588 16H26.2759V18H8.27588V16Z" fill="#B3B3B3" />
                        <path d="M16.2759 8H18.2759V26H16.2759V8Z" fill="#B3B3B3" />
                      </svg>
                      <span>사업자 등록증</span>
                    </div>
                  </S.MyPageLabel>
                </S.MyPageLabelBox>
                <div style={{ width: '96%', display: 'flex' }}>
                  <S.MyPageButton style={{ marginRight: '2%' }}>프로필 이미지 변경</S.MyPageButton>
                  <S.MyPageButton style={{ marginLeft: '0', marginRight: '0' }}>프로필 이미지 삭제</S.MyPageButton>
                </div>
              </S.MyPageInputBox>
              <S.MyPageInputBox>
                <S.MyPageInputText>자기 소개글(선택)</S.MyPageInputText>
                <S.MyPageInput placeholder="제목을 입력하세요" />
                <S.MyPageTextarea />
              </S.MyPageInputBox>
            </S.MyPageInfomationBox>
            <S.MyPageInfomationSubmit>변경 요청</S.MyPageInfomationSubmit>
          </S.MyPageInfomationContainer>
        ) : (
          <S.MyPageInfomationContainer>
            <S.MyPageInfomationBox>
              <S.MyPageInfomationHeader>나의 정보</S.MyPageInfomationHeader>
              <S.MyPageInfomationFigure tree>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="20" height="20" fill="url(#pattern0)" />
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_610_11873" transform="scale(0.0208333)" />
                    </pattern>
                    <image
                      id="image0_610_11873"
                      width="48"
                      height="48"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA39JREFUaEPtmEnozVEUxz//hbKQKYqFUoSQIcqQBZkyRIgM2VBkQSlzCgsRKSGhWMgUkhCKsDEVZZa5KEUUNuboW+fV7f5/0/vdn/e8eqfe4v3uued+v/ece+45t4Eal4Yax0+dQLU9WPdA3QOBO1APIWcDmwBdgd/Ac+Bn4OZmml6EBxYCc4AegEhIfgAPgNPA2kxIciqFEOgOHDXgScu/BSYCt3JiTJwWQuCPZ/kz8NpCqCPQ0hsPWSuWRF6ju4F5jtX5wB5vlZ3AAufbamB90V7IQ6A18NEBsi4hzicBJxzdtsCHIknkITAAuGEgLgCjUgBJZ4TpDAGuVpvAbGC/gdjlhUkUtr2WpTQ2F9hXbQJLgM0GYiOwMgXQJmCp6SwH9L8wyRNCY4CzhuAIMCMFzXFgiukonZ4qDD3k6gc6A88MxDegH/AoBlR74CnQzMa7AU+qTUDr61IScMlDoGcMKB3YwTZ2CRheJHjZyhNCmjcTOOiAeQdsBV5YDdQFWAW0cHRE5Pr/QkA4zgDjMgI6BkzLqFuWWl4PlBYZDWxJqIdUByljyTtJIs8MNIVOwMusLEIJaJ3mwHhAxZ0O6S/gvpXUl4H3KWCaAm+ANqY3ErhYSQJZ14rTE+nHzmBUXRW7RhEeCCEwCFgMTHWMXLHL7lwWw0USUPnsltEC4ooKuQnAPbs31ARtSwCpc6Fm6RPQC+gdVTTmIaBqVLdxfwMs0C5wLdgO+O6BU/Pj7nSWDfZ1tOZt92NWArpRJ1vaFPgkOW8EXR0BF4EoWQbosOsciLjs61uHCOVG6TiNwFgDrlrG77B8+1+AV5ZBVPD5EkViO7AoQrePkXLXjLxLkgioGV8Ts2vXrCgTYP2Ut90mJ85DLgmFWqsEV64ANth47EUYR+AwMN0zfhNQZjhgJUOeGNacUi99B+ibYMQlG9v1RRFQkea+IGiygItAEVIioGykzBInKtMP2WBZBNR0qFGRyMCsIlCbDXdXv9pDmG7hKHFDuKwQumt5V0Ybpa0AMlGHeIflet/sUDvE7vfMh9h970nLUln5JKVR9dXqm0tpVD13XPLIlEZdAsOyIvT0/FtYwxW7yPwXt3I5nAT0HuRLxUqJUALK73o7Ui+cJv+kmNO1XoRkDb+aLqe1UTXf0IhEVVvKIsItt42i8nxuAKET6wRCdzB0ft0DoTsYOv8vWeOoMTX7k4IAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
                &nbsp;&nbsp; 나의 정보 관리
                <button onClick={onToggleEditMode}>수정</button>
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure>
                <svg width="15" height="15" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 8.31665C6.9 8.31665 5.95833 7.92498 5.175 7.14165C4.39167 6.35832 4 5.41665 4 4.31665C4 3.21665 4.39167 2.27498 5.175 1.49165C5.95833 0.708317 6.9 0.31665 8 0.31665C9.1 0.31665 10.0417 0.708317 10.825 1.49165C11.6083 2.27498 12 3.21665 12 4.31665C12 5.41665 11.6083 6.35832 10.825 7.14165C10.0417 7.92498 9.1 8.31665 8 8.31665ZM0 16.3167V13.5167C0 12.95 0.146 12.429 0.438 11.9537C0.73 11.4783 1.11733 11.116 1.6 10.8667C2.63333 10.35 3.68333 9.96232 4.75 9.70365C5.81667 9.44498 6.9 9.31598 8 9.31665C9.1 9.31665 10.1833 9.44598 11.25 9.70465C12.3167 9.96332 13.3667 10.3507 14.4 10.8667C14.8833 11.1167 15.271 11.4793 15.563 11.9546C15.855 12.43 16.0007 12.9507 16 13.5167V16.3167H0ZM2 14.3167H14V13.5167C14 13.3333 13.954 13.1667 13.862 13.0167C13.77 12.8667 13.6493 12.75 13.5 12.6667C12.6 12.2167 11.6917 11.8793 10.775 11.6547C9.85833 11.43 8.93333 11.3173 8 11.3167C7.06667 11.3167 6.14167 11.4293 5.225 11.6547C4.30833 11.88 3.4 12.2173 2.5 12.6667C2.35 12.75 2.229 12.8667 2.137 13.0167C2.045 13.1667 1.99933 13.3333 2 13.5167V14.3167ZM8 6.31665C8.55 6.31665 9.021 6.12065 9.413 5.72865C9.805 5.33665 10.0007 4.86598 10 4.31665C10 3.76665 9.804 3.29565 9.412 2.90365C9.02 2.51165 8.54933 2.31598 8 2.31665C7.45 2.31665 6.979 2.51265 6.587 2.90465C6.195 3.29665 5.99933 3.76732 6 4.31665C6 4.86665 6.196 5.33765 6.588 5.72965C6.98 6.12165 7.45067 6.31732 8 6.31665Z"
                    fill="black"
                  />
                </svg>
                &nbsp;&nbsp;{data.name}님
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure>
                <svg width="12" height="18" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 0.314209H2C1.46957 0.314209 0.960859 0.524923 0.585786 0.899995C0.210714 1.27507 0 1.78378 0 2.31421V18.3142C0 18.8446 0.210714 19.3533 0.585786 19.7284C0.960859 20.1035 1.46957 20.3142 2 20.3142H10C10.5304 20.3142 11.0391 20.1035 11.4142 19.7284C11.7893 19.3533 12 18.8446 12 18.3142V2.31421C12 1.78378 11.7893 1.27507 11.4142 0.899995C11.0391 0.524923 10.5304 0.314209 10 0.314209ZM7 19.3142H5V18.3142H7V19.3142ZM10 17.3142H2V3.31421H10V17.3142Z"
                    fill="black"
                  />
                </svg>
                &nbsp;&nbsp;{data.phone}
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure last>
                <svg width="16" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.7446 2.44067C20.7446 1.34067 19.8446 0.440674 18.7446 0.440674H2.74463C1.64463 0.440674 0.744629 1.34067 0.744629 2.44067V14.4407C0.744629 15.5407 1.64463 16.4407 2.74463 16.4407H18.7446C19.8446 16.4407 20.7446 15.5407 20.7446 14.4407V2.44067ZM18.7446 2.44067L10.7446 7.44067L2.74463 2.44067H18.7446ZM18.7446 14.4407H2.74463V4.44067L10.7446 9.44067L18.7446 4.44067V14.4407Z"
                    fill="black"
                  />
                </svg>
                &nbsp;&nbsp;{data.email}
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure tree>
                <svg width="16" height="16" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.7 7.3L12.7 0.3C12.5 0.0999999 12.3 0 12 0H2C0.9 0 0 0.9 0 2V26C0 27.1 0.9 28 2 28H18C19.1 28 20 27.1 20 26V8C20 7.7 19.9 7.5 19.7 7.3ZM12 2.4L17.6 8H12V2.4ZM18 26H2V2H10V8C10 9.1 10.9 10 12 10H18V26Z"
                    fill="black"
                  />
                  <path d="M4 20H16V22H4V20ZM4 14H16V16H4V14Z" fill="black" />
                </svg>
                &nbsp;&nbsp; 후기 보기
              </S.MyPageInfomationFigure>
            </S.MyPageInfomationBox>
            <S.MyPageInfomationBox>
              <S.MyPageInfomationHeader>포트폴리오 관리</S.MyPageInfomationHeader>
              <S.MyPageInfomationFigure tree>
                포트폴리오 관리 <button>확인</button>
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure tree>
                매물 수정/삭제
                <button>확인</button>
              </S.MyPageInfomationFigure>
            </S.MyPageInfomationBox>
            <S.MyPageInfomationBox>
              <S.MyPageInfomationHeader>내정보 관리</S.MyPageInfomationHeader>
              <S.MyPageInfomationFigure tree>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.1 16.4602L10 16.5602L9.89 16.4602C5.14 12.1502 2 9.30016 2 6.41016C2 4.41016 3.5 2.91016 5.5 2.91016C7.04 2.91016 8.54 3.91016 9.07 5.27016H10.93C11.46 3.91016 12.96 2.91016 14.5 2.91016C16.5 2.91016 18 4.41016 18 6.41016C18 9.30016 14.86 12.1502 10.1 16.4602ZM14.5 0.910156C12.76 0.910156 11.09 1.72016 10 2.99016C8.91 1.72016 7.24 0.910156 5.5 0.910156C2.42 0.910156 0 3.32016 0 6.41016C0 10.1802 3.4 13.2702 8.55 17.9402L10 19.2602L11.45 17.9402C16.6 13.2702 20 10.1802 20 6.41016C20 3.32016 17.58 0.910156 14.5 0.910156Z"
                    fill="black"
                  />
                </svg>
                &nbsp;&nbsp;찜<button>관리</button>
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure tree>
                <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.3426 45.7868C22.3416 45.7868 20.3326 45.4989 18.3726 44.9299C17.2267 44.5969 16.2599 43.8224 15.6849 42.7768C15.11 41.7311 14.9739 40.4998 15.3066 39.3539C15.4711 38.7861 15.7459 38.2563 16.1153 37.7949C16.4847 37.3334 16.9415 36.9492 17.4594 36.6644C17.9774 36.3796 18.5464 36.1996 19.1339 36.1348C19.7215 36.07 20.316 36.1217 20.8836 36.2868C22.0266 36.6188 23.1906 36.7868 24.3426 36.7868C31.1826 36.7868 36.7486 31.2219 36.7486 24.3809C36.7486 17.5399 31.1826 11.9749 24.3426 11.9749C17.5026 11.9749 11.9346 17.5399 11.9346 24.3809C11.9346 25.7659 12.1786 27.1539 12.6576 28.5099C13.028 29.6279 12.9453 30.8466 12.4273 31.9044C11.9092 32.9621 10.9971 33.7746 9.88675 34.1675C8.77637 34.5603 7.55624 34.5021 6.48828 34.0054C5.42032 33.5087 4.58966 32.6131 4.17461 31.5109C3.35841 29.2221 2.93905 26.8108 2.93461 24.3809C2.93461 12.5769 12.5376 2.97485 24.3416 2.97485C36.1456 2.97485 45.7486 12.5769 45.7486 24.3809C45.7486 36.1849 36.1446 45.7868 24.3426 45.7868Z"
                    stroke="black"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp;&nbsp; 집중 케어
                <button>관리</button>
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure tree>
                <svg width="14" height="14" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.71469 20H16.7147V22H4.71469V20ZM4.71469 14H16.7147V16H4.71469V14Z" fill="black" />
                  <path
                    d="M20.4147 7.3L13.4147 0.3C13.2147 0.0999999 13.0147 0 12.7147 0H2.71469C1.61469 0 0.714691 0.9 0.714691 2V26C0.714691 27.1 1.61469 28 2.71469 28H18.7147C19.8147 28 20.7147 27.1 20.7147 26V8C20.7147 7.7 20.6147 7.5 20.4147 7.3ZM12.7147 2.4L18.3147 8H12.7147V2.4ZM18.7147 26H2.71469V2H10.7147V8C10.7147 9.1 11.6147 10 12.7147 10H18.7147V26Z"
                    fill="black"
                  />
                </svg>
                &nbsp;&nbsp; 후기 관리
                <button>관리</button>
              </S.MyPageInfomationFigure>
            </S.MyPageInfomationBox>
            <S.MyPageInfomationBox>
              <S.MyPageInfomationHeader>커뮤니티</S.MyPageInfomationHeader>
              <S.MyPageInfomationFigure tree>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.36 10.0305V18.3808C18.36 18.7835 18.2001 19.1696 17.9153 19.4544C17.6306 19.7391 17.2445 19.899 16.8418 19.899H1.65936C1.25669 19.899 0.870522 19.7391 0.585796 19.4544C0.301071 19.1696 0.141113 18.7835 0.141113 18.3808V3.19837C0.141113 2.79571 0.301071 2.40954 0.585796 2.12481C0.870522 1.84009 1.25669 1.68013 1.65936 1.68013H10.0097C10.211 1.68013 10.4041 1.76011 10.5465 1.90247C10.6888 2.04483 10.7688 2.23792 10.7688 2.43925C10.7688 2.64058 10.6888 2.83367 10.5465 2.97603C10.4041 3.11839 10.211 3.19837 10.0097 3.19837H1.65936V18.3808H16.8418V10.0305C16.8418 9.82914 16.9218 9.63605 17.0641 9.49369C17.2065 9.35132 17.3996 9.27135 17.6009 9.27135C17.8022 9.27135 17.9953 9.35132 18.1377 9.49369C18.2801 9.63605 18.36 9.82914 18.36 10.0305ZM18.8971 5.25369L9.78765 14.3632C9.7171 14.4336 9.63336 14.4895 9.5412 14.5276C9.44905 14.5657 9.35029 14.5853 9.25057 14.5852H6.21409C6.01275 14.5852 5.81967 14.5052 5.67731 14.3629C5.53494 14.2205 5.45496 14.0274 5.45496 13.8261V10.7896C5.45489 10.6899 5.47446 10.5911 5.51255 10.499C5.55065 10.4068 5.60654 10.3231 5.67701 10.2525L14.7865 1.14305C14.857 1.07247 14.9407 1.01648 15.0328 0.978276C15.125 0.940073 15.2238 0.92041 15.3235 0.92041C15.4233 0.92041 15.5221 0.940073 15.6142 0.978276C15.7064 1.01648 15.7901 1.07247 15.8606 1.14305L18.8971 4.17954C18.9677 4.25004 19.0237 4.33376 19.0619 4.42592C19.1001 4.51807 19.1198 4.61686 19.1198 4.71662C19.1198 4.81638 19.1001 4.91516 19.0619 5.00731C19.0237 5.09947 18.9677 5.18319 18.8971 5.25369ZM17.284 4.71662L15.3235 2.75334L14.1194 3.95749L16.0827 5.92077L17.284 4.71662Z"
                    fill="black"
                  />
                </svg>
                &nbsp; 내가 작성한 글 목록<button>확인</button>
              </S.MyPageInfomationFigure>
              <S.MyPageInfomationFigure tree>
                <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.98804 17.4546H17.988M1.98804 17.4546V13.4546L9.98804 5.45459L12.857 2.58559L12.858 2.58459C13.253 2.18959 13.451 1.99159 13.679 1.91759C13.8799 1.85234 14.0962 1.85234 14.297 1.91759C14.525 1.99159 14.722 2.18959 15.117 2.58359L16.857 4.32359C17.253 4.71959 17.451 4.91759 17.525 5.14559C17.5903 5.34642 17.5903 5.56276 17.525 5.76359C17.451 5.99159 17.253 6.18959 16.857 6.58559L13.988 9.45559L9.98804 5.45559M1.98804 17.4546H5.98804L13.988 9.45459"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="10.0232"
                    y="5.9209"
                    width="4.56401"
                    height="12.4046"
                    transform="rotate(45.0282 10.0232 5.9209)"
                    fill="black"
                  />
                </svg>
                &nbsp; 내가 작성한 댓글 목록
                <button>확인</button>
              </S.MyPageInfomationFigure>
            </S.MyPageInfomationBox>
          </S.MyPageInfomationContainer>
        )}
      </S.MyPageContainer>
    </S.MyPageLayout>
  );
};

const executeAPI = async () => {
  try {
    return await users.hs_providers.me.get(connection);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await executeAPI();
  if (!res) return { notFound: true };

  return {
    props: {
      data: res
    }
  };
};

export default RealEstateAgent;
