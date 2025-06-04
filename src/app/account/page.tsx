import Image from "next/image";
import AccountDropDown from "@/components/accountDropDown";
import './account.css';

export default async function AccountLayout(){
  return (
    <main>
      <section id="profileHeader">
        <figure className="pfp">
          <Image
            className="pfp"
            src="/shri.png"
            alt="User profile picture"
            fill
            priority
          />
        </figure>
        <div className="username">
          <h1 className="username">Username</h1>
          <h2 className="username">Edit Profile</h2>
        </div>
      </section>

      <section id="menu">
        <AccountDropDown label="Account" />
        <hr></hr>
        <AccountDropDown label="Privacy" />
        <hr></hr>
        <AccountDropDown label="Notifications" />
        <hr></hr>
        <AccountDropDown label="Settings"/>
      </section>
    </main>
  );
}