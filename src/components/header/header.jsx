import Navbar from "./navbar";
import ProfileCard from "@components/header/profileCard";

function Header() {
    return (
        <header className="w-full flex flex-col items-start bg-gray-950 text-white sticky top-0 z-50">
            <div className="w-full flex h-16 justify-between items-center px-4 sticky top-0 bg-gray-950 z-50">
                <ProfileCard />
                <Navbar />
            </div>
        </header>
    );
}

export default Header;