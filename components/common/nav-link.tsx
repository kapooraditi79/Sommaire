//this tsx file is to give
//same style to every link in our web app
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"; //importing the cn function from the utils lib
// import { cn } from "@/lib/utils"; //importing the cn function from the utils lib
import { usePathname } from "next/navigation";

export default function NavLink({
  href, //now we will remove "Link" and replace it with "NavLink"
  children,
  className, //optional className prop
}: {
  href: string;
  children: React.ReactNode;
  className?: string; //optional className prop
}) {
  const pathname = usePathname(); //this will give us the current path of the page we are on
  const isActive =
    pathname === href || (pathname.startsWith(href) && href !== "/"); //this will check if the current path is the same as the href or if it starts with the href and the href is not equal to '/'

  return (
    <Link
      href={href}
      className={cn(
        "transition duration-200 ease-in-out text-pink-400 hover:text-purple-600 dark:text-gray-100 dark:hover:text-gray-400 lg:px-4 px-2 py-1 rounded-md text-sm font-medium",
        className,
        isActive ? "text-purple-600 dark:text-pink-400" : "text-white-900" //this will check if the current path is the same as the href or if it starts with the href and the href is not equal to '/'
      )}
    >
      {children}
    </Link>
  );
}

{
  /*
there is a possibility that 
teh link component that we put in out webapp
may have its own classname/styles
so we have to make sure that we are not overriding them
we take them up as optional props up as you see.
*/
}

{
  /* we use the cn function from the shadCn lib in teh utils
    under it the tw function
    it merges the tailwind css

    basically for not overriding the inline mentioned style of link
     */
}
