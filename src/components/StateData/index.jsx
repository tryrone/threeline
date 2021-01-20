import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import DropDown from './DropDown';

const StateData = ({ data }) => {
  const by = [data[0]];
  const [activeState, setActiveState] = useState(by);
  const [placeValue2, setPlaceValue2] = useState(by[0].state);
  const [open2, setOpen2] = useState(false);

  const onSubmit = (id) => {
    const myState = data.filter((item) => item._id === id);
    setActiveState(myState);
  };

  return (
    <div className="stateValueCont">
      <ResponsiveContainer width={500} height={400}>
        <BarChart
          data={activeState}
          //     barSize={79}
          barCategoryGap={-10}
          barGap={10}
          layout="horizontal"
        >
          <XAxis type="category" opacity={0} />
          <YAxis hide={true} />
          <CartesianGrid
            horizontal={false}
            vertical={false}
            strokeOpacity={0}
          />

          {/* <Tooltip /> */}
          <Bar
            dataKey="confirmedCases"
            fill={'#5885AF'}
            radius={2.5}
            style={{ marginRight: 10 }}
            isAnimationActive={false}
          />

          <Bar
            dataKey="casesOnAdmission"
            fill={'#B5E5CF'}
            radius={2.5}
            isAnimationActive={false}
          />

          <Bar
            dataKey="discharged"
            fill={'#E7D2CC'}
            radius={2.5}
            isAnimationActive={false}
          />

          <Bar
            dataKey="death"
            fill={'#868B8E'}
            radius={2.5}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>

      <div className="labelsMe">
        <span style={{ fontWeight: 'bold' }}>STATE : {placeValue2}</span>
        <span className="labelCont">
          <span className="blueCircle" />
          <p> {activeState[0].confirmedCases} - Total Confirmed Cases</p>
        </span>
        <span className="labelCont">
          <span className="lightGreenCircle" />
          <p>{activeState[0].casesOnAdmission} - Cases on Admisson</p>
        </span>
        <span className="labelCont">
          <span className="lightBrownCircle" />
          <p>{activeState[0].discharged} - Discharged</p>
        </span>
        <span className="labelCont">
          <span className="DarkBrownCircle" />
          <p>{activeState[0].death} - Deaths</p>
        </span>
      </div>
      <div
        style={{ position: 'relative' }}
        onClick={() => {
          setOpen2(!open2);
        }}
      >
        <DropDown placeholder={placeValue2} />
        {open2 ? (
          <div className="dropDownCont">
            {data.map((item, i) => {
              return (
                <p
                  onClick={() => {
                    setPlaceValue2(item.state);
                    setOpen2(false);
                    //   setActiveId(item._id);
                    onSubmit(item._id);
                  }}
                  key={i + 'hdbnj'}
                  className="dropDownItem"
                >
                  {item.state}
                </p>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StateData;
