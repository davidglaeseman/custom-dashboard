import {AuthUser} from "@/app/actions";

export default function LoggedInWelcome({user}:{ user: AuthUser}){
    return (
        <>
            <h1>Welcome, {user.name}</h1>
            <div>home page dashboard</div>
        </>
    )
  }
