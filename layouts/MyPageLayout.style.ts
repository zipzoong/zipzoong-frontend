import color from '@/styles/color.theme';
import textStyle from '@/styles/text.theme';
import Image from 'next/image';
import styled, { css } from 'styled-components';

export const MyPageLayout = styled.div`
  margin-top: 40px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyPageContainer = styled.div`
  width: 74vw;
  height: 100vh;
  display: flex;
  gap: 24px;
`;

export const MyPageProfileContainer = styled.div`
  width: 24%;
  height: 90%;
  border: 1px solid #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 2px 0px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const MyPageProfileTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  padding: 16px 18px 16px 18px;
`;

export const MyPageProfileTitleContainerTitle = styled.div`
  font-size: 20px;
  font-family: ${textStyle.fontFamily.P6};
`;

export const MyPageProfileTitleContainerBadge = styled.div`
  width: 66px;
  height: 30px;
  background: ${color.secondary};
  border: 1px solid #3772f7;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  font-size: 12px;
  color: white;
  font-family: ${textStyle.fontFamily.P6};
`;

export const MyPageProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MyPageProfileImage = styled(Image)`
  width: 10vw;
  height: 10vw;
  border-radius: 999px;
  background-color: ${color.line};
  margin-bottom: 20px;
`;

export const MyPageProfileImageText = styled.span`
  font-size: 16px;
  font-family: ${textStyle.fontFamily.P5};
  color: ${color.gray};
  b {
    color: black;
    font-size: 22px;
    font-family: ${textStyle.fontFamily.P7};
  }
`;

export const MyPageProfileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 70%;
  padding: 14px 0 24px 0;
  border-bottom: 1px solid #ccc;
`;

export const MyPageProfileListItem = styled.li`
  list-style: none;
  font-size: 16px;
  font-family: ${textStyle.fontFamily.P7};
  color: black;
  margin-right: auto;
`;

export const MyPageInfomationBox = styled.aside`
  width: 100%;

  border: 1px solid ${color.on_tertiary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MyPageInfomationHeader = styled.header`
  width: 100%;
  height: 40px;
  font-size: 18px;
  color: white;
  font-family: ${textStyle.fontFamily.P7};
  padding-left: 34px;
  background-color: ${color.primary};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
`;

export const MyPageInfomationFigure = styled.figure<{ tree?: boolean; last?: boolean }>`
  ${({ last }) =>
    !last &&
    css`
      border-bottom: 1px solid ${color.tertiary_container};
    `}
  width: 96%;
  height: 38px;
  padding-left: ${({ tree }) => (tree ? '18px' : '52px')};
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: ${textStyle.fontFamily.P5};

  button {
    margin-left: auto;
    width: 66px;
    height: 25px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid ${color.on_tertiary};
    border-radius: 5px;
  }
`;

export const MyPageInfomationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 76%;
  gap: 4vh;
`;
