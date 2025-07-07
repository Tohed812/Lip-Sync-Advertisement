import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import {
	Alert,
	Box,
	Button,
	CircularProgress,
	Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
	title: string;
	onImageChange: (imageData: string) => void;
	maxSizeMB?: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
	title,
	onImageChange,
	maxSizeMB = 5,
}) => {
	const [image, setImage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			setError(null);
			const file = acceptedFiles[0];

			// Validate file size
			if (file.size > maxSizeMB * 1024 * 1024) {
				setError(`File size must be less than ${maxSizeMB}MB`);
				return;
			}

			// Validate file type
			if (!file.type.startsWith("image/")) {
				setError("Please upload an image file");
				return;
			}

			setLoading(true);
			try {
				const reader = new FileReader();
				reader.onloadend = () => {
					const imageData = reader.result as string;
					setImage(imageData);
					onImageChange(imageData);
					setLoading(false);
				};
				reader.readAsDataURL(file);
			} catch (err) {
				setError("Error reading file");
				setLoading(false);
			}
		},
		[maxSizeMB, onImageChange]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".png", ".jpg", ".jpeg", ".gif"],
		},
		maxFiles: 1,
	});

	return (
		<>
			<Box
				sx={{
					height: "300px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#f5f5f5",
					borderRadius: 1,
					border: isDragActive
						? "2px dashed #6C5CE7"
						: "2px dashed #ccc",
					position: "relative",
				}}
			>
				{loading ? (
					<CircularProgress />
				) : image ? (
					<Box
						sx={{
							position: "relative",
							width: "100%",
							height: "100%",
						}}
					>
						<img
							src={image}
							alt={title}
							style={{
								width: "100%",
								height: "100%",
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
							onClick={() => {
								setImage(null);
								onImageChange("");
							}}
						>
							Remove
						</Button>
					</Box>
				) : (
					<Box
						{...getRootProps()}
						sx={{
							width: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							cursor: "pointer",
						}}
					>
						<input {...getInputProps()} />
						<CloudUploadIcon
							sx={{
								fontSize: 48,
								color: "text.secondary",
								mb: 2,
							}}
						/>
						<Typography
							variant="body1"
							color="text.secondary"
							align="center"
						>
							{isDragActive
								? "Drop the image here"
								: `Drag and drop ${title} here, or click to select`}
						</Typography>
						<Typography
							variant="caption"
							color="text.secondary"
							sx={{ mt: 1 }}
						>
							Max size: {maxSizeMB}MB
						</Typography>
					</Box>
				)}
			</Box>

			{error && (
				<Alert severity="error" sx={{ mt: 1 }}>
					{error}
				</Alert>
			)}
		</>
	);
};

export default ImageUpload;
