import Button from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";

export const FormUI = ({
  email,
  password,
  handleInputChange,
  handleSubmit,
}:any) => {
  return (
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-4xl  font-bold sm:text-3xl">LOGIN</h1>
        </div>
        <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input
            value={email}
            name="email"
            onChange={handleInputChange}
              label="Enter your e-mail"
              type="email"
              placeholder="e.g johndoe@gmail.com"
            />
          </div>
          <div>
            <Input
              name="password"
              value={password}
              onChange={handleInputChange}
              label="Enter your password"
              type="password"
              placeholder="e.g ********"
            />
          </div>

          <div className="flex items-center justify-end">
          
            <p className="text-lg text-primary font-medium ">Forgot password?</p>
          </div>
          <Button label="Login" className="w-full inline-block rounded-xl" type="submit" />
        </form>
      </div>      
    
  );
};
