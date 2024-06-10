"use client"
import { useUser } from "@clerk/nextjs"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

function PostForm() {
  const { user } = useUser()
  return (
    <div>
      <form action="">
        <div>
          <Avatar>
            {user?.id ? (
              <AvatarImage
                src={user?.imageUrl} alt="alt user"
                className="rounded-full"
              />

            ) : <AvatarFallback>{user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </AvatarFallback>
            }
          </Avatar>

          <input type="text"
            className="bg-white p-2 rounded-lg w-full" placeholder="What's on your mind?" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg"
          >Post</button>
        </div>
      </form>
    </div>
  )
}

export default PostForm