import { BriefcaseBusiness, LibraryBig } from 'lucide-react';

interface Where {
  title: string;
  subtitle: string;
}

interface Experience {
  where: Where;
  when: string;
  path?: string;
}

interface TypeExperience {
  type: string;
  dataExperiences: Experience[];
}

interface XPTableProps {
  experiences: TypeExperience[];
}

const XPTable = ({ experiences }: XPTableProps) => {
  return (
    <div className="flex flex-col w-full gap-6 mt-20 md:flex-row">
      {experiences.length === 0 ? (
        <p className="text-xl text-gray-500">No experiences available</p>
      ) : (
        experiences.map((item, index) => {
          if (item.type === 'education') {
            return (
              <div key={index} className="flex w-full md:w-1/2 flex-col">
                <div className="flex flex-row items-center mb-8">
                  <LibraryBig size={40} className="text-orange-500" />
                  <p className="text-4xl font-bold ml-2">Education</p>
                </div>
                <div className="mt-4">
                  {item.dataExperiences.length === 0 ? (
                    <p className="text-lg text-gray-500">
                      No education data available
                    </p>
                  ) : (
                    item.dataExperiences.map((experience, index) => (
                      <a href={experience.path} key={index}>
                        {' '}
                        <div className="mb-8 border-b border-slate-300 p-2">
                          <p className="text-xl font-semibold">
                            {experience.where.title}
                          </p>
                          <p className="text-lg text-slate-500">
                            {experience.where.subtitle}
                          </p>
                          <p className="text-sm text-gray-400">
                            {experience.when}
                          </p>
                        </div>{' '}
                      </a>
                    ))
                  )}
                </div>
              </div>
            );
          } else if (item.type === 'work') {
            return (
              <div key={index} className="flex w-full md:w-1/2 flex-col">
                <div className="flex flex-row items-center mb-8">
                  <BriefcaseBusiness size={40} className="text-blue-500" />
                  <p className="text-4xl font-bold ml-2">Work Experience</p>
                </div>
                <div className="mt-4">
                  {item.dataExperiences.length === 0 ? (
                    <p className="text-lg text-gray-500">
                      No work experience available
                    </p>
                  ) : (
                    item.dataExperiences.map((experience, index) => (
                      <a href={experience.path} key={index}>
                        <div className="mb-8 border-b border-slate-300 p-2 ">
                          <p className="text-xl font-semibold">
                            {experience.where.title}
                          </p>
                          <p className="text-lg text-slate-500">
                            {experience.where.subtitle}
                          </p>
                          <p className="text-sm text-gray-400">
                            {experience.when}
                          </p>
                        </div>{' '}
                      </a>
                    ))
                  )}
                </div>
              </div>
            );
          }
        })
      )}
    </div>
  );
};

export default XPTable;
