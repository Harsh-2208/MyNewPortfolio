import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	// weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
	title: "Harsh Upadhyay",
	description: "My Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/png"
					href="/Images/Logo.png"
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
