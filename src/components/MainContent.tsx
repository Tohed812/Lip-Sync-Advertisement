"use client";

import { Upload } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
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
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [history, setHistory] = useState<string[]>([]);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			if (file.size > 20 * 1024 * 1024) {
				alert("File size must be less than 20MB");
				return;
			}
			const imageUrl = URL.createObjectURL(file);
			setSelectedImage(imageUrl);
			setHistory((prev) => [...prev, file.name]);
		}
	};

	return (
		<main className="flex flex-col min-h-screen">
			{/* Center Container */}
			<div className="flex-1 flex items-center justify-center p-6">
				<Card className="w-[568px] h-[568px] flex flex-col items-center justify-center p-8 bg-muted/50">
					{selectedImage ? (
						<div className="relative w-full h-full">
							<img
								src={selectedImage}
								alt="Uploaded model"
								className="w-full h-full object-cover rounded-lg"
							/>
							<Button
								variant="outline"
								className="absolute bottom-4 right-4"
								onClick={() => setSelectedImage(null)}
							>
								Change Image
							</Button>
						</div>
					) : (
						<div className="text-center space-y-4">
							<div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
								<Upload className="w-12 h-12 text-muted-foreground" />
							</div>
							<h3 className="text-xl font-semibold">
								Upload Model Image
							</h3>
							<div className="space-y-6">
								<p className="text-sm text-muted-foreground">
									Upload size: 300×300 ~ 4096×4096, less than
									20M
								</p>
								<div>
									<input
										type="file"
										accept="image/*"
										className="hidden"
										id="main-image-upload"
										onChange={handleImageUpload}
									/>
									<label htmlFor="main-image-upload">
										<Button className="w-40" asChild>
											<span>Upload Image</span>
										</Button>
									</label>
								</div>
							</div>
							<div className="mt-8">
								<p className="text-sm text-muted-foreground mb-4">
									Or try the following
								</p>
								<div className="grid grid-cols-3 gap-4">
									<button className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
										<img
											src="/examples/model1.jpg"
											alt="Example 1"
											className="w-full h-full object-cover rounded-lg"
										/>
									</button>
									<button className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
										<img
											src="/examples/model2.jpg"
											alt="Example 2"
											className="w-full h-full object-cover rounded-lg"
										/>
									</button>
									<button className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
										<img
											src="/examples/model3.jpg"
											alt="Example 3"
											className="w-full h-full object-cover rounded-lg"
										/>
									</button>
								</div>
							</div>
						</div>
					)}
				</Card>
			</div>

			{/* History Bar */}
			<div className="p-6">
				<Card className="p-4">
					<div className="flex items-center justify-between mb-2">
						<h3 className="text-sm font-medium">My Creations</h3>
						<Button variant="ghost" size="sm" className="text-xs">
							View All
						</Button>
					</div>
					<div className="flex gap-4 overflow-x-auto pb-2">
						{history.map((name, index) => (
							<div
								key={index}
								className="flex-shrink-0 p-2 border rounded-lg hover:bg-accent cursor-pointer"
							>
								<p className="text-sm">{name}</p>
							</div>
						))}
						{history.length === 0 && (
							<p className="text-sm text-muted-foreground">
								Generations will appear here
							</p>
						)}
					</div>
				</Card>
			</div>
		</main>
	);
}
