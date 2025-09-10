import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";

const Register = () => {
  return (
    <div>
      <EmailInput />
      <PasswordInput
        id="input-password"
        placeholder="Password"
        name="password"
      />
      <PasswordInput
        id="confirm-password"
        placeholder="Confirm password"
        name="confirm-password"
      />
    </div>
  );
};

export default Register;
