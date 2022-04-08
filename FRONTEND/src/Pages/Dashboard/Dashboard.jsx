import React from "react";
import withLayout from "../../hoc/withLayout";
import { useSelector } from "react-redux";

import FiltersForm from "../../components/FiltersForm/FiltersForm";
import PropertiesListing from "../../components/PropertiesListing";

const Dashboard = () => {
  const { status, value, realProperties } = useSelector(
    (state) => state.search
  );
  const { isLoading } = useSelector((state) => state.isLoading);
  let hasError = false;
  console.log(value, realProperties);
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
              {/* {newProductFormOpen && (
                <div className="col col-12">
                  <NewProductForm
                    saveNewProduct={saveNewProduct}
                    toggleNewProductForm={toggleNewProductForm}
                  />
                </div>
              )} */}
              {!isLoading && !hasError && (
                <div className="col col-12">
                  <PropertiesListing
                  // handleDownVote={handleDownVote}
                  // handleUpVote={handleUpVote}
                  // handleSetFavorite={handleSetFavorite}
                  // handleAddToCart={handleAddToCart}
                  />
                </div>
              )}
            </div>
          </div>

          {/* <Cart
            className="col col-4"
            cartItems={cartItems}
            handleRemove={handleRemove}
            handleChange={handleChange}
          /> */}
        </div>
      </main>
    </>
  );
};

export default withLayout(Dashboard);
