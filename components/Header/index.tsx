import React from 'react'
import * as S from './style'
import logo from 'assets/logo.svg'
import color from '@/styles/color.theme'
import search from 'assets/search.svg'
import searchprimary from 'assets/searchprimary.svg'
import { useRouter } from 'next/router'

const Header = () => {
	const router = useRouter()

	return (
		<S.HeaderLayout>
			<S.HeaderContainer>
				<S.HeaderLogo src={logo} alt="" onClick={() => router.push('/')} />
				<S.Navigation color={color.tertiary} href="/search/estate">
					중개사매칭
				</S.Navigation>
				<S.Navigation color={color.tertiary} href="/search/life">
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
				<S.Navigation ismediaquery="true" color={color.gray} href="/">
					전문가등록
				</S.Navigation>
				<S.Navigation color={color.gray} href="/login">
					로그인
				</S.Navigation>
				<S.SignupButton>회원가입</S.SignupButton>
			</S.HeaderContainer>
			<S.MediaQuerySearchContainer>
				<S.SearchInput placeholder="검색어를 입력하세요" />
				<S.SearchButton>
					<S.SearchLogo src={searchprimary} alt="" />
				</S.SearchButton>
			</S.MediaQuerySearchContainer>
		</S.HeaderLayout>
	)
}

export default Header
