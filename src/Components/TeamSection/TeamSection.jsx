import React, { useState } from 'react';
import teamData from './teamData';

const TeamSection = () => {
  const [team,setTeam] = useState(teamData);
  console.log(team)
  return (
    <div className="rounded-lg bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Team</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
        </p>
         <div className="flex flex-col justify-center items-center">
            {team && team.map((member, index) => (
                <div key={index} className="w-full px-4 mb-8 md:mb-0">
                    <div className="bg-blue-100 rounded-lg shadow-md overflow-hidden m-2">
                        <div className="flex justify-center text-center">
                            <div className='flex-col pt-5 w-3/4'>
                                <img
                                    src={member.image_link || "https://via.placeholder.com/150"}
                                    alt={member.name}
                                    className="mx-auto mb-2 rounded-lg h-[70%]"
                                />
                                <h4 className="text-xl font-bold">{member.name}</h4>
                                <p className="text-gray-600 mb-2">{member.designation}</p>
                            </div>
                            <div className='flex justify-center items-center max-w-[80%]'>
                                <p className="text-gray-600">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;