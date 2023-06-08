export function AddClashes(acts){
  acts = acts.map(x => {
    x.clash = false
    return x
  })

  for(var i=0; i < acts.length; i++){
    if(i === acts.length - 1){
      break;
    }

    const currentActEndTime = acts[i].time.substring(8, 13)
    const nextActStartTime = acts[i + 1].time.substring(0, 5)

    if(currentActEndTime > nextActStartTime){
      acts[i].clash = true
      acts[i + 1].clash = true
    }  
  }
} 