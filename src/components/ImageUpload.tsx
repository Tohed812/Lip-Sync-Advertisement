import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";

interface ImageUploadProps {
	onImageSelect: (file: File) => void;
}

export default function ImageUpload({ onImageSelect }: ImageUploadProps) {
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			onImageSelect(file);
		}
	};

	return (
		<Card className="p-4">
			<div className="space-y-2">
				<input
					type="file"
					accept="image/*"
					onChange={handleFileChange}
					className="hidden"
					id="image-upload"
				/>
				<label htmlFor="image-upload" className="cursor-pointer">
					<Button variant="outline" className="w-full">
						<Upload className="mr-2 h-4 w-4" />
						Choose Image
					</Button>
				</label>
				<p className="text-xs text-muted-foreground">
					Image size: 300×300 to 4096×4096 pixels (max 20MB)
				</p>
			</div>
		</Card>
	);
}
