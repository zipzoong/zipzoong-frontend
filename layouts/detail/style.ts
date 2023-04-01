import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import Image from 'next/image'
import styled, { css } from 'styled-components'

export const DetailLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 120px;
`

export const DetailControlBar = styled.div`
	border-bottom: 1px solid ${color.line};
	width: 100vw;
	height: 50px;
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
	gap: 10px;
`

export const DetailControlOption = styled.div<{ colors?: string }>`
	height: 100%;
	width: 9vw;
	cursor: pointer;
	${({ colors }) =>
		colors === color.primary
			? css`
					border-bottom: 3px solid ${color.primary};
			  `
			: null};
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		color: ${({ colors }) => colors || color.on_tertiary_container};
		font-size: ${textStyle.Body1_16_B.fontSize};
		font-weight: ${textStyle.Body1_16_B.fontWeight};
		font-family: ${textStyle.Body1_16_B.fontFamily};
		${({ colors }) =>
			colors === color.primary
				? css`
						margin-top: 3px;
				  `
				: null};
	}
`

export const DetailContainer = styled.div`
	display: flex;
	width: 74vw;
	gap: 40px;
`

export const DetailProfileContainer = styled.div`
	width: 16vw;
	height: 78vh;
	border: 1px solid ${color.on_tertiary};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
	gap: 10px;
`

export const DetailProfileImage = styled(Image)`
	width: 13vw;
	height: 13vw;
	background-color: ${color.tertiary_container};
	border-radius: 9999px;
`

export const DetailProfileTitle = styled.span`
	font-size: ${textStyle.H3_20_B.fontSize};
	font-weight: ${textStyle.H3_20_B.fontWeight};
	font-family: ${textStyle.H3_20_B.fontFamily};
	color: ${color.tertiary};
`

export const DetailProfileReview = styled.span`
	font-size: ${textStyle.Body2_14_M.fontSize};
	font-weight: ${textStyle.Body2_14_M.fontWeight};
	font-family: ${textStyle.Body2_14_M.fontFamily};
	color: ${color.on_tertiary_container};
`

export const DetailProfileGraphContainer = styled.div`
	margin: 20px 0 20px 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const DetailProfileGraph = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	span {
		font-size: ${textStyle.Body3_12_M.fontSize};
		font-weight: ${textStyle.Body3_12_M.fontWeight};
		font-family: ${textStyle.Body3_12_M.fontFamily};
		color: ${color.gray};
		width: 4vw;
	}

	h1 {
		font-size: ${textStyle.Body3_12_B.fontSize};
		font-weight: ${textStyle.Body3_12_B.fontWeight};
		font-family: ${textStyle.Body3_12_B.fontFamily};
		color: ${color.primary};
	}
`

export const DetailProfileGraphBar = styled.div`
	display: flex;
	background-color: ${color.tertiary_container};
	width: 6vw;
	height: 8px;
	margin-left: 8px;
`

export const DetailProfileGraphCharge = styled.div<{ review: number }>`
	width: ${({ review }) => `${review * 20}%`};
	height: 8px;
	background-color: ${color.primary};
`

export const DetailProfileButton = styled.div<{ color: string }>`
	width: 14vw;
	height: 6vh;
	background-color: ${(props) => props.color};
	color: ${(props) => (props.color === color.primary ? color.white : color.on_tertiary_container)};
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${textStyle.Body1_16_B.fontSize};
	font-weight: ${textStyle.Body1_16_B.fontWeight};
	font-family: ${textStyle.Body1_16_B.fontFamily};
`

export const DetailInfoContainer = styled.div`
	width: 54vw;
	gap: 14px;
	margin-left: auto;
	display: flex;
	flex-direction: column;
`

export const DetailInfoHashtagContainer = styled.div`
	display: flex;
	gap: 8px;
`

export const DetailInfoHashtag = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70px;
	height: 28px;
	background-color: ${color.tertiary_container};
	color: ${color.gray};
	font-size: ${textStyle.Body3_12_M.fontSize};
	font-weight: ${textStyle.Body3_12_M.fontWeight};
	font-family: ${textStyle.Body3_12_M.fontFamily};
	border-radius: 999px;
`

export const DetailInfoTitle = styled.span`
	margin-top: 16px;
	font-size: ${textStyle.H1_26_EB.fontSize};
	font-weight: ${textStyle.H1_26_EB.fontWeight};
	font-family: ${textStyle.H1_26_EB.fontFamily};
	color: ${color.tertiary};
`

export const DetailInfoDescription = styled.span`
	color: gray;
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-weight: ${textStyle.Body1_16_M.fontWeight};
	font-family: ${textStyle.Body1_16_M.fontFamily};
`

export const DetailInfoBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 20px;
`

export const DetailInfoBox = styled.div`
	font-family: ${textStyle.fontFamily.P5};
	span {
		font-family: ${textStyle.fontFamily.P6};
		font-size: 14px;
		color: ${color.tertiary};
		margin-right: 14px;
	}
	color: ${color.gray};
	font-size: 14px;
`

export const DetailIconContainer = styled.div`
	display: flex;
	gap: 8px;
	margin-bottom: 60px;
`

export const DetailIcon = styled.div`
	width: 48px;
	height: 48px;
	background-color: ${color.line};
	border-radius: 5px;
