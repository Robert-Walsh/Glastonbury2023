import PlanAct from "./PlanAct"
import { AddClashes } from '../services/addClashes'

function Plan({selectedActs}) {
  const wednesdayActs = selectedActs.filter(x => x.day === 'WEDNESDAY').sort((a, b) => a.time > b.time ? 1 : -1)
  const thursdayActs = selectedActs.filter(x => x.day === 'THURSDAY').sort((a, b) => a.time > b.time ? 1 : -1)
  const fridayActs = selectedActs.filter(x => x.day === 'FRIDAY').sort((a, b) => a.time > b.time ? 1 : -1)
  const saturdayActs = selectedActs.filter(x => x.day === 'SATURDAY').sort((a, b) => a.time > b.time ? 1 : -1)
  const sundayActs = selectedActs.filter(x => x.day === 'SUNDAY').sort((a, b) => a.time > b.time ? 1 : -1)

  AddClashes(wednesdayActs)
  AddClashes(thursdayActs)
  AddClashes(fridayActs)
  AddClashes(saturdayActs)
  AddClashes(sundayActs)

  const mappedWednesdayActs = wednesdayActs.map((act) => {
    return (
      <PlanAct key={act.name} name={act.name} stage={act.stage} time={act.time} mustSee={act.mustSee} mightSee={act.mightSee} clash={act.clash}/>
    )
  })

  const mappedThursdayActs = thursdayActs.map((act) => {
    return (
      <PlanAct key={act.name} name={act.name} stage={act.stage} time={act.time} mustSee={act.mustSee} mightSee={act.mightSee} clash={act.clash}/>
    )
  })

  const mappedFridayActs = fridayActs.map((act) => {
    return (
      <PlanAct key={act.name} name={act.name} stage={act.stage} time={act.time} mustSee={act.mustSee} mightSee={act.mightSee} clash={act.clash}/>
    )
  })

  const mappedSaturdayActs = saturdayActs.map((act) => {
    return (
      <PlanAct key={act.name} name={act.name} stage={act.stage} time={act.time} mustSee={act.mustSee} mightSee={act.mightSee} clash={act.clash}/>
    )
  })

  const mappedSundayActs = sundayActs.map((act) => {
    return (
      <PlanAct key={act.name} name={act.name} stage={act.stage} time={act.time} mustSee={act.mustSee} mightSee={act.mightSee} clash={act.clash}/>
    )
  })


  return (
    <div>
      <div className="card" style={{'margin': '20px'}}>
        <div className="title" style={{'paddingTop': '25px', 'textAlign': 'center'}}>Wednesday</div>
        <hr/>

        {mappedWednesdayActs}
      </div>

      <div className="card" style={{'margin': '20px'}}>
        <div className="title" style={{'paddingTop': '25px', 'textAlign': 'center'}}>Thursday</div>
        <hr/>

        {mappedThursdayActs}
      </div>


      <div className="card" style={{'margin': '20px'}}>
        <div className="title" style={{'paddingTop': '25px', 'textAlign': 'center'}}>Friday</div>
        <hr/>

        {mappedFridayActs}
      </div>
      
      <div className="card" style={{'margin': '20px'}}>
        <div className="title" style={{'paddingTop': '25px', 'textAlign': 'center'}}>Saturday</div>
        <hr/>

        {mappedSaturdayActs}
      </div>


      <div className="card" style={{'margin': '20px'}}>
        <div className="title" style={{'paddingTop': '25px', 'textAlign': 'center'}}>Sunday</div>
        <hr/>

        {mappedSundayActs}
      </div>
    </div>
  )
}

export default Plan
