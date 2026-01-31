import img2 from "../assets/img2.jpg";

function ThirdSection() {
  return (
    <section className="third-section">
      {/* Left text */}
      <div className="third-text">
        <h2>
          Built for photographers,
          <br />
          event teams, and attendees.
        </h2>

        <p>
          SnapShare AI streamlines photo delivery using facial recognition,
          automation, and scalable infrastructure — removing manual effort
          and delays after events.
        </p>
      </div>

      {/* Right image */}
      <div className="third-image">
        <img src={img2} alt="SnapShare workflow" />
      </div>
    </section>
  );
}

export default ThirdSection;
