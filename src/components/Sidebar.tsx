import {
	Dashboard as DashboardIcon,
	History as HistoryIcon,
	Settings as SettingsIcon,
} from "@mui/icons-material";
import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
	styled,
} from "@mui/material";
import React from "react";

const DRAWER_WIDTH = 240;

const StyledDrawer = styled(Drawer)({
	width: DRAWER_WIDTH,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		width: DRAWER_WIDTH,
		boxSizing: "border-box",
		borderRight: "1px solid rgba(0, 0, 0, 0.12)",
	},
});

const menuItems = [
	{ text: "Dashboard", icon: <DashboardIcon /> },
	{ text: "History", icon: <HistoryIcon /> },
	{ text: "Settings", icon: <SettingsIcon /> },
];

const Sidebar = () => {
	return (
		<StyledDrawer variant="permanent" anchor="left">
			<Box sx={{ p: 2 }}>
				<Typography
					variant="h6"
					component="div"
					sx={{ fontWeight: "bold" }}
				>
					Lip Sync Ad
				</Typography>
			</Box>
			<List>
				{menuItems.map((item) => (
					<ListItem button key={item.text}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</StyledDrawer>
	);
};

export default Sidebar;
