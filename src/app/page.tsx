import MainContent from "@/components/MainContent";
import RightPanel from "@/components/RightPanel";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<div className="flex min-h-screen">
			{/* Sidebar - 240px fixed width */}
			<div className="fixed left-0 top-0 w-60 h-full bg-background border-r">
				<Sidebar />
			</div>

			{/* Main content */}
			<div className="flex-1 pl-60 pr-[350px]">
				<MainContent />
			</div>

			{/* Right panel - 350px fixed width */}
			<div className="fixed right-0 top-0 w-[350px] h-full bg-background border-l">
				<RightPanel />
			</div>
		</div>
	);
}
