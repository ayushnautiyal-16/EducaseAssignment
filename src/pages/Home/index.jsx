import { Heading, Button } from "../../components";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full h-full flex p-5">
      <div className="mt-auto">
        <Heading content="Welcome to PopX" />
        <p className="text-primary opacity-[.6] pr-[85px] mb-7 text-[18px] leading-[26px]">Manage your account easily and get started in just a few steps.</p>
        <Link to="/signup">
          <Button name="Create Account" type="button" category="primary" disabled={false} />
        </Link>
        <Link to="/login">
          <Button name="Already Registered? Login" type="button" category="secondary" disabled={false} />
        </Link>
      </div>
    </div>
  );
}
