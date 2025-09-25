
'use client'
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState} from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../navbar/Heading";
import { Input } from "../Inputs/Input";
import toast from "react-hot-toast";
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isloading, setIsloading] =  useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email:'',
      password:''
    }
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsloading(true);
    axios.post('/api/register', data)
    .then(()=>{
      registerModal.onClose();
    })
    .catch((error)=>{
      toast.error('Somehting When Wrong on Fetch')
    })
    .finally(()=>{
      setIsloading(false);
    })
  }
  const bodyContent =(
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an Account"/>
      <Input 
      id="email" 
      label="Email"
        disabled={isloading}
        register={register}
        errors={errors}
        required
      />
      <Input 
      id="name" 
      label="Name"
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
  return (
    <Modal 
    disabled={isloading}
    isOpen={registerModal.isOpen}
    title ="Register"
    actionLabel="Continue"
    onClose={registerModal.onClose}
    onSubmit={handleSubmit(onSubmit)}
    body={bodyContent}
    />
  )
}

export default RegisterModal
