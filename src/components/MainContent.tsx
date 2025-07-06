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

const MainContentWrapper = styled(Box)({
	flexGrow: 1,
	height: "100vh",
	overflow: "auto",
	paddingLeft: "240px", // Sidebar width
	paddingRight: "350px", // RightPanel width
});

const ContentContainer = styled(Box)(({ theme }) => ({
	maxWidth: "1000px",
	margin: "0 auto",
	padding: theme.spacing(3),
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
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
			<ContentContainer>
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
						flexWrap: { xs: "wrap", md: "nowrap" },
					}}
				>
					{/* Avatar Upload Section */}
					<Paper
						sx={{
							p: 2,
							flex: "1 1 300px",
							maxWidth: "400px",
							minWidth: { xs: "100%", md: "300px" },
							textAlign: "center",
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
										width: "100%",
										height: "300px",
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
							<Box
								sx={{
									height: "300px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: "#f5f5f5",
									borderRadius: 1,
								}}
							>
								<Button
									component="label"
									variant="contained"
									startIcon={<CloudUploadIcon />}
								>
									Upload Avatar
									<VisuallyHiddenInput
										type="file"
										accept="image/*"
										onChange={(e) =>
											handleImageUpload(e, "avatar")
										}
									/>
								</Button>
							</Box>
						)}
					</Paper>

					{/* Product Upload Section */}
					<Paper
						sx={{
							p: 2,
							flex: "1 1 300px",
							maxWidth: "400px",
							minWidth: { xs: "100%", md: "300px" },
							textAlign: "center",
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
										width: "100%",
										height: "300px",
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
							<Box
								sx={{
									height: "300px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									backgroundColor: "#f5f5f5",
									borderRadius: 1,
								}}
							>
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
							</Box>
						)}
					</Paper>
				</Box>

				{/* Preview Section */}
				<Paper
					sx={{
						p: 2,
						mt: 3,
						width: "100%",
						maxWidth: "900px",
					}}
				>
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
			</ContentContainer>
		</MainContentWrapper>
	);
};

export default MainContent;
