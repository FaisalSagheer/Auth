import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers:[
        GithubProvider({
            clientId:,
            clientSecret:,
        })
       
    ]
}

export default NextAuth(options)