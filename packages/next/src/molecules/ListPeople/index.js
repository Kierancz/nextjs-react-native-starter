import React from 'react';
import faker from 'faker';
import ListInputs from '../ListInputs';

const people = new Array(5).fill({}).map(() => {
	const name = faker.name.findName();

	return { id: faker.random.uuid(), label: name, avatar: { src: faker.image.avatar(), alt: `Avatar for ${name}` } };
});

export default function ListPeople() {
	return <ListInputs subheader="Friends" listItems={people} variant="checkbox" />;
}
