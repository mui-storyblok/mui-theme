import React, { useState } from 'react';
import {
	Dialog,
	DialogTitle,
	DialogContent,
} from '@material-ui/core';
import { Palette } from '@material-ui/icons';
import DialogIconButton from '../sharedComponents/DialogIconButton/DialogIconButton';
import { AddTheme } from './AddTheme/AddTheme'
import { ListThemes } from './ListThemes/ListThemes'
import themeService from '../../Utils/themes';

const AddOrLoadTheme = () => {
	const [state, setState] = useState({
		open: false,
		themes: []
	});

	const handleOpen = () => {
		getThemes();
	};

	const handleClose = () => {
		setState({
			...state,
			open: false
		});
	};

	const onSubmit = async (values) => {
		try {
			const theme = await themeService.addTheme(values.name, JSON.stringify(theme));
			setState({
				...state,
				themes: [theme, ...state.themes]
			});
		} catch (err) {
			console.error(err);
		}
	};

	const getThemes = async () => {
		try {
			const themes = await themeService.loadThemes();

			setState({
				open: true,
				themes: themes.reverse()
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<DialogIconButton title="Load or add Theme" handleOpen={handleOpen} icon={<Palette />} />
			<Dialog open={state.open} fullWidth={true} maxWidth="sm">
				<DialogTitle>Add and Load Themes</DialogTitle>
				<DialogContent>
					<AddTheme onSubmit={onSubmit} />
					<ListThemes handleClose={handleClose} themes={state.themes} />
				</DialogContent>
			</Dialog>
		</>
	);
};

export default AddOrLoadTheme;
