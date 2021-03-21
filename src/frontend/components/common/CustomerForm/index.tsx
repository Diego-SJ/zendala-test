import React, { FormEvent, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { createCustomerAction } from '../../../redux/features/customerSlice';
import { RootState } from '../../../redux/store';
import { ICustomer } from '../../../typings/types';
import { Button } from '../Button/Button.styled';
import Input from '../Input';
import { Form, FormRow, FormSection } from './CustomerForm.styled';
import Select from '../Select';
import { countryList } from '../../../constants/global';

const CustomerForm: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const { loading, error } = useSelector(({ customer }: RootState) => customer);
	const { enqueueSnackbar } = useSnackbar();
	const [cName, setCName] = useState('');
	const [cLastName, setCLastName] = useState('');
	const [cEmail, setCEmail] = useState('');
	const [cPhone, setCPhone] = useState('');
	const [street, setStreet] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');

	useEffect(() => {
		if (error) {
			enqueueSnackbar(error, {
				variant: 'error',
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center'
				}
			});
		}
	}, [error, enqueueSnackbar]);

	const resetForm = () => {
		setCName('');
		setCLastName('');
		setCEmail('');
		setCPhone('');
		setStreet('');
		setZipCode('');
		setState('');
		setCity('');
		setCountry('');
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const customer: ICustomer = {
			name: cName,
			last_name: cLastName,
			email: cEmail,
			phone_number: cPhone,
			address: {
				line1: street,
				city,
				country_code: country,
				postal_code: zipCode,
				state
			}
		};

		dispatch(createCustomerAction(customer, resetForm));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<FormSection>Información básica</FormSection>
			<FormRow>
				<Input
					value={cName}
					onChange={({ target }) => setCName(target.value)}
					placeholder="Nombre"
					disabled={loading}
					required
				/>
				<Input
					value={cLastName}
					onChange={({ target }) => setCLastName(target.value)}
					placeholder="Apellidos"
					disabled={loading}
				/>
				<Input
					value={cEmail}
					onChange={({ target }) => setCEmail(target.value)}
					placeholder="Correo"
					disabled={loading}
					pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
					title="Correo invalido"
					required
				/>
				<Input
					type="tel"
					value={cPhone}
					onChange={({ target }) => setCPhone(target.value)}
					placeholder="Teléfono"
					disabled={loading}
				/>
			</FormRow>
			<FormSection>Dirección</FormSection>
			<FormRow>
				<Input
					value={street}
					onChange={({ target }) => setStreet(target.value)}
					placeholder="Calle y número"
					disabled={loading}
					minLength={1}
					required
				/>
				<Input
					type="text"
					value={zipCode}
					onChange={({ target }) => setZipCode(target.value.toUpperCase())}
					placeholder="Código postal"
					disabled={loading}
					minLength={1}
					maxLength={12}
					required
				/>
				<Input
					value={state}
					onChange={({ target }) => setState(target.value)}
					placeholder="Estado"
					disabled={loading}
					minLength={1}
					required
				/>
				<Input
					value={city}
					onChange={({ target }) => setCity(target.value)}
					placeholder="Ciudad"
					disabled={loading}
					required
				/>
				<Select
					value={country}
					onChange={({ target }: any) => setCountry(target?.value)}
					placeholder="Código de país"
					disabled={loading}
					options={countryList.map((country) => ({
						value: country.code,
						name: `${country.code} - ${country.name}`
					}))}
					required
				/>
			</FormRow>
			<Button block disabled={loading}>
				{loading ? 'Guardando registro...' : 'Registrar'}
			</Button>
		</Form>
	);
};

export default CustomerForm;
