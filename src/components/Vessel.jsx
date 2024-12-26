const Vessel = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="new-about-head">VESSEL MANAGEMENT</h1>
            <img
              src="/images/home-boat.jpg"
              className="vessel-img"
              alt="Vessel"
            />
          </div>
        </div>
      </div>

      <div className="container vessel-bg">
        <p className="about-para">
          Vessel management involves the efficient operation, maintenance, and
          compliance of ships or fleets to ensure safety, reliability, and
          environmental sustainability. It encompasses technical management,
          focusing on machinery upkeep, repairs, and adherence to classification
          standards. Crew management is another critical aspect, handling
          recruitment, training, and welfare to ensure a skilled and motivated
          workforce. Safety protocols, guided by the ISM code, ensure secure
          operations while meeting international regulatory requirements.
          Operational planning includes voyage scheduling, fuel optimization,
          and cargo handling to maximize efficiency. Financial oversight ensures
          cost-effective operations while maintaining quality. Environmental
          compliance addresses pollution prevention and sustainability measures.
          Regular audits and inspections help maintain standards and identify
          areas for improvement. Modern vessel management increasingly
          integrates digital solutions, like predictive maintenance and fleet
          monitoring. This holistic approach ensures vessels operate smoothly,
          safely, and profitably in a competitive maritime industry.
        </p>
      </div>
    </>
  );
};

export default Vessel;
