import React from "react";
import { useSelector } from "react-redux";

import PropertieCard from "../PropertieCard";

function PropertiesListing({ ...props }) {
  const { realProperties } = useSelector((state) => state.filter);
  console.log(realProperties);

  return (
    <section className="row" {...props}>
      {realProperties.data &&
        realProperties.data.map((realPropertie) => (
          <PropertieCard
            key={realPropertie.id.toString()}
            id={realPropertie.id}
            description={realPropertie.description}
            city={realPropertie.city}
            img={realPropertie.img}
          />
        ))}
    </section>
  );
}

export default PropertiesListing;
