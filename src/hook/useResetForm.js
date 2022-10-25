import { useForm } from "react-hook-form";


 // Estou tentando limpar os inputs, GUILHERME DO FUTURO VER A DOCUMENTAÇÃO E TENTAR RESOLVER ISSO => https://react-hook-form.com/api/useform/reset
  const { register, handleSubmit, reset ,resetField, formState: { isDirty, isValid } } = useForm({
    mode: 'onChange',
    defaultValues: inputs
  });
  



export default useResetForm 