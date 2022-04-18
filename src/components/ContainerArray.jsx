import React from 'react'



const ContainerArray = ({ people, title, handleSeen}) => {
     
    return (
			<>
				<p className='title-container'>{title}</p>
				<div>
					{people.map((person) => (
						<div className='container-array' key={person.id}>
							<img src={person.img} alt='img' className='celebrants-img' />
							<div>
								<h4 className='celebrants-name'>{person.name}</h4>
								<p className='celebrants-age'>{person.age}</p>
								<div>
									<button
										onClick={() => handleSeen(person.id)}
										className='celebrants-delete'>
										Viewed
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</>
		);
}

export default ContainerArray
