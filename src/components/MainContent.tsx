"use client";

import { Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const exampleImages = [
	{
		id: 1,
		src: "/examples/1-original.png",
		alt: "Beauty product advertisement with model",
	},
	{
		id: 2,
		src: "/examples/2-original.png",
		alt: "Fitness supplement advertisement with model",
	},
	{
		id: 3,
		src: "/examples/3-original.png",
		alt: "Camera product advertisement with model",
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

	const handleExampleClick = (src: string) => {
		setSelectedImage(src);
		// Add to history with a recognizable name
		const imageName = src.split("/").pop() || "example-image";
		setHistory((prev) => [...prev, imageName]);
	};

	return (
		<main className="flex flex-col min-h-screen">
			{/* Center Container */}
			<div className="flex-1 flex items-center justify-center p-6">
				<Card className="w-[568px] h-[568px] flex flex-col items-center justify-center p-8 bg-muted/50">
					{selectedImage ? (
						<div className="relative w-full h-full">
							<div className="relative w-full h-full">
								<Image
									src={
										selectedImage.startsWith("blob:")
											? selectedImage
											: selectedImage
									}
									alt="Selected model"
									fill
									className="object-contain rounded-lg"
									unoptimized={selectedImage.startsWith(
										"blob:"
									)}
								/>
							</div>
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
									Max file size: 20M
								</p>
								<div className="flex gap-4 justify-center">
									<input
										type="file"
										id="image-upload"
										className="hidden"
										accept="image/*"
										onChange={handleImageUpload}
									/>
									<label
										htmlFor="image-upload"
										className="cursor-pointer"
									>
										<Button className="w-40">
											<Upload className="w-4 h-4 mr-2" />
											Upload Image
										</Button>
									</label>
									<Button className="w-40">
										Generate Image
									</Button>
								</div>
							</div>
							<div className="mt-8">
								<p className="text-sm text-muted-foreground mb-4">
									Or try the following
								</p>
								<div className="flex gap-4 justify-center">
									{exampleImages.map((image) => (
										<button
											key={image.id}
											className="w-[58px] h-[58px] rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors overflow-hidden"
											onClick={() =>
												handleExampleClick(image.src)
											}
										>
											<div className="relative w-full h-full">
												<Image
													src={image.src}
													alt={image.alt}
													fill
													className="object-cover"
												/>
											</div>
										</button>
									))}
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
