function PlanAct({stage, name, time}){
  return (
    <div style={{'margin-left': '10px'}}>
      <div style={{'fontWeight':'bold'}}>
        {name}
      </div>
      <div>
        {stage}
      </div>
      <div>
        {time}
      </div>
      <hr/>
    </div>
  )
}

export default PlanAct
