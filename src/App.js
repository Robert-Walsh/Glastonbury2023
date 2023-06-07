import { useState, useEffect } from 'react';
import data from './data.json';
import Stage from './components/Stage';
import Act from './components/Act';
import Plan from './components/Plan';
import React from 'react'
import Select from 'react-select'

const tabs = {
  friday: 'FRIDAY',
  saturday: 'SATURDAY',
  sunday: 'SUNDAY',
  myPlan: 'MY PLAN'
}

const stageOptions = [
  { value: 'Pyramid Stage', label: 'Pyramid Stage' },
  { value: 'Other Stage', label: 'Other Stage' },
  { value: 'West Holts Stage', label: 'West Holts Stage' },
  { value: 'Woodsies', label: 'Woodsies' },
  { value: 'The Park Stage', label: 'The Park Stage' },
  { value: 'Acoustic Stage', label: 'Acoustic Stage' },
  { value: 'Avalon Stage', label: 'Avalon Stage' },
  { value: 'Left Field', label: 'Left Field' },
  { value: 'Arcadia', label: 'Arcadia' }
]

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs.friday)
  const [selectedActs, setSelectedActs] = useState([])
  const [selectedStageFilter, setSelectedStageFilter] = useState(stageOptions)
  const [searchActsValue, setSearchActsValue] = useState("")

  useEffect(() => {
    setSelectedActs(JSON.parse(localStorage.getItem("selectedActsData")) ?? [])
  }, [])

  const handleTabClick = (day) => {
    setSelectedTab(day)
  }

  const handleSelectAct = (act) => {
    if(selectedActs.some(item => act.name === item.name)){
      setSelectedActs(selectedActs.filter(x => x.name !== act.name))
      localStorage.setItem("selectedActsData", JSON.stringify(selectedActs.filter(x => x.name !== act.name)));

    }
    else {
      setSelectedActs([...selectedActs, act])
      localStorage.setItem("selectedActsData", JSON.stringify([...selectedActs, act]));
    }
  }

  const handleStageFilterChange = (filter) => {
    setSelectedStageFilter(filter)
  }

  const handleSearchActsValueChange = (e) => {
    setSearchActsValue(e.target.value)
  }

  const mappedFriday = data.friday
    .filter((stage) => selectedStageFilter.some((filter) => filter.value === stage.stageName))
    .map((stage) => {
      const mappedActs = stage.acts
        .filter((act) => act.name.toLowerCase().includes(searchActsValue))
        .map((act) => {
          const selected = selectedActs.some(item => act.name === item.name)
          
          return (
            <Act key={act.name} stage={stage.stageName} name={act.name} time={act.time} day={'FRIDAY'} selected={selected} onClick={handleSelectAct}/>
          )
      }
    )
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })

  const mappedSaturday = data.saturday
    .filter((stage) => selectedStageFilter.some((filter) => filter.value === stage.stageName))
    .map((stage) => {
      const mappedActs = stage.acts
      .filter((act) => act.name.toLowerCase().includes(searchActsValue))
      .map((act) => {
      const selected = selectedActs.some(item => act.name === item.name)

      return (
        <Act key={act.name} stage={stage.stageName} name={act.name} time={act.time} day={'SATURDAY'} selected={selected} onClick={handleSelectAct}/>
      )
    })
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })

  const mappedSunday = data.sunday
    .filter((stage) => selectedStageFilter.some((filter) => filter.value === stage.stageName))
    .map((stage) => {
      const mappedActs = stage.acts
      .filter((act) => act.name.toLowerCase().includes(searchActsValue))
      .map((act) => {
        const selected = selectedActs.some(item => act.name === item.name)

        return (
          <Act key={act.name} stage={stage.stageName} name={act.name} time={act.time} day={'SUNDAY'} selected={selected} onClick={handleSelectAct}/>
        )
      }
    )
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })


  return (
    <div>
      <div className="tabs">
        <ul>
          <li className={selectedTab === tabs.friday && "is-active"} onClick={() => handleTabClick(tabs.friday)}><a href="/#">Friday</a></li>
          <li className={selectedTab === tabs.saturday && "is-active"} onClick={() => handleTabClick(tabs.saturday)}><a href="/#">Saturday</a></li>
          <li className={selectedTab === tabs.sunday && "is-active"} onClick={() => handleTabClick(tabs.sunday)}><a href="/#">Sunday</a></li>
          <li className={selectedTab === tabs.myPlan && "is-active"} onClick={() => handleTabClick(tabs.myPlan)}><a href="/#">My Plan</a></li>
        </ul>
      </div>

      {selectedTab !== tabs.myPlan && 
        <div style={{'margin': '20px'}}>
          <h1>Stages</h1>
          <Select 
            options={stageOptions} 
            defaultValue={stageOptions}
            value={selectedStageFilter}
            isMulti 
            classNamePrefix="stages" 
            name="stages"
            onChange={handleStageFilterChange}
          />
        </div>
      }

      {selectedTab !== tabs.myPlan && 
        <div style={{'margin': '20px'}}>
          <h1>Search Acts</h1>
          <input
            value={searchActsValue}
            onChange={handleSearchActsValueChange}
            style={{'borderColor': 'hsl(0, 0%, 70%)', 'borderRadius': '4px', 'borderStyle': 'solid', 'borderWidth': '1px'}}          
          />
        </div>
      }

      {selectedTab === tabs.friday && mappedFriday}
      {selectedTab === tabs.saturday && mappedSaturday}
      {selectedTab === tabs.sunday && mappedSunday}
      {selectedTab === tabs.myPlan && <Plan selectedActs={selectedActs}/>}
    </div>
  );
}

export default App;
