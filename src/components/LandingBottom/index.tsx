import team from "../../media/team-dev.svg";

const LandingBottom = () => {
  return (
    <div className="container mb-5 pb-5">
      <div className="row justify-content-center">
        <h4 className="text-danger text-center">
          <q>
            Write a bit about our motives message so we can explain our self
          </q>
        </h4>
      </div>
      <div className="border border-primary rounded mx-auto d-block my-5 p-5">
        <img className="img-fluid mx-auto d-block" src={team} alt="team-svg" />
        <h4 className="text-center my-2 p-3 text-primary ">About TinDev</h4>
        <p className="text-center text-secondary p-3 lh-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          excepturi dolorem quas unde esse est? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Debitis excepturi dolorem quas unde esse
          est?
        </p>
      </div>

      <div className="icons align-items-center d-flex justify-content-center">
        <img
          src="https://img.icons8.com/nolan/64/facebook.png"
          alt="Facebook-icon"
          className="px-3"
        />
        <img
          src="https://img.icons8.com/nolan/64/twitter.png"
          alt="twitter-icon"
          className="px-3"
        />
        <img
          src="https://img.icons8.com/nolan/64/instagram-new.png"
          alt="instagram-icon"
          className="px-3"
        />
      </div>
    </div>
  );
};

export default LandingBottom;
