import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import styled from 'styled-components'

export const EstateContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: fit-content;
`

export const SelectBoxFlexBox = styled.div`
	display: flex;
	flex-direction: column;
`

export const SelectBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 18vw;
`

export const SelectBoxTitle = styled.span`
	font-size: ${textStyle.H2_22_B.fontSize};
	font-weight: ${textStyle.H2_22_B.fontWeight};
	font-family: ${textStyle.H2_22_B.fontFamily};
	color: #49454f;
	margin: 16px;
`

export const SelectBoxSubTitle = styled.span`
	font-size: ${textStyle.Body1_16_B.fontSize};
	font-weight: ${textStyle.Body1_16_B.fontWeight};
	font-family: ${textStyle.Body1_16_B.fontFamily};
	color: ${color.tertiary};
	margin: 16px;
`

export const SelectBoxOption = styled.span`
	text-decoration: none;
	color: black;
	font-size: ${textStyle.Body1_16_M.fontSize};
	font-weight: ${textStyle.Body1_16_M.fontWeight};
	font-family: ${textStyle.Body1_16_M.fontFamily};
	color: ${color.tertiary};
	margin: 16px;
	margin-left: 26px;
`
