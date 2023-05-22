import React from 'react'
import * as S from './LoginLayout.style'
import Kakao from 'assets/kakao.svg'
import Naver from 'assets/naver.svg'
import { auth } from '@zipzoong/sdk/lib/functional'
import connection from '@/lib/connection'

const LoginLayout = () => {
	const [info, setInfo] = React.useState({
		id: '',
		password: '',
	})

	const onClickLogin = async () => {
		auth.sign_in.execute(connection, {
			user_type: 'customer',
			code: 'string',
			oauth_type: 'kakao',
		})
	}

	return (
		<S.LoginLayout>
			<S.LoginBackgroundLayout>
				<S.LoginContainer>
					<S.LoginContainerTitle>ZIPZOONG</S.LoginContainerTitle>
					<S.LoginInputContainer>
						<S.LoginInputContainerBox>
							<S.LoginInputContainerLabel>아이디</S.LoginInputContainerLabel>
							<S.LoginInputContainerInput onChange={(e) => setInfo({ ...info, id: e.target.value })} value={info.id} />
						</S.LoginInputContainerBox>
						<S.LoginInputContainerBox>
							<S.LoginInputContainerLabel>비밀번호</S.LoginInputContainerLabel>
							<S.LoginInputContainerInput onChange={(e) => setInfo({ ...info, password: e.target.value })} value={info.password} type="password" />
						</S.LoginInputContainerBox>
						<S.LoginInputContainerLoginButton onClick={onClickLogin}>로그인하기</S.LoginInputContainerLoginButton>
					</S.LoginInputContainer>
					<S.OtherLoginContainer>
						<S.OtherLoginTitle>다른 서비스로 로그인</S.OtherLoginTitle>
						<S.KakaoLoginButton>
							<S.KakaoLoginLogo src={Kakao} alt="" />
							<S.KakaoTitle>카카오로 로그인하기</S.KakaoTitle>
						</S.KakaoLoginButton>
						<S.NaverLoginButton>
							<S.NaverLoginLogo src={Naver} alt="" />
							<S.NaverTitle>네이버로 로그인하기</S.NaverTitle>
						</S.NaverLoginButton>
					</S.OtherLoginContainer>
				</S.LoginContainer>
			</S.LoginBackgroundLayout>
		</S.LoginLayout>
	)
}

export default LoginLayout
