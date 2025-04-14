import Link from "next/link";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Header() {
  const isLoggedIn = false; // Replace with your authentication logic
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <Link href="/" className="flex items-center gap-2">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out " />
          <span className="font-extrabold lg:text-xl text-gray-900 ">
            Sommoire
          </span>
        </Link>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg: items-center  ">
        {" "}
        {/* the "#" before the "pricing" link allows the user to jump to a specific anchor html 
        tag within the same page*/}
        <Link href="/#pricing">Pricing</Link>
        {isLoggedIn && <Link href="/dashboard">Your Summaries</Link>}{" "}
        {/* including this link here to the Dashboard page */}
      </div>{" "}
      {/* The dashboard only opens if user is loggedIn */}
      {/* in this function
      you will only see 
      the signIn Function if you are 
      logged Out */}
      <div className="flex lg:justify-end lg:flex-1 ">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            {/* if the user is signed in */}
            <Link href={"/upload"}>Upload a PDF</Link>{" "}
            {/* including this link here to the Upload page */}
            <div>Pro</div>
            <Button>user</Button>
          </div>
        ) : (
          <div>
            <Link href="/sign-in">SignIn</Link>{" "}
            {/* including this link here to the SignIn page */}
          </div>
        )}
      </div>
    </nav>
  );
}
