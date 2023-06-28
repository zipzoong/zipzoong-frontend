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
  display: flex;
  padding-bottom: 30px;
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
  font-size: 16px;
  font-family: ${textStyle.fontFamily.P6};
`;

export const MyPageProfileTitleContainerBadge = styled.div`
  width: 52px;
  height: 24px;
  background: ${color.secondary};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  font-size: 14px;
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

  section {
    gap: 10px;
    span {
      color: ${color.primary};
      font-family: ${textStyle.fontFamily.P7};
    }
    font-size: 16px;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
  color: black;
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
    color: black;
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
  align-items: center;
`;

export const MyPageInfomationSubmit = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 12px;
  background-color: ${color.primary};
  border: none;
  font-size: 18px;
  font-family: ${textStyle.fontFamily.P6};
`;

export const MyPageConvertTypeButton = styled.div`
  height: 50px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    color: #3772f7;
    font-size: 18px;
    font-family: ${textStyle.fontFamily.P7};
  }
`;

export const MyPageEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 76%;
  gap: 12px;
`;

export const MyPageDefaultInfoContainer = styled.div`
  width: 100%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

export const MyPageDefaultInfoText = styled.span`
  font-size: 16px;
  font-family: ${textStyle.fontFamily.P7};
  color: #898989;
`;

export const MyPageDefaultMain = styled.div`
  display: flex;
  gap: 16px;
`;

export const MyPageDefaultMainImg = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background-color: gray;
`;

export const MyPageDefaultInfomation = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 20px;
    font-family: ${textStyle.fontFamily.P7};
  }

  figure {
    font-size: 16px;
  }
`;

export const MyPageInfoDefaultBox = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
`;

export const MyPageDefaultText = styled.span`
  font-size: 16px;
  font-family: ${textStyle.fontFamily.P7};
  color: gray;
`;

export const MyPageDefaultDiv = styled.div`
  display: flex;

  section {
    margin-left: auto;
    font-size: 16px;
    font-family: ${textStyle.fontFamily.P7};
  }
`;

export const MyPageDefaultProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MyPageDefaultImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 999px;
  background-color: gray;
`;

export const MyPageDefaultTextBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;

  button {
    margin-left: auto;
    width: 66px;
    height: 25px;
    cursor: pointer;
    color: black;
    background-color: transparent;
    border: 1px solid ${color.on_tertiary};
    border-radius: 5px;
  }
`;

export const MyPageDefaultTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: 20px;
    font-family: ${textStyle.fontFamily.P6};
  }

  figure {
    font-family: ${textStyle.fontFamily.P5};
    font-size: 16px;
  }
`;

export const MyPageInputBox = styled.div`
  margin-top: 10px;
  padding-left: 34px;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: auto;
  gap: 8px;
`;

export const MyPageInputText = styled.div`
  font-size: 18px;
  font-family: ${textStyle.fontFamily.P7};
`;

export const MyPageInput = styled.input`
  width: 96%;
  outline: none;
  height: 50px;
  border: 1px solid ${color.on_tertiary};
  border-radius: 6px;
  background-color: white;
  font-size: 16px;
  padding-left: 16px;
  margin-bottom: 10px;
  color: black;

  &:read-only {
    background-color: #f2f3f7;
  }
`;

export const MyPageTextarea = styled.textarea`
  width: 96%;
  height: 300px;
  outline: none;
  resize: none;
  border: 1px solid ${color.on_tertiary};
  border-radius: 6px;
  background-color: white;
  font-size: 16px;
  padding-top: 16px;
  padding-left: 16px;
  margin-bottom: 10px;
  color: black;

  &:read-only {
    background-color: #f2f3f7;
  }
`;

export const MyPageLabelBox = styled.div`
  display: flex;
  width: 96%;
  justify-content: space-between;
`;

export const MyPageFile = styled.input`
  display: none;
`;

export const MyPageLabel = styled.label`
  div {
    width: 15vw;
    height: 20vh;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid ${color.on_tertiary};
    background: ${color.tertiary_container};
  }
`;

export const MyPageButton = styled.button`
  width: 110px;
  height: 28px;
  background-color: white;
  border: 1px solid #ccc;
  color: black;
  border-radius: 4px;
  margin-left: auto;
  margin-right: 4%;
`;
