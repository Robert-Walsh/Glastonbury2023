import { useState, useEffect } from 'react';
import data2 from './data2.json';
import Stage from './components/Stage';
import Act from './components/Act';
import Plan from './components/Plan';
import React from 'react'
import Select from 'react-select'

const tabs = {
  wednesday: 'WEDNESDAY',
  thursday: 'THURSDAY',
  friday: 'FRIDAY',
  saturday: 'SATURDAY',
  sunday: 'SUNDAY',
  myPlan: 'MY PLAN'
}

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs.myPlan)
  const [selectedActs, setSelectedActs] = useState([])
  const [stageOptions, setStageOptions] = useState([])
  const [selectedStageFilter, setSelectedStageFilter] = useState([])
  const [searchActsValue, setSearchActsValue] = useState("")

  useEffect(() => {
    setSelectedActs(JSON.parse(localStorage.getItem("selectedActsData")) ?? [])
    let newStageOptions = []

    const data = data2.friday
    for(var i=0; i<data.length;i++){
      newStageOptions.push({value: data[i].stageName.toUpperCase(), label: data[i].stageName.toUpperCase()})
    }
    
    setStageOptions(newStageOptions)
    setSelectedStageFilter(newStageOptions)
  }, [])

  const handleTabClick = (day, data) => {
    setSelectedTab(day)

    if(day !== tabs.myPlan){
      let newStageOptions = []

      for(var i=0; i<data.length;i++){
        newStageOptions.push({value: data[i].stageName.toUpperCase(), label: data[i].stageName.toUpperCase()})
      }

      setStageOptions(newStageOptions)
      setSelectedStageFilter(newStageOptions)
    }
  }

  const handleSelectAct = (act) => {
    if(selectedActs.some(item => act.name === item.name)){
      
      if(act.mustSee === true){
        act.mightSee = true
        act.mustSee = false

        const filtered = selectedActs.filter(x => x.name !== act.name)
        setSelectedActs([...filtered, act])

        localStorage.setItem("selectedActsData", JSON.stringify([...filtered, act]));
      }
      else{
        act.mightSee = false
        act.mustSee = false
        setSelectedActs(selectedActs.filter(x => x.name !== act.name))
        localStorage.setItem("selectedActsData", JSON.stringify(selectedActs.filter(x => x.name !== act.name)));
      }
    }
    else {
      act.mustSee = true
      act.mightSee = false

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

  const mappedWednesday = data2.wednesday
    .filter((stage) => selectedStageFilter.some((filter) => filter.value.toUpperCase() === stage.stageName.toUpperCase()))
    .map((stage) => {
      const mappedActs = stage.acts
        .filter((act) => act.name.toLowerCase().includes(searchActsValue.toLowerCase()))
        .sort((a, b) => a.time > b.time ? 1 : -1)
        .map((act) => {
          const selectedValue = selectedActs.find(item => act.name === item.name)
          
          return (
            <Act key={`${act.name} ${act.time}`} stage={stage.stageName} name={act.name} time={act.time} day={'WEDNESDAY'} mustSee={selectedValue?.mustSee} mightSee={selectedValue?.mightSee} onClick={handleSelectAct}/>
          )
      }
    )
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })

  const mappedThursday = data2.thursday
    .filter((stage) => selectedStageFilter.some((filter) => filter.value.toUpperCase() === stage.stageName.toUpperCase()))
    .map((stage) => {
      const mappedActs = stage.acts
        .filter((act) => act.name.toLowerCase().includes(searchActsValue.toLowerCase()))
        .sort((a, b) => a.time > b.time ? 1 : -1)
        .map((act) => {
          const selectedValue = selectedActs.find(item => act.name === item.name)
          
          return (
            <Act key={`${act.name} ${act.time}`} stage={stage.stageName} name={act.name} time={act.time} day={'THURSDAY'} mustSee={selectedValue?.mustSee} mightSee={selectedValue?.mightSee} onClick={handleSelectAct}/>
          )
      }
    )
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })


  const mappedFriday = data2.friday
    .filter((stage) => selectedStageFilter.some((filter) => filter.value.toUpperCase() === stage.stageName.toUpperCase()))
    .map((stage) => {
      const mappedActs = stage.acts
        .filter((act) => act.name.toLowerCase().includes(searchActsValue.toLowerCase()))
        .sort((a, b) => a.time > b.time ? 1 : -1)
        .map((act) => {
          const selectedValue = selectedActs.find(item => act.name === item.name)
          
          return (
            <Act key={`${act.name} ${act.time}`} stage={stage.stageName} name={act.name} time={act.time} day={'FRIDAY'} mustSee={selectedValue?.mustSee} mightSee={selectedValue?.mightSee} onClick={handleSelectAct}/>
          )
      }
    )
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })

  const mappedSaturday = data2.saturday
    .filter((stage) => selectedStageFilter.some((filter) => filter.value.toUpperCase() === stage.stageName.toUpperCase()))
    .map((stage) => {
      const mappedActs = stage.acts
      .filter((act) => act.name.toLowerCase().includes(searchActsValue.toLowerCase()))
      .sort((a, b) => a.time > b.time ? 1 : -1)
      .map((act) => {
        const selectedValue = selectedActs.find(item => act.name === item.name)

      return (
        <Act key={`${act.name} ${act.time}`} stage={stage.stageName} name={act.name} time={act.time} day={'SATURDAY'} mustSee={selectedValue?.mustSee} mightSee={selectedValue?.mightSee} onClick={handleSelectAct}/>
      )
    })
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })

  const mappedSunday = data2.sunday
    .filter((stage) => selectedStageFilter.some((filter) => filter.value.toUpperCase() === stage.stageName.toUpperCase()))
    .map((stage) => {
      const mappedActs = stage.acts
      .filter((act) => act.name.toLowerCase().includes(searchActsValue.toLowerCase()))
      .sort((a, b) => a.time > b.time ? 1 : -1)
      .map((act) => {
        const selectedValue = selectedActs.find(item => act.name === item.name)

        return (
          <Act key={`${act.name} ${act.time}`} stage={stage.stageName} name={act.name} time={act.time} day={'SUNDAY'} mustSee={selectedValue?.mustSee} mightSee={selectedValue?.mightSee} onClick={handleSelectAct}/>
        )
      }
    )
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })

  console.log('stageOptions:', stageOptions)
  return (
    <div>
      <div className="tabs">
        <ul>          
          <li className={selectedTab === tabs.myPlan && "is-active"} onClick={() => handleTabClick(tabs.myPlan)}><a href="/#">My Plan</a></li>
          <li className={selectedTab === tabs.wednesday && "is-active"} onClick={() => handleTabClick(tabs.wednesday, data2.wednesday)}><a href="/#">Wednesday</a></li>
          <li className={selectedTab === tabs.thursday && "is-active"} onClick={() => handleTabClick(tabs.thursday, data2.thursday)}><a href="/#">Thursday</a></li>
          <li className={selectedTab === tabs.friday && "is-active"} onClick={() => handleTabClick(tabs.friday, data2.friday)}><a href="/#">Friday</a></li>
          <li className={selectedTab === tabs.saturday && "is-active"} onClick={() => handleTabClick(tabs.saturday, data2.saturday)}><a href="/#">Saturday</a></li>
          <li className={selectedTab === tabs.sunday && "is-active"} onClick={() => handleTabClick(tabs.sunday, data2.sunday)}><a href="/#">Sunday</a></li>
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
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                height: '100px', 
                overflow: 'scroll'
              })
            }}
            menuPortalTarget={document.querySelector('body')}
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


      {selectedTab === tabs.wednesday && mappedWednesday}
      {selectedTab === tabs.thursday && mappedThursday}
      {selectedTab === tabs.friday && mappedFriday}
      {selectedTab === tabs.saturday && mappedSaturday}
      {selectedTab === tabs.sunday && mappedSunday}
      {selectedTab === tabs.myPlan && <Plan selectedActs={selectedActs}/>}
    </div>
  );
}

export default App;
