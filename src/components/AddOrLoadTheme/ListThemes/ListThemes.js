import React from 'react';
import { useHistory } from "react-router-dom";
import {
  DialogContentText,
	DialogActions,
	List,
	ListItem,
	ListItemText,
	Button,
} from '@material-ui/core';
import { setThemeToLocalStore } from '../../../Utils/localStorage';

export const ListThemes = ({ themes, handleClose }) => {
	const history = useHistory();

	const applyTheme = (theme) => {
		setThemeToLocalStore(JSON.parse(theme.json_theme));
		history.go(0);
	};

	return (
		<>
			<DialogContentText>
				Load an existing theme by selecting one below
			</DialogContentText>

			<List>
				{themes.map(theme => <Theme key={theme.id} theme={theme} applyTheme={applyTheme}/>)}
			</List>

			<DialogActions>
				<Button onClick={handleClose}>
					Close
				</Button>
			</DialogActions>
		</>
	);
};

const Theme = ({theme, applyTheme}) => {
	return (
		<ListItem button onClick={() => applyTheme(theme)}>
			<ListItemText primary={theme.name} />
		</ListItem>
	)
}