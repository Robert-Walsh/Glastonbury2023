function PlanAct({stage, name, time, mustSee, mightSee}){
  
  const mustSeeBox = (
    <div style={{'backgroundColor': '#b8e994', 'borderRadius': '4px', 'textAlign': 'center', 'width': '15%', 'border': 'solid 1px grey', 'fontSize': '10px', 'fontWeight': 'bold', 'marginTop': '4px', 'boxShadow': '0 8px 6px -6px black'}}>
      <div style={{'padding': '4px'}}>
        Must See
      </div>
    </div>
  )

  const mightSeeBox = (
    <div style={{'backgroundColor': '#fffa65', 'borderRadius': '4px', 'textAlign': 'center', 'width': '15%', 'border': 'solid 1px grey', 'fontSize': '10px', 'fontWeight': 'bold', 'marginTop': '4px', 'boxShadow': '0 8px 6px -6px black'}}>
      <div style={{'padding': '4px'}}>
        Might See
      </div>
    </div>
  )
  
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
      {mustSee && mustSeeBox}
      {mightSee && mightSeeBox}
      <hr/>
    </div>
  )
}

export default PlanAct
