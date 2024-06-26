import { currentUser } from "@clerk/nextjs/server"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";

async function UserInformation() {
  const user = await currentUser();

  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const image = user?.imageUrl;

  return (
    <div className="flex flex-col justify-center items-center bg-white mr-6 rounded-lg border py-4">
      <Avatar>
        {user?.id ? (
          <AvatarImage src={image} alt="alt user" />

        ) : <AvatarFallback>{firstName?.charAt(0)}
          {lastName?.charAt(0)}
        </AvatarFallback>
        }

      </Avatar>
      <SignedIn>
        <div className="text-center">
          <p className="font-semibold">
            {firstName} {lastName}
          </p>
          <p className="text-xs">
            @{firstName}
            {lastName}-{user?.id.slice(-4)}
          </p>

        </div>
      </SignedIn>
      <SignedOut>
        <div className="text-center space-y-2">
          <p className="font-semibold"> You are not signed in

          </p>
          <Button asChild className="bg-[#0b"></Button>

        </div>
      </SignedOut>

    </div>
  )
}

export default UserInformation