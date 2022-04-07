import React, { useEffect } from "react";

import withLayout from "../../hoc/withLayout";

import SearchForm from "../../components/SearchForm";

import { resetSearch } from "../../redux/search/actions";

import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

    dispatch(resetSearch());

  return (
    <div>
      <SearchForm />
    </div>
  );
};

export default withLayout(Home);
