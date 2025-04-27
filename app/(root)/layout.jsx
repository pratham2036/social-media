import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";

// import LeftSideBar from "@components/layout/LeftSideBar";
// import MainContainer from "@componets/layout/MainContainer";
import RightSideBar from "@/componets/layout/RightSideBar";
import BottomBar from "@/componets/layout/BottomBar";
import LeftSideBar from "@/componets/layout/LeftSideBar";
import MainContainer from "@/componets/layout/MainContainer";
import TopBar from "../../componets/Layout/TopBar";

export const metadata = {
  title: "Vibe Zone",
  description: "Next 14 Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1 px-2`}>
          <main className="flex flex-row gap-6 ">
            <LeftSideBar />
            <MainContainer>
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}