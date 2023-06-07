function Act({stage, name, time, day, selected, onClick}){
  const handleClick = () => {
    onClick({name, time, stage, day})
  }

  return (
    <div onClick={handleClick} style={{'cursor': 'pointer', 'backgroundColor': selected ? '#b8e994' : '', 'margin-left': '10px'}}>
      <div style={{'fontWeight':'bold'}}>
        {name}
      </div>
      <div>
        {time}
      </div>
      <hr/>
    </div>
  )
}

export default Act
