import * as S from '@/layouts/DetailLayout.style'
import dropdown from 'assets/detaildropdown.svg'
import dropup from 'assets/detaildropup.svg'

const DetailItem = () => {
	return (
		<S.DetailInfoContainer>
			<S.DetailItemContainer>
				{[1, 2, 3, 4, 5].map((p_key) => (
					<S.DetailItemFlexBox key={p_key}>
						{[1, 2, 3].map((key) => (
							<S.DetailItemBox key={key}>
								<S.DetailItemImage src="" alt="" />
								<S.DetailItemName>00시 00동 0000아파트 00평대</S.DetailItemName>
								<S.DetailItemDescription>찜 00 · 조회 00</S.DetailItemDescription>
							</S.DetailItemBox>
						))}
					</S.DetailItemFlexBox>
				))}
			</S.DetailItemContainer>
		</S.DetailInfoContainer>
	)
}

export default DetailItem
