"use client";

import { useState } from "react";
import { Card } from "./ui/card";

const models = [
	{
		id: "latentsync",
		name: "LatentSync",
		description: "High-quality lip sync with latent diffusion",
	},
	{
		id: "musetalk",
		name: "MuseTalk",
		description: "Music-driven lip sync model",
	},
	{
		id: "wav2lip",
		name: "Wav2Lip",
		description: "Classic lip sync model with proven reliability",
	},
	{
		id: "syncnet",
		name: "SyncNet",
		description: "Fast and efficient lip sync model",
	},
	{
		id: "lipgan",
		name: "LipGAN",
		description: "GAN-based lip sync with natural movements",
	},
];

export default function MainContent() {
	const [selectedModel, setSelectedModel] = useState<string>("");
	const [modelImage, setModelImage] = useState<File | null>(null);

	const handleModelSelect = (value: string) => {
		setSelectedModel(value);
	};

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			if (file.size > 20 * 1024 * 1024) {
				alert("File size must be less than 20MB");
				return;
			}
			setModelImage(file);
		}
	};

	return (
		<main className="p-6">
			<Card className="p-6">
				<h1 className="text-2xl font-bold mb-4">Video Preview</h1>
				<div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
					<p className="text-muted-foreground">
						Video preview will appear here
					</p>
				</div>
			</Card>
		</main>
	);
}
