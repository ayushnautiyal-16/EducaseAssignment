import { Card } from "../../components";
import userAvatarSrc from "../../assets/img/profile-avatar.png";

export function AccountSettings() {
  const userBio =
    "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam";

  return (
    <div className="h-full flex flex-col">
      <h6 className="text-[18px] bg-white shadow-[0_3px_6px_#00000007] h-[68px] px-[15px] pt-[27px] pb-[19px]">Account Settings</h6>
      <Card picture={userAvatarSrc} name="Marry Doe" email="Marry@Gmail.Com" bio={userBio} />
    </div>
  );
}
