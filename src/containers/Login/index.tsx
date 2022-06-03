import { FC, useEffect, memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'

import { routes } from 'routes/constants'
import { setLoggedUser } from 'core/auth'

import { Logo } from 'components/Logo'
import { Form } from 'components/FormControl/Form'
import { Input } from 'components/FormControl/Input'
import { PrimaryButton } from 'components/Button'

import { actions } from 'store/reducers/user/actions'
import { LoginModel } from 'store/reducers/user/model'
import { Resource } from 'store/types'
import { useResource } from 'store/utils'
import useNotification from 'hooks/useNotification'
import { MainWrapper } from './styled'
import { loginSchema } from './login.validation'


interface LoginParams { username: string, password: string }

const Login: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error } = useNotification()
    const { t } = useTranslation()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const userState: Resource<LoginModel> = useResource('user')
    const initialValues: LoginParams = { username: '', password: '' }

    useEffect(() => {
        const status = userState?.login?.status

        if (status === 'success' && userState?.data) {
            setIsSubmitting(false)
            setLoggedUser(userState?.data)
            navigate(routes.HOME)
            dispatch(actions.resetLoginStatus())
        }

        if (status === 'error') {
            setIsSubmitting(false)
            error(t('login.invalid_credentials'))
            dispatch(actions.resetLoginStatus())
        }

        if (status === 'pending')
            setIsSubmitting(true)


    }, [userState])

    const onSubmitLogin = (username: string, password: string) => {
        dispatch(actions.login({ username, password }))
    }

    return (
        <MainWrapper>
            <Logo />
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    onSubmitLogin(values.username, values.password)
                }}
                validationSchema={loginSchema}
                validateOnMount
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValid,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="username"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            placeholder="username"
                        />
                        <Input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="password"
                        />
                        <PrimaryButton type="submit" disabled={isSubmitting || !isValid}>
                            {t('login.submit')}
                        </PrimaryButton>
                    </Form>
                )}
            </Formik>
        </MainWrapper>
    )
}

export default memo(Login)
