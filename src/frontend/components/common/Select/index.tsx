import React from 'react';
import { SelectProps } from '../../../typings/types';
import { SelectWrapper } from './Select.styled';

interface IOption {
	name: string;
	value: any;
}

interface IProps extends SelectProps {
	options: IOption[];
}

const Select: React.FC<IProps> = (props) => {
	const { options } = props;
	return (
		<SelectWrapper {...(props as any)}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</SelectWrapper>
	);
};

export default Select;
