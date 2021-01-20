import React from 'react';
import { Chart } from 'react-google-charts';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

const TotalChart = ({ data }) => {
  return (
    <div style={{ margin: '20px auto' }} className="social-share-card">
      <h3 style={{ textAlign: 'center' }}>Total Figures</h3>

      <div className="TotalCont ">
        <Chart
          chartType="PieChart"
          loader={
            <div style={{ display: 'flex' }}>
              <p style={{ margin: '20px' }}>Loading Chart</p>

              <Loader type="Bars" color="#00BFFF" height={80} width={80} />
            </div>
          }
          data={[
            ['', 'Figures'],
            ['TotalSamplesTested', parseInt(data.totalSamplesTested)],
            ['TotalConfirmedCases', data.totalConfirmedCases],
            ['TotalActiveCases', data.totalActiveCases],
            ['Discharged', data.discharged],
            ['Deaths', data.death],
          ]}
          options={{
            pieSliceText: 'none',
            colors: ['#abf936', '#F99A02', '#2F69CC', '#2395FF', '#FF2626'],
            height: 360,
            width: 360,
            chartArea: {
              width: 250,
              height: 250,
            },
            title: {
              show: false,
            },
            legend: 'none',
            // Just add this option
            pieHole: 0.4,
          }}
          rootProps={{ 'data-testid': '3' }}
        />
        <div>
          <span className="labelCont">
            <span className="greenCircle" />
            <p>
              {Math.round(parseInt(data.totalSamplesTested))} - Total Sample
              Tested
            </p>
          </span>
          <span className="labelCont">
            <span className="orangeCircle" />
            <p>
              {Math.round(data.totalConfirmedCases)} - Total Confirmed Cases
            </p>
          </span>
          <span className="labelCont">
            <span className="darkBlueCircle" />
            <p>{Math.round(data.totalActiveCases)} - Total Active Cases</p>
          </span>
          <span className="labelCont">
            <span className="lightBlueCircle" />
            <p>{Math.round(data.discharged)} - Total Discharge</p>
          </span>
          <span className="labelCont">
            <span className="redCircle" />
            <p>{Math.round(data.death)} - Total Deaths</p>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.covidData.data,
});

export default connect(mapStateToProps)(TotalChart);
