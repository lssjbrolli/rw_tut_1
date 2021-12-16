import { UserInputError } from '@redwoodjs/graphql-server'
import { db } from 'src/lib/db'

const validate = (input) => {
  if (input.email && !input.email.match(/[^@]+@[^.]+\..+/)) {
    throw new UserInputError("Can't create contact without valid email.", {
      messages: {
        email: ['Email must be a valid email address.'],
      },
    })
  }
}

export const contacts = () => {
  return db.contact.findMany()
}

export const createContact = ({ input }) => {
  validate(input)
  return db.contact.create({
    data: input,
  })
}
