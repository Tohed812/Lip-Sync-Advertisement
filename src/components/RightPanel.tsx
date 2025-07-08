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
import { Textarea } from "@/components/ui/textarea";
import { Settings2, X } from "lucide-react";
import { useEffect, useState } from "react";

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
	const [selectedAudio, setSelectedAudio] = useState<File | null>(null);
	const [audioError, setAudioError] = useState<string>("");
	const [audioUrl, setAudioUrl] = useState<string>("");
	const [lipSyncText, setLipSyncText] = useState<string>("");
	const [videoPrompt, setVideoPrompt] = useState<string>("");

	const handleAudioUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		setAudioError("");

		// Clean up previous audio URL if it exists
		if (audioUrl) {
			URL.revokeObjectURL(audioUrl);
			setAudioUrl("");
		}

		if (file) {
			// Check file type
			if (!file.type.startsWith("audio/")) {
				setAudioError("Please select an audio file");
				return;
			}

			// Check file size (5MB = 5 * 1024 * 1024 bytes)
			if (file.size > 5 * 1024 * 1024) {
				setAudioError("Audio file must be less than 5MB");
				return;
			}

			// Get duration
			const audio = new Audio();
			const newAudioUrl = URL.createObjectURL(file);
			audio.src = newAudioUrl;

			audio.onloadedmetadata = () => {
				// Check duration (5 minutes = 300 seconds)
				if (audio.duration > 300) {
					setAudioError("Audio must be less than 5 minutes");
					URL.revokeObjectURL(newAudioUrl);
					return;
				}

				setSelectedAudio(file);
				setAudioUrl(newAudioUrl);
			};

			audio.onerror = () => {
				setAudioError("Invalid audio file");
				URL.revokeObjectURL(newAudioUrl);
			};
		}
	};

	const handleClearAudio = () => {
		if (audioUrl) {
			URL.revokeObjectURL(audioUrl);
		}
		setSelectedAudio(null);
		setAudioUrl("");
		setAudioError("");

		// Reset the file input
		const fileInput = document.getElementById(
			"audio-upload"
		) as HTMLInputElement;
		if (fileInput) {
			fileInput.value = "";
		}
	};

	// Cleanup function for audio URL when component unmounts
	useEffect(() => {
		return () => {
			if (audioUrl) {
				URL.revokeObjectURL(audioUrl);
			}
		};
	}, [audioUrl]);

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
					<div className="space-y-4">
						<input
							type="file"
							accept="audio/*"
							className="hidden"
							id="audio-upload"
							onChange={handleAudioUpload}
						/>
						<div className="space-y-2">
							<div>
								<label htmlFor="audio-upload">
									<Button className="w-40" asChild>
										<span>Choose Audio</span>
									</Button>
								</label>
							</div>
							<p className="text-sm text-muted-foreground">
								Supported formats: MP3, WAV (max 5 minutes)
							</p>
						</div>
						{selectedAudio && (
							<div className="mt-4">
								<div className="flex items-center justify-between gap-2 p-2 border rounded-lg bg-muted/50">
									<span className="flex-1 truncate text-sm">
										{selectedAudio.name}
									</span>
									<Button
										variant="ghost"
										size="icon"
										className="h-8 w-8 shrink-0"
										onClick={handleClearAudio}
									>
										<X className="h-4 w-4" />
									</Button>
								</div>
								{audioUrl && (
									<div className="mt-2">
										<audio
											controls
											className="w-full h-8"
											src={audioUrl}
										>
											Your browser does not support the
											audio element.
										</audio>
									</div>
								)}
								<p className="text-xs text-muted-foreground mt-2">
									File size:{" "}
									{(
										selectedAudio.size /
										(1024 * 1024)
									).toFixed(2)}
									MB
								</p>
							</div>
						)}
						{audioError && (
							<p className="text-xs text-red-500 mt-2">
								{audioError}
							</p>
						)}
					</div>
				</Card>

				<Card className="p-4">
					<h2 className="font-medium mb-2">Text for LipSync</h2>
					<div className="space-y-2">
						<Textarea
							placeholder="Enter the text you want the avatar to speak..."
							className="min-h-[100px] resize-none"
							value={lipSyncText}
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setLipSyncText(e.target.value)}
						/>
						<div className="flex justify-between items-center">
							<p className="text-xs text-muted-foreground">
								{lipSyncText.length} characters
							</p>
							{lipSyncText && (
								<Button
									variant="ghost"
									size="sm"
									onClick={() => setLipSyncText("")}
									className="text-xs"
								>
									Clear
								</Button>
							)}
						</div>
					</div>
				</Card>

				<Card className="p-4">
					<h2 className="font-medium mb-2">Video Prompt</h2>
					<div className="space-y-2">
						<Textarea
							placeholder="Describe the avatar's gesture and emotion. For example, Person raises the hands ups and down"
							className="min-h-[100px] resize-none"
							value={videoPrompt}
							onChange={(
								e: React.ChangeEvent<HTMLTextAreaElement>
							) => setVideoPrompt(e.target.value)}
						/>
						<div className="flex justify-between items-center">
							<p className="text-xs text-muted-foreground">
								{videoPrompt.length} characters
							</p>
							{videoPrompt && (
								<Button
									variant="ghost"
									size="sm"
									onClick={() => setVideoPrompt("")}
									className="text-xs"
								>
									Clear
								</Button>
							)}
						</div>
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
