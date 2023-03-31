import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import Link from 'next/link'
import styled from 'styled-components'

export const SearchWrap = styled.div`
	width: 80vw;
`

export const SearchContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: fit-content;
`

export const SearchButton = styled.div`
	width: 80vw;
	height: 100px;
	border-radius: 8px;
	background-color: black;
	margin-top: 30px;
`

export const SearchSelectBoxContainer = styled.div`
	display: flex;
`

export const SearchBoxContainer = styled.div`
	margin-left: 16px;
	margin-top: 38px;
	display: flex;
`

export const SearchItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const SearchSearchContainer = styled.div`
	display: flex;
	margin-left: 48px;
	padding: 10px;
	width: 58vw;

	#search--image {
		margin-right: 4px;
	}
`

export const SearchSearchButton = styled.div<{ color: string; backgroundColor?: string }>`
	padding: 6px 12px 6px 12px;
	border: 1px solid ${color.on_tertiary_container};
	border-radius: 15px;
	font-weight: 500;
	font-size: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.backgroundColor};
	margin: 0 4px 0 4px;

	&:first-child {
		margin-left: 0;
	}

	span {
		font-size: ${textStyle.Body3_12_M.fontSize};
		font-weight: ${textStyle.Body3_12_M.fontWeight};
		font-family: ${textStyle.Body3_12_M.fontFamily};
		color: ${(props) => props.color};
	}

	svg {
		margin-left: 6px;
		path {
			fill: ${(props) => props.color};
		}
	}
`

export const SearchSearchClearButton = styled.div`
	font-size: 14px;
	font-weight: 500;
	color: #b3b3b3;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
`

export const SearchItem = styled(Link)`
	display: flex;
	width: 58vw;
	cursor: pointer;
	padding: 34px 0 34px 34px;
	border-bottom: 2px solid #d9d9d9;

	&:first-child {
		padding-bottom: 0;
	}
`

export const SearchItemImage = styled.div`
	width: 30%;
	height: 190px;
	background-color: #d9d9d9;
	border-radius: 10px;
	margin-right: 12px;
`

export const SearchItemDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 14px;
	width: 66%;
`

export const SearchBlueSubTitleWrap = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;

	#tag {
		display: flex;

		&:not(:last-child) {
			margin-right: 16px;
		}
	}

	#circle {
		width: 8px;
		height: 8px;
		border-radius: 999px;
		background-color: #3772f7;
	}

	span {
		font-size: ${textStyle.Body2_14_M.fontSize};
		font-weight: ${textStyle.Body2_14_M.fontWeight};
		font-family: ${textStyle.Body2_14_M.fontFamily};
		margin-left: 3px;
		color: #3772f7;
	}
`

export const SearchReviewBox = styled.div`
	display: flex;
	margin-left: auto;
	font-size: ${textStyle.Body2_14_M.fontSize};
	font-weight: ${textStyle.Body2_14_M.fontWeight};
	font-family: ${textStyle.Body2_14_M.fontFamily};
	color: ${color.gray};
`

export const SearchTitleContainer = styled.div`
	margin-top: 26px;
	display: flex;
	color: ${color.tertiary};
	font-size: ${textStyle.H2_22_B.fontSize};
	font-weight: ${textStyle.H2_22_B.fontWeight};
	font-family: ${textStyle.fontFamily.P7};

	span {
		margin: auto 0 0 10px;
		margin-bottom: 3px;
		font-size: ${textStyle.Body2_14_M.fontSize};
		font-weight: ${textStyle.Body2_14_M.fontWeight};
		font-family: ${textStyle.Body2_14_M.fontFamily};
		color: ${color.gray};
	}
`

export const SearchTitleSubText = styled.span`
	margin-top: 6px;
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-weight: ${textStyle.Body1_16_M.fontWeight};
	font-family: ${textStyle.Body1_16_M.fontFamily};
	color: ${color.tertiary};
`

export const SearchFlexBox = styled.div`
	display: flex;
`

export const SearchHashtagContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 26px;
`

export const SearchHashtag = styled.div`
	margin-right: 8px;
	padding: 8px 18px 8px 18px;
	background-color: ${color.tertiary_container};
	border-radius: 999px;
	font-weight: 500;
	font-size: 14px;
	color: ${color.on_tertiary_container};
`

export const SearchLinkButtonContainer = styled.div`
	margin-left: auto;
`

export const SearchLinkButton = styled.button<{ color: string }>`
	width: 80px;
	height: 80px;
	background-color: ${(props) => props.color};
	border-radius: 10px;
	border: none;
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-weight: ${textStyle.Body1_16_M.fontWeight};
	font-family: ${textStyle.Body1_16_M.fontFamily};
	color: white;

	&:first-child {
		margin-right: 12px;
	}
`

export const SearchPagenationContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 120px 0 120px 0;

	div {
		width: 20px;
		height: 20px;
		font-size: 16px;
		color: #898989;
		margin: 0 4px 0 4px;
	}

	svg {
		margin: 0 6px 0 6px;
	}
`
