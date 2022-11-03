import { faker } from '@faker-js/faker'

const nameArray = Array.from({ length: 10000 }).map(() => faker.name.fullName())

export default nameArray
