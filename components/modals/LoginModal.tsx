'use client'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'
import Modal from './Modal'
import Heading from '../navbar/Heading'
import { Input } from '../Inputs/Input'
import toast from 'react-hot-toast'
import ButtonM from '../ui/ButtonM'
import { signIn } from '@/lib/actions/auth-actions'
const LoginModal = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isloading, setIsloading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsloading(true)
    try {
      // This calls the sign-up endpoint via Better Auth client
      const result = await signIn(data.email, data.password)
      if (!result.user) {
        toast.error('Something went wrong during Login')
      }
      toast.success('Login successfully!')
      loginModal.onClose()
    } catch (error) {
      toast.error('Something went wrong during Sign In')
    } finally {
      setIsloading(false)
    }
  }
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account" />
      <Input
        id="email"
        label="Email"
        disabled={isloading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="password"
        type="password"
        disabled={isloading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <ButtonM
        outline
        label="Continue with Google"
        Icon={FcGoogle}
        onClick={() => {}}
      />
      <ButtonM
        outline
        label="Continue with Github"
        Icon={AiFillGithub}
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className=" justify-center flex flex-row items-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={registerModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <Modal
      disabled={isloading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal
