import React from 'react'
type CountPropsType = {
    text: string,
    count: number
}
function Count({ text, count } : CountPropsType) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

export default React.memo(Count) 