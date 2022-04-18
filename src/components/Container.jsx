import React from 'react'
import {data} from '../data'
import ContainerArray from './ContainerArray'

const Container = () => {
    const [people, setPeople] = React.useState(data)

   const handleSeen = (id) => {
			const newSeen = people.filter((person) => person.id !== id);
			setPeople(newSeen);
		};
    
    return (
			<div className='container'>
				<ContainerArray people={people} title='5 Birthdays Today' handleSeen={handleSeen} />
				<div className='container-btn'>
					<button onClick={() => setPeople([])} className='btn-celebrants'>
						Clear All
					</button>
				</div>
			</div>
		);
}

export default Container

