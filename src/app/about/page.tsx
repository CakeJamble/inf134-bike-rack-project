import "../about/about.css"

export default async function AboutLayout(){
  return (
    <>
      <div className="flex flex-col items items-center m-6">
        <h1 className="italic">About Us</h1>
        
        <div className="py-3 groups">
          <h3>How Does Rating Work?</h3>
          <p className="pl-4 my-2">
            We collect and average all the bike ratings sent in by users.
          </p>
        </div>

        <div className="py-3 groups">
          <h3>The Mission</h3>
          <p className="pl-4 my-2">
            "Is there a bike rack here?" From this question, our mission was born. We're here to make sure bikers never have to look far for their answers.
          </p>
        </div>

        <div className="py-3 groups">
          <h3>The Team</h3>
          <p className="pl-4 my-2">
            Lovingly crafted by the Norman Doors team.
          </p>
        </div>
      </div>
    </>
  );
}