import NextLink from 'next/link'

import * as S from './form-sign-in.styles'
import { EmailIcon, LockIcon } from './icons'
import { FormLink, FormWrapper } from 'components/Form'
import { TextField } from 'components/TextField'
import { Button } from 'components/Button'

export const FormSignIn = () => (
  <FormWrapper>
    <form>
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
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth type="submit">
        Sign in now
      </Button>

      <FormLink>
        Don’t have an account?{' '}
        <NextLink href="/sign-up">
          <a>Sign up</a>
        </NextLink>
      </FormLink>
    </form>
  </FormWrapper>
)
