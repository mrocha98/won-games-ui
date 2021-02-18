import NextLink from 'next/link'

import { AccountCircleIcon, EmailIcon, LockIcon } from './icons'
import { FormLink, FormWrapper } from 'components/Form'
import { TextField } from 'components/TextField'
import { Button } from 'components/Button'

export const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="text"
        icon={<AccountCircleIcon />}
      />
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<EmailIcon />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<LockIcon />}
      />
      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<LockIcon />}
      />

      <Button size="large" fullWidth type="submit">
        Sign up now
      </Button>

      <FormLink>
        Already have an account?{' '}
        <NextLink href="/sign-in">
          <a>Sign In</a>
        </NextLink>
      </FormLink>
    </form>
  </FormWrapper>
)