`

export const DetailInfoButton = styled.div`
	width: 100%;
	height: 40px;
	background-color: ${color.tertiary_container};
	border-radius: 5px;
	display: flex;
	padding: 0 20px 0 12px;
	align-items: center;

	span {
		font-size: ${textStyle.Body3_12_B.fontSize};
		font-family: ${textStyle.Body3_12_B.fontFamily};
		color: ${color.gray};
	}
`

export const DetailInfoButtonDropdown = styled(Image)`
	margin-left: auto;
`

export const DetailInfomationContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 12px;
	gap: 8px;
	margin-bottom: 60px;
`

export const DetailInfomation = styled.div`
	display: flex;
	font-size: 12px;
	font-family: ${textStyle.fontFamily.P5};
	color: ${color.gray};
	div {
		font-size: 12px;
		font-family: ${textStyle.fontFamily.P5};
		width: 76px;
	}
`

export const DetailItemContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	height: fit-content;
`

export const DetailItemTitle = styled.span`
	display: flex;
	height: fit-content;
	width: 100%;
	align-items: center;
	span {
		font-size: ${textStyle.H4_18_B.fontSize};
		font-family: ${textStyle.H4_18_B.fontFamily};
		color: ${color.tertiary};
	}
	#full {
		margin-left: auto;
		font-size: ${textStyle.Caption_12_R.fontSize};
		font-family: ${textStyle.Caption_12_R.fontFamily};
		color: ${color.gray};
		margin-right: 10px;
	}

	#item {
		font-size: ${textStyle.Caption_12_R.fontSize};
		font-family: ${textStyle.Caption_12_R.fontFamily};
		color: ${color.gray};
		margin: 0 10px 0 10px;
		&:last-child {
			margin-right: 0;
		}
	}
`

export const DetailItemFlexBox = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin: 20px 0 20px 0;

	&:first-child {
		margin-top: 0;
	}
`

export const DetailItemBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`

export const DetailItemImage = styled(Image)`
	width: 17vw;
	height: 22vh;
	background-color: ${color.line};
	border-radius: 10px;
	border: none;
`

export const DetailItemName = styled.span`
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-family: ${textStyle.Body1_16_M.fontFamily};
	color: ${color.tertiary};
`

export const DetailItemDescription = styled.span`
	font-size: ${textStyle.Body2_14_M.fontSize};
	font-family: ${textStyle.Body2_14_M.fontFamily};
	color: ${color.gray};
`

export const DetailReviewContainer = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 20px;
`

export const DetailReviewFlexBox = styled.div`
	display: flex;
	justify-content: space-between;
`

export const DetailReview = styled.div`
	width: 26vw;
	height: 18vh;
	border: 1px solid ${color.on_tertiary};
	border-radius: 10px;
	display: flex;
	padding: 22px 18px 26px 18px;
`

export const DetailReviewInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;

	span {
		font-size: ${textStyle.Body1_16_B.fontSize};
		font-family: ${textStyle.Body1_16_B.fontFamily};
		color: ${color.tertiary};
	}

	p {
		font-size: ${textStyle.Body2_14_M.fontSize};
		font-family: ${textStyle.Body2_14_M.fontFamily};
		color: ${color.gray};
	}
`

export const DetailReviewImage = styled(Image)`
	width: 6vw;
	height: 6vw;
	background-color: #e5e5e5;
	border-radius: 10px;
	margin-left: auto;
`

export const DetailReviewIntroduceBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${color.tertiary_container};
	border-radius: 10px;
	color: ${color.gray};
	font-size: ${textStyle.Body1_16_M.fontSize};
	height: 64px;
	font-family: ${textStyle.Body1_16_M.fontFamily};
`

export const DetailFullReviewBox = styled.div`
	width: 100%;
	min-height: 28vh;
	padding: 30px 26px 30px 26px;
	display: flex;
	flex-direction: column;
	border: 1px solid ${color.on_tertiary};
	border-radius: 10px;
	gap: 20px;
`

export const DetailFullReviewProfileBox = styled.div`
	display: flex;
	align-items: center;
`

export const DetailFullReviewProfileImage = styled(Image)`
	width: 4vw;
	height: 4vw;
	border-radius: 999px;
	background-color: ${color.tertiary_container};
`

export const DetailFullReviewProfileName = styled.div`
	height: 4vw;
	margin-left: 20px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 16px;

	h1 {
		color: ${color.tertiary};
		font-size: ${textStyle.Body1_16_B.fontSize};
		font-family: ${textStyle.Body1_16_B.fontFamily};
	}

	span {
		color: ${color.on_tertiary_container};
		font-size: ${textStyle.Body2_14_M.fontSize};
		font-family: ${textStyle.Body2_14_M.fontFamily};
	}
`

export const DetailFullReviewDescription = styled.div`
	display: flex;
	color: ${color.gray};
	font-size: ${textStyle.Body2_14_M.fontSize};
	font-family: ${textStyle.Body2_14_M.fontFamily};
	line-height: 20px;
`

export const DetailFullReviewTimestamp = styled.div`
	font-size: ${textStyle.Caption_12_R.fontSize};
	font-family: ${textStyle.Caption_12_R.fontFamily};
	color: ${color.gray};
`
