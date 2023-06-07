import PlanAct from "./PlanAct"

function Plan({selectedActs}) {
  const fridayActs = selectedActs.filter(x => x.day === 'FRIDAY').sort((a, b) => a.time > b.time ? 1 : -1)
  const saturdayActs = selectedActs.filter(x => x.day === 'SATURDAY').sort((a, b) => a.time > b.time ? 1 : -1)
  const sundayActs = selectedActs.filter(x => x.day === 'SUNDAY').sort((a, b) => a.time > b.time ? 1 : -1)

  const mappedFridayActs = fridayActs.map((act) => {
    return (
      <PlanAct key={act.name} name={act.name} stage={act.stage} time={act.time}/>
    )
  })

  const mappedSaturdayActs = saturdayActs.map((act) => {
    return (
      <PlanAct key={act.name} name={act.name} stage={act.stage} time={act.time}/>
    )
  })

  const mappedSundayActs = sundayActs.map((act) => {
    return (
      <PlanAct key={act.name} name={act.name} stage={act.stage} time={act.time}/>
    )
  })


  return (
    <div>
      <div className="card" style={{'margin': '20px'}}>
        <div className="title" style={{'marginLeft': '10px'}}>Friday</div>
        {mappedFridayActs}
      </div>
      
      <div className="card" style={{'margin': '20px'}}>
        <div className="title" style={{'marginLeft': '10px'}}>Saturday</div>
        {mappedSaturdayActs}
      </div>


      <div className="card" style={{'margin': '20px'}}>
        <div className="title" style={{'marginLeft': '10px'}}>Sunday</div>
        {mappedSundayActs}
      </div>
    </div>
  )
}

export default Plan
