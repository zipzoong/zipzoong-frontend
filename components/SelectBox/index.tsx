import estateOption from '@/data/estateOption'
import SelectOptionType, { SelectBoxType } from '@/types/selectOption.type'
import React from 'react'
import * as S from './style'

const SelectBox = ({ option }: SelectBoxType) => {
	return (
		<S.SelectBoxContainer>
			<S.SelectBoxTitle>{option.title}</S.SelectBoxTitle>
			{option.value.map((query, index) => (
				<S.SelectBoxFlexBox key={index}>
					<S.SelectBoxSubTitle key={index}>{query.subtitle}</S.SelectBoxSubTitle>
					{query.option.map((option, index) => (
						<S.SelectBoxOption key={index}>{option}</S.SelectBoxOption>
					))}
				</S.SelectBoxFlexBox>
			))}
		</S.SelectBoxContainer>
	)
}

export default SelectBox
