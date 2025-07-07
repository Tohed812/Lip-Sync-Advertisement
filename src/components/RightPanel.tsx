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
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Settings2 } from "lucide-react";

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

export default function RightPanel() {
	return (
		<div className="w-full h-full p-4 flex flex-col justify-between">
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

			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						className="w-full flex items-center gap-2"
					>
						<Settings2 className="h-5 w-5" />
						Settings
					</Button>
				</SheetTrigger>
				<SheetContent side="right">
					<SheetHeader>
						<SheetTitle>Video Settings</SheetTitle>
						<SheetDescription>
							Adjust your video and audio settings here.
						</SheetDescription>
					</SheetHeader>
					<div className="space-y-6 py-6">
						<Card className="p-4">
							<h3 className="font-medium mb-4">Video Settings</h3>
							<div className="space-y-4">
								<div>
									<label className="text-sm font-medium mb-2 block">
										Video Quality
									</label>
									<Slider
										defaultValue={[75]}
										max={100}
										step={1}
										className="w-full"
									/>
								</div>
								<div>
									<label className="text-sm font-medium mb-2 block">
										Frame Rate
									</label>
									<Slider
										defaultValue={[30]}
										max={60}
										step={1}
										className="w-full"
									/>
								</div>
							</div>
						</Card>

						<Card className="p-4">
							<h3 className="font-medium mb-4">Audio Settings</h3>
							<div className="space-y-4">
								<div>
									<label className="text-sm font-medium mb-2 block">
										Volume
									</label>
									<Slider
										defaultValue={[100]}
										max={100}
										step={1}
										className="w-full"
									/>
								</div>
								<div>
									<label className="text-sm font-medium mb-2 block">
										Audio Quality
									</label>
									<Slider
										defaultValue={[75]}
										max={100}
										step={1}
										className="w-full"
									/>
								</div>
							</div>
						</Card>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
