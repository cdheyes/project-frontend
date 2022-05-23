import { SignForm } from "../components/signLog"
import { LogForm } from "../components/signLog"
import { Footer } from "../components/footer";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState();
    return (
        <div>
            <h1>login</h1>
            {!user && <SignForm setUser={setUser} />}
			{!user && <LogForm setUser={setUser} />}
            <Footer />
        </div>
    )
}

export default Login