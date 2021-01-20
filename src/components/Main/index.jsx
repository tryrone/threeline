/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { allCovidData } from '../../state/covidSlice';
import StateData from '../StateData';
import TotalChart from '../TotalChart';
import Loader from 'react-loader-spinner';

const Main = ({ covidDataLoading, data, covidDataError }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allCovidData());
  }, []);

  return (
    <div className="App">
      <h1 className="pageTitle">Nigeria Covid-19 Dashboard</h1>
      {!data.states ? null : <TotalChart />}
      <div className="stateListCont">
        {!data.states ? (
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        ) : (
          <StateData data={data.states} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  covidDataLoading: state.covidData.covidDataLoading,
  covidDataError: state.covidData.covidDataError,
  data: state.covidData.data,
});

export default connect(mapStateToProps)(Main);
