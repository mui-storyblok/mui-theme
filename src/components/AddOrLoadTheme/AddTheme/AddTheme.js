import React from 'react';
import { Form, MuiInput, MuiSubmit } from 'rff-wrapper';
import {
	DialogContentText,
	DialogActions,
} from '@material-ui/core';

export const AddTheme = ({ onSubmit }) => {
	return (
		<>
			<DialogContentText>
				Add your theme
			</DialogContentText>

			<Form onSubmit={onSubmit}>
				<MuiInput
					name="name"
					placeholder="Name"
					required
					fullWidth
				/>
				<DialogActions>
					<MuiSubmit buttonText="Add Theme" />
				</DialogActions>
			</Form>
		</>
	);
};
