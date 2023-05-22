import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import Image from 'next/image'
import styled from 'styled-components'

export const MyPageLayout = styled.div`
	margin-top: 40px;
	width: 100vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const MyPageContainer = styled.div`
	width: 74vw;
	height: 100vh;
	display: flex;
	gap: 24px;
`

export const MyPageProfileContainer = styled.div`
	width: 30%;
	height: 90%;
	border: 1px solid #d9d9d9;
	display: flex;
	flex-direction: column;
	gap: 20px;
	box-shadow: 2px 0px 1px rgba(0, 0, 0, 0.1);
`

export const MyPageProfileTitleContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 16px 18px 16px 18px;
`

export const MyPageProfileTitleContainerTitle = styled.div`
	font-size: 20px;
	font-family: ${textStyle.fontFamily.P7};
`

export const MyPageProfileTitleContainerBadge = styled.div`
	width: 66px;
	height: 30px;
	background: ${color.primary};
	border: 1px solid #3772f7;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	font-size: 12px;
	color: white;
	font-family: ${textStyle.fontFamily.P6};
`

export const MyPageProfileImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const MyPageProfileImage = styled(Image)`
	width: 12vw;
	height: 12vw;
	border-radius: 999px;
	background-color: ${color.line};
	margin-bottom: 20px;
`

export const MyPageProfileImageText = styled.span`
	font-size: 16px;
	font-family: ${textStyle.fontFamily.P5};
	color: ${color.gray};
	b {
		color: black;
		font-size: 22px;
		font-family: ${textStyle.fontFamily.P7};
	}
`
