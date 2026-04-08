import { Heading, Input, Button } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const disabled = !email || !password;

    function handleSubmit(e) {
        e.preventDefault();

        navigate("/profile");
    }

    return (
        <div className="w-full h-full flex p-5">
            <div>
                <Heading content="Signin to your PopX account" className="leading-[36px] pr-[100px]" />
                <p className="text-primary opacity-[.6] pr-[85px] mt-2 text-[18px] leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <form className="text-[13px]" onSubmit={handleSubmit}>
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter email address"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />

                    <Button
                        name="Login"
                        type="submit"
                        category="primary"
                        disabled={disabled}
                        className="mt-[14px] text-[16px]"
                    />
                </form>
            </div>
        </div>
    );
}
