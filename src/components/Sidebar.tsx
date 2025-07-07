"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const models = [
	{
		id: "latentsync",
		name: "LatentSync",
		description: "Advanced latent diffusion model",
	},
	{
		id: "musetalk",
		name: "MuseTalk",
		description: "Music-driven talking head synthesis",
	},
	{
		id: "wav2lip",
		name: "Wav2Lip",
		description: "Accurate lip synchronization",
	},
	{
		id: "syncnet",
		name: "SyncNet",
		description: "Audio-visual synchronization network",
	},
	{
		id: "lipgan",
		name: "LipGAN",
		description: "GAN-based lip synthesis",
	},
];

export default function Sidebar() {
	return (
		<div className="p-4 space-y-4">
			<div className="mb-8">
				<h1 className="text-xl font-bold">Lip Sync Creator</h1>
				<p className="text-sm text-muted-foreground">
					Create amazing lip-synced videos
				</p>
			</div>

			<div className="space-y-4">
				<Card className="p-4">
					<h2 className="font-medium mb-2">Model Selection</h2>
					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Select Lip Sync Model" />
						</SelectTrigger>
						<SelectContent>
							{models.map((model) => (
								<SelectItem key={model.id} value={model.id}>
									<div className="flex flex-col">
										<span className="font-medium">
											{model.name}
										</span>
										<span className="text-xs text-muted-foreground">
											{model.description}
										</span>
									</div>
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</Card>

				<Card className="p-4">
					<h2 className="font-medium mb-2">Upload Image</h2>
					<div className="space-y-2">
						<input
							type="file"
							accept="image/*"
							className="hidden"
							id="image-upload"
						/>
						<label htmlFor="image-upload">
							<Button variant="outline" className="w-full">
								Choose Image
							</Button>
						</label>
						<p className="text-xs text-muted-foreground">
							Image size: 300×300 to 4096×4096 pixels (max 20MB)
						</p>
					</div>
				</Card>

				<Card className="p-4">
					<h2 className="font-medium mb-2">Audio Input</h2>
					<div className="space-y-2">
						<input
							type="file"
							accept="audio/*"
							className="hidden"
							id="audio-upload"
						/>
						<label htmlFor="audio-upload">
							<Button variant="outline" className="w-full">
								Choose Audio
							</Button>
						</label>
						<p className="text-xs text-muted-foreground">
							Supported formats: MP3, WAV (max 5 minutes)
						</p>
					</div>
				</Card>
			</div>
		</div>
	);
}
