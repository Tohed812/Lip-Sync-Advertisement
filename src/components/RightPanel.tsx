"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export default function RightPanel() {
	return (
		<div className="p-4 space-y-4">
			<div className="mb-8">
				<h2 className="text-xl font-bold">Settings</h2>
				<p className="text-sm text-muted-foreground">
					Adjust your video settings
				</p>
			</div>

			<div className="space-y-4">
				<Card className="p-4">
					<h3 className="font-medium mb-4">Video Settings</h3>
					<div className="space-y-6">
						<div className="space-y-2">
							<label className="text-sm font-medium">
								Output Quality
							</label>
							<Slider defaultValue={[75]} max={100} step={1} />
							<div className="flex justify-between text-xs text-muted-foreground">
								<span>Draft</span>
								<span>High Quality</span>
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium">
								Frame Rate
							</label>
							<Slider defaultValue={[30]} max={60} step={1} />
							<div className="flex justify-between text-xs text-muted-foreground">
								<span>24 fps</span>
								<span>60 fps</span>
							</div>
						</div>
					</div>
				</Card>

				<Card className="p-4">
					<h3 className="font-medium mb-4">Audio Settings</h3>
					<div className="space-y-6">
						<div className="space-y-2">
							<label className="text-sm font-medium">
								Voice Clarity
							</label>
							<Slider defaultValue={[50]} max={100} step={1} />
							<div className="flex justify-between text-xs text-muted-foreground">
								<span>Natural</span>
								<span>Enhanced</span>
							</div>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium">
								Background Noise Reduction
							</label>
							<Slider defaultValue={[0]} max={100} step={1} />
							<div className="flex justify-between text-xs text-muted-foreground">
								<span>Off</span>
								<span>Maximum</span>
							</div>
						</div>
					</div>
				</Card>

				<div className="pt-4">
					<Button className="w-full" size="lg">
						Generate Video
					</Button>
				</div>
			</div>
		</div>
	);
}
