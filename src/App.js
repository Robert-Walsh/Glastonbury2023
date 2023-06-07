import { useState, useEffect } from 'react';
import data from './data.json';
import Stage from './components/Stage';
import Act from './components/Act';
import Plan from './components/Plan';

const tabs = {
  friday: 'FRIDAY',
  saturday: 'SATURDAY',
  sunday: 'SUNDAY',
  myPlan: 'MY PLAN'
}

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs.friday)
  const [selectedActs, setSelectedActs] = useState([])


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

  const mappedFriday = data.friday.map((stage) => {
    const mappedActs = stage.acts.map((act) => {
      const selected = selectedActs.some(item => act.name === item.name)
      return (
        <Act key={act.name} stage={stage.stageName} name={act.name} time={act.time} day={'FRIDAY'} selected={selected} onClick={handleSelectAct}/>
      )
    })
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })

  const mappedSaturday = data.saturday.map((stage) => {
    const mappedActs = stage.acts.map((act) => {
      const selected = selectedActs.some(item => act.name === item.name)

      return (
        <Act key={act.name} stage={stage.stageName} name={act.name} time={act.time} day={'SATURDAY'} selected={selected} onClick={handleSelectAct}/>
      )
    })
    return (
      <Stage key={stage.stageName} stageName={stage.stageName} acts={mappedActs}/>
    )
  })

  const mappedSunday = data.sunday.map((stage) => {
    const mappedActs = stage.acts.map((act) => {
      const selected = selectedActs.some(item => act.name === item.name)

      return (
        <Act key={act.name} stage={stage.stageName} name={act.name} time={act.time} day={'SUNDAY'} selected={selected} onClick={handleSelectAct}/>
      )
    })
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

      {selectedTab === tabs.friday && mappedFriday}
      {selectedTab === tabs.saturday && mappedSaturday}
      {selectedTab === tabs.sunday && mappedSunday}
      {selectedTab === tabs.myPlan && <Plan selectedActs={selectedActs}/>}
    </div>
  );
}

export default App;
