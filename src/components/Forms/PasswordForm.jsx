import React, {useState} from "react"
import { Area } from "./styles"
import Input from "../Input"
import CheckBox from "../CheckBox"

export default ({ state, setState, errors, touched, handleBlur, setFieldValue }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Area>
      <Input
        label='Senha'
        value={state?.password}
        onChangeText={setState('password')}
        onBlur={handleBlur('password')}
        secureTextEntry={!showPassword}
        icon={showPassword ? 'eye-slash' : 'eye'}
        action={() => setShowPassword(!showPassword)}
        error={touched?.password && !!errors?.password}
      />

      <Input
        label='Confirme a Senha'
        value={state?.confirmPassword}
        onChangeText={setState('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        secureTextEntry={!showPassword}
        icon={showPassword ? 'eye-slash' : 'eye'}
        action={() => setShowPassword(!showPassword)}
        error={touched?.confirmPassword && !!errors.confirmPassword}
      />

      <CheckBox
        value={state?.termsAccepted}
        onChange={() => setFieldValue('termsAccepted', !state?.termsAccepted)}
        errorText={errors.termsAccepted}
      />
    </Area>
  )
}