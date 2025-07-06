import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	styled,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";

const PANEL_WIDTH = 350;

const StyledPaper = styled(Paper)(({ theme }) => ({
	width: PANEL_WIDTH,
	height: "100vh",
	position: "fixed",
	right: 0,
	top: 0,
	borderLeft: `1px solid ${theme.palette.divider}`,
	overflow: "auto",
	padding: theme.spacing(3),
}));

const RightPanel = () => {
	const [selectedModel, setSelectedModel] = useState("");
	const [scriptText, setScriptText] = useState("");
	const [videoPrompt, setVideoPrompt] = useState("");

	const lipSyncModels = [
		"LatentSync",
		"MuseTalk",
		"Wav2Lip",
		"SyncNet",
		"LipGAN",
	];

	const modelDescriptions: { [key: string]: string } = {
		LatentSync: "Advanced lip-sync model with natural mouth movements",
		MuseTalk: "Music-oriented lip-sync with enhanced audio synchronization",
		Wav2Lip: "Robust lip-sync model for various languages and accents",
		SyncNet:
			"Self-supervised model for accurate lip-sync detection and generation",
		LipGAN: "GAN-based model for realistic lip movement synthesis",
	};

	return (
		<StyledPaper elevation={0}>
			<Typography variant="h6" gutterBottom>
				Lip Sync Options
			</Typography>

			{/* Model Selection */}
			<Box sx={{ mb: 4 }}>
				<FormControl fullWidth>
					<InputLabel>Select Lip Sync Model</InputLabel>
					<Select
						value={selectedModel}
						label="Select Lip Sync Model"
						onChange={(e) => setSelectedModel(e.target.value)}
					>
						{lipSyncModels.map((model) => (
							<MenuItem key={model} value={model}>
								{model}
							</MenuItem>
						))}
					</Select>
					{selectedModel && (
						<Typography
							variant="caption"
							color="text.secondary"
							sx={{ mt: 1, display: "block" }}
						>
							{modelDescriptions[selectedModel]}
						</Typography>
					)}
				</FormControl>
			</Box>

			{/* Text Script */}
			<Box sx={{ mb: 4 }}>
				<Typography variant="subtitle1" gutterBottom>
					Text Script
				</Typography>
				<TextField
					fullWidth
					multiline
					rows={4}
					placeholder="Enter the text that will be transformed into dubbing speech"
					value={scriptText}
					onChange={(e) => setScriptText(e.target.value)}
				/>
				<Box
					sx={{
						mt: 2,
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography variant="caption" color="text.secondary">
						{scriptText.length} / 200 characters
					</Typography>
					<Button variant="contained" color="primary">
						Upload Audio
					</Button>
				</Box>
			</Box>

			{/* Video Prompt */}
			<Box sx={{ mb: 4 }}>
				<Typography variant="subtitle1" gutterBottom>
					Video Prompt (Optional)
				</Typography>
				<TextField
					fullWidth
					multiline
					rows={4}
					placeholder="Describe the avatar's gestures & emotion"
					value={videoPrompt}
					onChange={(e) => setVideoPrompt(e.target.value)}
				/>
			</Box>

			{/* Generate Button */}
			<Button
				variant="contained"
				color="primary"
				fullWidth
				size="large"
				sx={{ mt: 2 }}
			>
				Generate Advertisement
			</Button>
		</StyledPaper>
	);
};

export default RightPanel;
