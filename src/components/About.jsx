const About = () => {
  return (
    <>
      <div className="container new-about-bg">
        <h1 className="new-about-head new-head">HISTORY OF HARBOURXCHANGE</h1>
        <p className="about-para">
          HarbourXChange was founded by Mr. Shrey Tayal, following his
          successful establishment of the Riverine Group, a leading marine
          company that operates a diverse fleet on the National Waterway and
          Coastal Shipping. With expertise in cargo transportation, project
          execution, salvage operations, towage, jetty management, and crew
          services, Mr. Tayal recognized critical gaps in the marine sector.
          This vision led to the creation of HarbourXChange. HarbourXChange is a
          centralized platform designed to enable real-time monitoring and
          connectivity for marine assets and service providers. Our innovative
          geo-location-based marketplace facilitates informed decision-making by
          providing accurate and timely data.
        </p>
        <p className="about-para">
          Partnering with KT Telematic Solutions, we are positioned to disrupt
          the marine sector by enhancing operational efficiency and
          transparency. We are SaaS platform designed for easy plug-and-play
          operation and ease of intregration.The marine industry operates as a
          semi-organized sector, characterized by diverse asset classes and a
          wide range of operators, from individual owners to large enterprises.
          Traditionally, connections have relied on intermediaries, leading to a
          lack of visibility regarding asset locations and pertinent
          information, which hampers timely decision-making for project
          stakeholders.
        </p>
        <p className="about-para pb-0">
          Real-time monitoring has often depended on crew availability, limiting
          access to critical operational data. With HarbourXChange, asset owners
          and managers gain access to comprehensive real-time data, including
          trip management, tonnage tracking, fuel consumption, crew attendance,
          RPM monitoring, CCTV surveillance, and vessel documentation. Our
          platform empowers users to optimize operational efficiency and enhance
          asset uptime.
        </p>
      </div>
      <div className="container about-map-background">
        <div className="row about-and-map">
          <div className="col-12 col-lg-6">
            <div className="about-map-text-container">
              <p className="our-office">OUR OFFICES</p>
              <h1>We Are Spread All Across India</h1>
              <p style={{ color: "#444444" }}>
                Click on any location in the list to navigate our office
              </p>
            </div>
            <div className="container cities-container">
              <ul className="cities-1">
                <li>
                  <i className="fa-solid fa-location-dot"></i>Sankari
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Coimbatore
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Chennai
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Salem
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Namakkal
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Tiruppur
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Kochi
                </li>
              </ul>
              <ul className="cities-2">
                <li>
                  <i className="fa-solid fa-location-dot"></i>Mangalore
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Mumbai
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Gujarat
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Guargaon
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Puducherry
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>View More
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-5">
            <img
              src="https://crm.ktt.io:8443/website/vov/hosting/images/svg/map.png"
              className="about-map"
              alt="India Map"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
