'use server';

export const mockAction = async (formData: FormData) => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const idea = formData.get('idea');
  console.log(firstName, lastName, email, idea)
};
