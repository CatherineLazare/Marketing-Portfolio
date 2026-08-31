export function Arrow(){return <span aria-hidden="true">↗</span>}
export function Funnel({compact=false}:{compact?:boolean}){let x=["Traffic","Lead","MQL","SQL","Opportunity","Customer"];return <div className={compact?"funnel compact":"funnel"} aria-label="Marketing and sales funnel">{x.map((s,i)=><div className="funnelStep" key={s} style={{width:`${100-i*9}%`}}><span>{s}</span>{i<x.length-1&&<i>↓</i>}</div>)}</div>}

