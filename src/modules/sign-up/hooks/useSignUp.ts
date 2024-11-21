import { apiRequest } from "@/utils/utils";

export const useSignUp = () => {
  const handleSignUp = async (data: Record<string, unknown>) => {
    try {
      const foundUser = await apiRequest("/api/db/users/check-user", "POST", {
        data: { email: data.email },
      });

      if (foundUser.data) {
        console.log("El usuario ya existe");
        return;
      }

      await apiRequest("/api/db/users/create-user", "POST", {
        data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { handleSignUp };
};
