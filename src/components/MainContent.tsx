import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import { Box, Button, Paper, styled, Typography } from "@mui/material";
import React, { useState } from "react";

const VisuallyHiddenInput = styled("input")({
	clip: "rect(0 0 0 0)",
	clipPath: "inset(50%)",
	height: 1,
	overflow: "hidden",
	position: "absolute",
	bottom: 0,
	left: 0,
	whiteSpace: "nowrap",
	width: 1,
});

const MainContentWrapper = styled(Box)(({ theme }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	marginLeft: "240px", // Sidebar width
	marginRight: "350px", // RightPanel width
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	maxWidth: "calc(100% - 590px)", // 240px (Sidebar) + 350px (RightPanel)
	margin: "0 auto",
	position: "relative",
	left: "120px", // Half of Sidebar width to center the content
}));

const MainContent = () => {
	const [avatarImage, setAvatarImage] = useState<string | null>(null);
	const [productImage, setProductImage] = useState<string | null>(null);

	const handleImageUpload = (
		event: React.ChangeEvent<HTMLInputElement>,
		type: "avatar" | "product"
	) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				if (type === "avatar") {
					setAvatarImage(reader.result as string);
				} else {
					setProductImage(reader.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<MainContentWrapper>
			<Typography variant="h5" gutterBottom align="center">
				Create Advertisement
			</Typography>

			<Box
				sx={{
					display: "flex",
					gap: 3,
					mb: 3,
					width: "100%",
					justifyContent: "center",
				}}
			>
				{/* Avatar Upload Section */}
				<Paper
					sx={{
						p: 2,
						flex: 1,
						textAlign: "center",
						maxWidth: "400px",
					}}
				>
					<Typography variant="h6" gutterBottom>
						Upload Avatar
					</Typography>
					{avatarImage ? (
						<Box sx={{ position: "relative" }}>
							<img
								src={avatarImage}
								alt="Avatar"
								style={{
									maxWidth: "100%",
									maxHeight: "300px",
									objectFit: "contain",
								}}
							/>
							<Button
								variant="contained"
								size="small"
								sx={{
									position: "absolute",
									bottom: 8,
									right: 8,
								}}
								onClick={() => setAvatarImage(null)}
							>
								Remove
							</Button>
						</Box>
					) : (
						<Button
							component="label"
							variant="contained"
							startIcon={<CloudUploadIcon />}
						>
							Upload Avatar
							<VisuallyHiddenInput
								type="file"
								accept="image/*"
								onChange={(e) => handleImageUpload(e, "avatar")}
							/>
						</Button>
					)}
				</Paper>

				{/* Product Upload Section */}
				<Paper
					sx={{
						p: 2,
						flex: 1,
						textAlign: "center",
						maxWidth: "400px",
					}}
				>
					<Typography variant="h6" gutterBottom>
						Upload Product
					</Typography>
					{productImage ? (
						<Box sx={{ position: "relative" }}>
							<img
								src={productImage}
								alt="Product"
								style={{
									maxWidth: "100%",
									maxHeight: "300px",
									objectFit: "contain",
								}}
							/>
							<Button
								variant="contained"
								size="small"
								sx={{
									position: "absolute",
									bottom: 8,
									right: 8,
								}}
								onClick={() => setProductImage(null)}
							>
								Remove
							</Button>
						</Box>
					) : (
						<Button
							component="label"
							variant="contained"
							startIcon={<CloudUploadIcon />}
						>
							Upload Product
							<VisuallyHiddenInput
								type="file"
								accept="image/*"
								onChange={(e) =>
									handleImageUpload(e, "product")
								}
							/>
						</Button>
					)}
				</Paper>
			</Box>

			{/* Preview Section */}
			<Paper sx={{ p: 2, mt: 3, width: "100%", maxWidth: "800px" }}>
				<Typography variant="h6" gutterBottom align="center">
					Preview
				</Typography>
				<Box
					sx={{
						height: "400px",
						backgroundColor: "#f5f5f5",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 1,
					}}
				>
					<Typography color="text.secondary">
						Preview will appear here after processing
					</Typography>
				</Box>
			</Paper>
		</MainContentWrapper>
	);
};

export default MainContent;
