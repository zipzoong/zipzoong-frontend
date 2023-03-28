import React from 'react'
import * as S from './style'
import logo from 'assets/logo.svg'
import color from '@/styles/color.theme'
import search from 'assets/search.svg'

const Header = () => {
	return (
		<S.HeaderLayout>
			<S.HeaderContainer>
				<S.HeaderLogo src={logo} alt="" />
				<S.Navigation color={color.tertiary} href="/">
					중개사매칭
				</S.Navigation>
				<S.Navigation color={color.tertiary} href="/">
					생활서비스
				</S.Navigation>
				<S.Navigation color={color.tertiary} href="/">
					집중케어
				</S.Navigation>
				<S.Navigation color={color.tertiary} href="/">
					커뮤니티
				</S.Navigation>
				<S.SearchContainer>
					<S.SearchInput placeholder="검색어를 입력하세요" />
					<S.SearchButton>
						<S.SearchLogo src={search} alt="" />
					</S.SearchButton>
				</S.SearchContainer>
				<S.Navigation color={color.gray} href="/">
					전문가등록
				</S.Navigation>
				<S.Navigation color={color.gray} href="/">
					로그인
				</S.Navigation>
				<S.SignupButton>회원가입</S.SignupButton>
			</S.HeaderContainer>
		</S.HeaderLayout>
	)
}

export default Header
