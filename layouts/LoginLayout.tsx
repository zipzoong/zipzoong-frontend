import React from 'react'
import * as S from './LoginLayout.style'

const LoginLayout = () => {
	return (
		<S.LoginLayout>
			<S.LoginBackgroundLayout>
				<S.LoginBackgroundTitleText>집중과 어떤 경험을 함께 하고 싶으신가요?</S.LoginBackgroundTitleText>
				<S.LoginTypeBoxContainer>
					{['개인회원 회원가입', '공인중개사 가입', '전문가 가입'].map((title: string) => (
						<S.LoginTypeBox key={title}>
							<S.LoginTypeImage src="" alt="" />
							<S.LoginTypeText>text text text text text </S.LoginTypeText>
							<S.LoginTypeButton>{title}</S.LoginTypeButton>
						</S.LoginTypeBox>
					))}
				</S.LoginTypeBoxContainer>
			</S.LoginBackgroundLayout>
		</S.LoginLayout>
	)
}

export default LoginLayout
