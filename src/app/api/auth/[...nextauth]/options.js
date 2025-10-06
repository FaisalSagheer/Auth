import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GithubProvider({
            profile(profile) {
                console.log("profile Github: ", profile)
                let userRole = "Github User"
            }
        })

    ]
}

export default NextAuth(options)