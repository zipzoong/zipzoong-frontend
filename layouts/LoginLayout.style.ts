import color from '@/styles/color.theme'
import textStyle from '@/styles/text.theme'
import Image from 'next/image'
import styled from 'styled-components'

export const LoginLayout = styled.div`
	width: 100vw;
	height: 100vh;
`

export const LoginBackgroundLayout = styled.div`
	width: 100vw;
	height: 62vh;
	display: flex;
	justify-content: center;
	background-color: ${color.subcolor};
`

export const LoginContainer = styled.div`
	width: 32vw;
	height: 78vh;
	box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
	background-color: white;
	margin-top: 6vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 12px;
`

export const LoginContainerTitle = styled.span`
	font-size: 26px;
	font-family: ${textStyle.fontFamily.P9};
	color: ${color.primary};
`

export const LoginInputContainer = styled.div`
	width: 82%;
	padding: 14px 0 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
`

export const LoginInputContainerBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 6px;
`

export const LoginInputContainerInput = styled.input`
	width: 100%;
	height: 42px;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
	padding-left: 16px;
	outline: none;
	font-size: 16px;
`

export const LoginInputContainerLabel = styled.label`
	font-size: 16px;
	color: ${color.tertiary};
	margin-right: auto;
`

export const LoginInputContainerLoginButton = styled.div`
	width: 100%;
	height: 52px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${color.primary};
	color: ${color.white};
	border-radius: 6px;
	font-family: ${textStyle.fontFamily.P6};
`

export const OtherLoginContainer = styled.div`
	width: 82%;
	padding-top: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
`

export const OtherLoginTitle = styled.div`
	font-size: 14px;
	color: gray;
	border-bottom: 1.5px solid #f2f3f7;
	padding-bottom: 4px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const KakaoLoginButton = styled.div`
	width: 100%;
	height: 44px;
	border-radius: 6px;
	background-color: #f7e600;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 6px;
`

export const KakaoLoginLogo = styled(Image)`
	width: 18px;
	height: auto;
`

export const KakaoTitle = styled.span`
	font-size: 14px;
	color: #3a1d1d;
	font-family: ${textStyle.fontFamily.P5};
`

export const NaverLoginButton = styled.div`
	width: 100%;
	height: 42px;
	border-radius: 6px;
	background-color: #03c75a;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 6px;
`

export const NaverLoginLogo = styled(Image)`
	width: 30px;
	height: auto;
`

export const NaverTitle = styled.span`
	font-size: 14px;
	color: ${color.white};
	font-family: ${textStyle.fontFamily.P5};
`
