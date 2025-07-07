# Lip Sync Advertisement Creator

A web application for creating lip-synced advertisements using AI models. Built with Next.js 14, TypeScript, and shadcn/ui components.

## Features

-   🎥 Create lip-synced videos from images and audio
-   🤖 Multiple AI model options for different quality levels
-   🎨 Modern, responsive UI with dark mode support
-   ⚡ Fast and efficient processing
-   📱 Mobile-friendly interface

## Tech Stack

-   **Framework:** [Next.js 14](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Icons:** [Lucide Icons](https://lucide.dev/)

## Getting Started

### Prerequisites

-   Node.js 18.17 or later
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Tohed812/Lip-Sync-Advertisement.git
cd Lip-Sync-Advertisement
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── MainContent.tsx   # Main video preview
│   ├── Sidebar.tsx      # Left sidebar with controls
│   ├── RightPanel.tsx   # Right settings panel
│   └── ui/              # shadcn/ui components
├── lib/                 # Utility functions
└── types/              # TypeScript type definitions
```

## Features in Development

-   [ ] Multiple AI model support
-   [ ] Real-time video preview
-   [ ] Export options (MP4, GIF)
-   [ ] Background noise reduction
-   [ ] Voice clarity enhancement
-   [ ] Batch processing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
