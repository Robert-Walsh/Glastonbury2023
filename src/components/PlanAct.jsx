function PlanAct({stage, name, time}){
  return (
    <div style={{'marginLeft': '10px'}}>
      <div style={{'fontWeight':'bold'}}>
        {name}
        <a href={`https://open.spotify.com/search/artist:${name}`} target="_blank" rel="noreferrer" style={{'position': 'absolute', 'right': '0', 'margin': '15px'}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" style={{'width': '40px'}} alt="spotify"/>
        </a>
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
