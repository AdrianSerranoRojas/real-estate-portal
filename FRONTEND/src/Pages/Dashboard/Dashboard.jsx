import React from "react";
import withLayout from "../../hoc/withLayout";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import FiltersForm from "../../components/FiltersForm/FiltersForm";
import PropertiesListing from "../../components/PropertiesListing";

const Dashboard = () => {

  const { isLoading } = useSelector((state) => state.isLoading);
  
  let hasError = false;

  return (
    <>
      <main className="container-fluid">
        <div className="row">
          <div className="col col-4">
            <FiltersForm />
          </div>
          <div className="col col-8">
            <div className="row">
              <div className="col col-12">
                <header className="jumbotron">
                  <h1 className="display-4">Real-Estate Portal</h1>
                  <p className="lead">
                    This is the best Real-Estate portal ever, you will never
                    find a better one.
                  </p>
                  <p className="font-weight-bold">Search now!</p>
                </header>
              </div>
              {isLoading && (
                <div className="col col-12">
                  <h2>Loading properties...</h2>
                </div>
              )}
              {hasError && (
                <div className="col col-12">
                  <h2>Something went wrong...</h2>
                  <pre>
                    <code>{loadingError}</code>
                  </pre>
                </div>
              )}
              {!isLoading && !hasError && (
                <div className="col col-12">
                  <PropertiesListing />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default withLayout(Dashboard);
