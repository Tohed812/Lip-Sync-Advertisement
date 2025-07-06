import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import MainContent from "./components/MainContent";
import RightPanel from "./components/RightPanel";
import Sidebar from "./components/Sidebar";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#6C5CE7",
		},
		secondary: {
			main: "#A8A4FF",
		},
		background: {
			default: "#F8F9FA",
			paper: "#FFFFFF",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ display: "flex", height: "100vh" }}>
				<Sidebar />
				<MainContent />
				<RightPanel />
			</Box>
		</ThemeProvider>
	);
}

export default App;
