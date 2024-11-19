import Center from '@/components/center';
import { ContactsHeader, Input, TextArea } from '@/components/contactItem';
import HalfRow from '@/components/halfRow';
import Button from '@/components/button';
import { Mail, Phone } from 'lucide-react';
import { contacts } from '@/contacts/contacts';
import { mockAction } from '@/actions/mockAction';

const Contacts = () => {
  return (
    <>
      <Center>
        <div className="md:pt-20 flex md:justify-between flex-col md:flex-row mt-12 mb-24 ">
          <HalfRow>
            <ContactsHeader
              title="Get it touch!"
              subtitle="Have a project in mind? Looking to partner or work together? Reach out through the form and I' ll get back to you in the next 48 hours."
            />

            <div className="flex flex-row items-center p-4 gap-4">
              <Mail size="40" color="orange" />
              <p className="text-xl">
                {contacts && contacts.find((elem) => elem.icon === 'email')?.path}{' '}
              </p>
            </div>
            <div className="flex flex-row items-center p-4 gap-4 mb-6">
              <Phone size="40" color="green" />
              <p className="text-xl">
                {contacts && contacts.find((elem) => elem.icon === 'phone')?.path}{' '}
              </p>
            </div>
          </HalfRow>

          <HalfRow>
            <form action={mockAction}>
              <Input name="firstName" label="First Name" field="First Name" />
              <Input name="lastName" label="Last Name" field="Last Name" />
              <Input name="email" label="Your email" field="Your email" />
              <TextArea
                name="idea"
                label="Tell me a bit more what you are looking for?"
                field="Your Idea"
              />
              <Button>
                <p className="border-none text-xl text-white tracking-tight">
                  Submit
                </p>
              </Button>
            </form>
          </HalfRow>
        </div>
      </Center>
    </>
  );
};

export default Contacts;
