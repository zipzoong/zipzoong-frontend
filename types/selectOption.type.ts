interface SelectSubOption {
	subtitle: string
	option: string[]
}

interface SelectOptionType {
	title: string
	value: SelectSubOption[]
}

export interface SelectBoxType {
	option: SelectOptionType
}

export default SelectOptionType
