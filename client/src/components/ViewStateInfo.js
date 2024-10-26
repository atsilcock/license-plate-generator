import React from 'react'

function ViewStateInfo() {
    const stateInfo = [
        {
            state: "Alabama",
            info: "In Alabama, drivers must have a valid state driver’s license, and new residents must obtain one within 30 days of moving. Vehicles must be registered and inspected for safety and emissions if applicable, depending on the county. Alabama requires liability insurance with minimum coverage of $25,000 for bodily injury per person and $50,000 per accident. The state mandates that children under 6 years old be secured in a child safety seat, and seat belts are required for all passengers in the front seat."
        },
        {
            state: "Alaska",
            info: "Alaska requires drivers to hold a valid Alaska driver’s license, with new residents given 90 days to obtain one. Vehicle registration must be maintained, and proof of insurance is required. Alaska mandates minimum liability insurance of $50,000 per person and $100,000 per accident. Children under 8 must be secured in an appropriate child safety seat, and the use of seat belts is mandatory for all passengers."
        },
        {
            state: "Arizona",
            info: "In Arizona, drivers must carry a valid state driver’s license, and new residents must obtain one within 10 days. Vehicle registration is required annually, and emissions testing is mandated in certain areas such as Phoenix and Tucson. Proof of insurance is required, with minimum liability coverage of $25,000 per person and $50,000 per accident. Arizona law mandates seat belt use for all passengers in the front seat, and children under 8 must be in a car seat or booster."
        },
        {
            state: "Arkansas",
            info: "Drivers in Arkansas must have a valid state driver’s license, and new residents must obtain one within 30 days of moving. Vehicles must be registered annually, and proof of liability insurance is mandatory. Arkansas requires minimum liability coverage of $25,000 for injury or death of one person and $50,000 for two or more persons in an accident. The state requires child safety seats for children under 6 years old or under 60 pounds, and seat belts are required for all front-seat passengers."
        },
        {
            state: "Colorado",
            info: "In Colorado, drivers must have a valid Colorado driver’s license, with new residents needing to obtain one within 30 days. Vehicle registration must be renewed annually, and proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Certain counties require emissions testing for vehicles. Colorado law mandates that children under 8 be secured in a child safety seat, and all passengers must wear seat belts."
        },
        {
            state: "Connecticut",
            info: "Connecticut drivers must hold a valid Connecticut driver’s license, and new residents must obtain one within 30 days. Vehicle registration is required, and vehicles must pass an emissions test every two years. Minimum liability insurance coverage of $25,000 per person and $50,000 per accident is required. Connecticut law requires children under 7 years old or under 60 pounds to be in a child safety seat, and seat belts are mandatory for all passengers."
        },
        {
            state: "Delaware",
            info: "In Delaware, drivers must have a valid state driver’s license, and new residents have 60 days to obtain one. Vehicle registration is required annually, and vehicles must pass an emissions test and safety inspection. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old or under 65 pounds must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Georgia",
            info: "Georgia requires drivers to hold a valid state driver’s license, with new residents needing to obtain one within 30 days. Vehicles must be registered annually, and emissions testing is required in certain counties. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Georgia law mandates that children under 8 must be in a child safety seat, and seat belts are required for all front-seat passengers."
        },
        {
            state: "Hawaii",
            info: "In Hawaii, drivers must have a valid Hawaii driver’s license, and new residents must obtain one within 30 days. Vehicle registration is required annually, and a safety inspection is also mandatory. Proof of insurance is required, with minimum liability coverage of $20,000 per person and $40,000 per accident. Hawaii law mandates that children under 4 must be in a child safety seat, and all passengers are required to wear seat belts."
        },
        {
            state: "Idaho",
            info: "Idaho drivers must hold a valid Idaho driver’s license, with new residents required to obtain one within 90 days. Vehicle registration must be maintained, and proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Idaho does not require emissions testing, but safety equipment is mandatory for certain vehicles. Children under 8 must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Illinois",
            info: "In Illinois, drivers must have a valid state driver’s license, and new residents have 90 days to obtain one. Vehicle registration is required annually, and an emissions test may be required in certain areas. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Illinois law mandates that children under 8 years old must be secured in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Indiana",
            info: "Indiana requires drivers to hold a valid state driver’s license, and new residents must obtain one within 60 days. Vehicle registration is required annually, and proof of insurance is mandatory. Minimum liability insurance coverage of $25,000 per person and $50,000 per accident is required. Children under 8 must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Iowa",
            info: "In Iowa, drivers must have a valid Iowa driver’s license, and new residents have 30 days to obtain one. Vehicles must be registered annually, and proof of insurance is required, with minimum liability coverage of $20,000 per person and $40,000 per accident. Iowa does not require emissions testing for vehicles, but safety inspections may be needed for certain types of vehicles. Children under 6 years old must be in a child safety seat, and seat belts are mandatory for all front-seat passengers."
        },
        {
            state: "Kansas",
            info: "Kansas drivers must carry a valid Kansas driver’s license, with new residents required to obtain one within 90 days. Vehicles must be registered annually, and proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Kansas does not require emissions testing, but safety inspections may be necessary for certain vehicles. Children under 8 years old must be in a child safety seat unless they weigh more than 80 pounds or are taller than 4’9”."
        },
        {
            state: "Kentucky",
            info: "In Kentucky, drivers must have a valid Kentucky driver’s license, and new residents have 30 days to obtain one. Vehicle registration must be renewed annually, and proof of insurance is mandatory. Kentucky requires minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 must be in a child safety seat, and seat belts are required for all passengers in the vehicle."
        },
        {
            state: "Louisiana",
            info: "Louisiana requires drivers to have a valid state driver’s license, and new residents must obtain one within 30 days. Vehicles must be registered annually, and emissions testing may be required in certain areas. Proof of insurance is mandatory, with minimum liability coverage of $15,000 per person and $30,000 per accident. Louisiana mandates that children under 6 years old or under 60 pounds be secured in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Maine",
            info: "In Maine, drivers must carry a valid state driver’s license, with new residents having 30 days to obtain one. Vehicles must be registered annually, and proof of insurance is required. Maine requires minimum liability coverage of $50,000 per person and $100,000 per accident. Children under 8 years old or weighing less than 80 pounds must be in a child safety seat, and seat belts are mandatory for all passengers in the vehicle."
        },
        {
            state: "Maryland",
            info: "Maryland drivers must hold a valid Maryland driver’s license, and new residents have 60 days to obtain one. Vehicle registration is required, and emissions testing is mandatory in some areas. Proof of insurance is required, with minimum liability coverage of $30,000 per person and $60,000 per accident. Maryland law mandates that children under 8 years old be secured in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Massachusetts",
            info: "Massachusetts requires drivers to hold a valid state driver’s license, with new residents needing to obtain one within 30 days. Vehicles must be registered annually, and emissions testing is required. Proof of insurance is mandatory, with minimum liability coverage of $20,000 per person and $40,000 per accident. Massachusetts law mandates that children under 8 years old or under 57 inches tall must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Michigan",
            info: "In Michigan, drivers must carry a valid state driver’s license, and new residents have 30 days to obtain one. Vehicle registration is required annually, and proof of insurance is mandatory. Michigan requires minimum liability coverage of $50,000 per person and $100,000 per accident. Children under 8 must be in a child safety seat unless they are taller than 4’9”, and seat belts are mandatory for all front-seat passengers."
        },
        {
            state: "Minnesota",
            info: "Minnesota drivers must hold a valid Minnesota driver’s license, with new residents required to obtain one within 60 days. Vehicles must be registered annually, and proof of insurance is mandatory. Minimum liability coverage of $30,000 per person and $60,000 per accident is required. Children under 8 must be in a child safety seat unless they are taller than 4’9”, and seat belts are required for all passengers."
        },
        {
            state: "Mississippi",
            info: "In Mississippi, drivers must have a valid Mississippi driver’s license, and new residents have 60 days to obtain one. Vehicle registration is required annually, and proof of insurance is mandatory. Mississippi requires minimum liability coverage of $25,000 per person and $50,000 per accident. The state mandates that children under 7 years old must be in a child safety seat, and seat belts are required for all front-seat passengers."
        },
        {
            state: "Missouri",
            info: "Missouri requires drivers to hold a valid state driver’s license, and new residents must obtain one within 30 days. Vehicle registration must be renewed annually, and emissions testing is required in certain areas. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Missouri law mandates that children under 8 years old be secured in a child safety seat unless they weigh more than 80 pounds or are taller than 4’9”."
        },
        {
            state: "Montana",
            info: "Montana drivers must carry a valid state driver’s license, with new residents needing to obtain one within 60 days. Vehicle registration is required, and proof of insurance is mandatory. Montana requires minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 6 years old or under 60 pounds must be in a child safety seat, and seat belts are mandatory for all passengers."
        },
        {
            state: "Nebraska",
            info: "In Nebraska, drivers must have a valid state driver’s license, and new residents have 30 days to obtain one. Vehicles must be registered annually, and proof of insurance is mandatory. Nebraska requires minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old must be secured in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Nevada",
            info: "Nevada requires drivers to hold a valid state driver’s license, with new residents needing to obtain one within 30 days. Vehicles must be registered annually, and emissions testing is required in certain areas. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Nevada mandates that children under 6 years old or under 60 pounds must be in a child safety seat, and seat belts are required for all passengers."
        }
    ];
    stateInfo.push(
        {
            state: "New Hampshire",
            info: "In New Hampshire, drivers must carry a valid driver’s license, though the state does not mandate that all residents have one unless they are operating a vehicle. New residents have 60 days to obtain a New Hampshire license. Vehicle registration is required, but there is no state-mandated emissions or safety inspection except in certain counties. New Hampshire does not require vehicle insurance unless drivers are involved in certain offenses, but liability insurance is strongly recommended. Children under 7 years old must be in a child safety seat, and seat belts are required for passengers under 18."
        },
        {
            state: "New Jersey",
            info: "In New Jersey, drivers must hold a valid state driver’s license, with new residents required to obtain one within 60 days. Vehicle registration must be renewed annually, and emissions testing is required for most vehicles. Proof of insurance is mandatory, with minimum liability coverage of $15,000 per person and $30,000 per accident. New Jersey mandates that children under 8 years old and less than 57 inches tall be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "New Mexico",
            info: "New Mexico requires drivers to carry a valid driver’s license, and new residents must obtain one within 30 days. Vehicles must be registered annually, and emissions testing is required in certain counties. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 7 years old or less than 60 pounds must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "New York",
            info: "In New York, drivers must have a valid state driver’s license, and new residents have 30 days to obtain one. Vehicles must be registered and inspected annually, with emissions testing required. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. New York law requires children under 8 years old to be in a child safety seat, and seat belts are mandatory for all passengers."
        },
        {
            state: "North Carolina",
            info: "North Carolina drivers must hold a valid state driver’s license, and new residents must obtain one within 60 days. Vehicle registration must be renewed annually, and emissions testing is required in certain areas. Proof of insurance is mandatory, with minimum liability coverage of $30,000 per person and $60,000 per accident. Children under 8 years old must be secured in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "North Dakota",
            info: "In North Dakota, drivers must carry a valid state driver’s license, and new residents have 90 days to obtain one. Vehicle registration is required annually, and proof of insurance is mandatory. North Dakota requires minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old or less than 4’9” must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Ohio",
            info: "Ohio requires drivers to hold a valid Ohio driver’s license, with new residents needing to obtain one within 30 days. Vehicles must be registered annually, and emissions testing is required in certain counties. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old must be in a child safety seat unless they are taller than 4’9”, and seat belts are required for all front-seat passengers."
        },
        {
            state: "Oklahoma",
            info: "Oklahoma drivers must carry a valid state driver’s license, and new residents have 30 days to obtain one. Vehicles must be registered annually, and proof of insurance is required. Minimum liability coverage of $25,000 per person and $50,000 per accident is mandatory. Oklahoma mandates that children under 8 years old or under 4’9” tall be secured in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Oregon",
            info: "In Oregon, drivers must hold a valid state driver’s license, and new residents must obtain one within 30 days. Vehicles must be registered annually, and emissions testing is required in certain areas. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Oregon law requires children under 8 years old to be in a child safety seat, and seat belts are mandatory for all passengers."
        },
        {
            state: "Pennsylvania",
            info: "Pennsylvania requires drivers to carry a valid state driver’s license, and new residents have 60 days to obtain one. Vehicles must be registered annually, and emissions testing is required in certain counties. Proof of insurance is mandatory, with minimum liability coverage of $15,000 per person and $30,000 per accident. Children under 8 years old or under 4’9” tall must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Rhode Island",
            info: "In Rhode Island, drivers must hold a valid state driver’s license, and new residents have 30 days to obtain one. Vehicle registration must be renewed annually, and proof of insurance is required. Rhode Island mandates minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old or shorter than 4’9” must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "South Carolina",
            info: "South Carolina drivers must have a valid state driver’s license, with new residents required to obtain one within 90 days. Vehicle registration must be renewed annually, and proof of insurance is required. South Carolina mandates minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old must be secured in a child safety seat, and seat belts are mandatory for all passengers."
        },
        {
            state: "South Dakota",
            info: "South Dakota requires drivers to hold a valid state driver’s license, and new residents have 90 days to obtain one. Vehicle registration is required annually, and proof of insurance is mandatory. Minimum liability coverage of $25,000 per person and $50,000 per accident is required. Children under 5 years old or under 40 pounds must be in a child safety seat, and seat belts are mandatory for front-seat passengers."
        },
        {
            state: "Tennessee",
            info: "In Tennessee, drivers must carry a valid state driver’s license, and new residents have 30 days to obtain one. Vehicles must be registered annually, and proof of insurance is required. Tennessee mandates minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old must be secured in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Texas",
            info: "Texas drivers must have a valid state driver’s license, with new residents required to obtain one within 90 days. Vehicles must be registered annually, and emissions testing is required in certain counties. Proof of insurance is mandatory, with minimum liability coverage of $30,000 per person and $60,000 per accident. Children under 8 years old or under 4’9” tall must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Utah",
            info: "In Utah, drivers must carry a valid state driver’s license, and new residents have 60 days to obtain one. Vehicles must be registered annually, and emissions testing is required in certain counties. Proof of insurance is required, with minimum liability coverage of $25,000 per person and $65,000 per accident. Utah mandates that children under 8 years old be secured in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Vermont",
            info: "Vermont requires drivers to hold a valid state driver’s license, and new residents must obtain one within 60 days. Vehicle registration must be renewed annually, and emissions testing is required for vehicles older than 15 years. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old must be in a child safety seat, and seat belts are mandatory for all passengers."
        },
        {
            state: "Virginia",
            info: "Virginia drivers must carry a valid state driver’s license, with new residents required to obtain one within 60 days. Vehicles must be registered annually, and emissions testing is required in certain counties. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Washington",
            info: "In Washington, drivers must carry a valid state driver’s license, and new residents have 30 days to obtain one. Vehicles must be registered annually, and emissions testing is required in certain counties. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old or under 4’9” must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "West Virginia",
            info: "West Virginia drivers must have a valid state driver’s license, with new residents needing to obtain one within 30 days. Vehicles must be registered annually, and emissions testing is required in certain areas. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old or under 4’9” must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Wisconsin",
            info: "In Wisconsin, drivers must carry a valid Wisconsin driver’s license, and new residents have 60 days to obtain one. Vehicle registration must be renewed annually, and emissions testing is required in some areas. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Wisconsin law requires children under 8 years old or under 4’9” tall to be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Wyoming",
            info: "Wyoming drivers must hold a valid state driver’s license, with new residents required to obtain one within 12 months. Vehicle registration is required annually, and proof of insurance is mandatory. Wyoming mandates minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 9 years old or under 80 pounds must be in a child safety seat, and seat belts are mandatory for all passengers."
        },
        {
            state: "Washington, D.C.",
            info: "In Washington, D.C., drivers must carry a valid D.C. driver’s license, with new residents required to obtain one within 30 days. Vehicle registration must be renewed annually, and emissions testing is required for all vehicles. Proof of insurance is mandatory, with minimum liability coverage of $25,000 per person and $50,000 per accident. Children under 8 years old or under 4’9” must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Guam",
            info: "In Guam, drivers must hold a valid Guam driver’s license, and new residents have 30 days to obtain one. Vehicles must be registered annually, and proof of insurance is required. Guam mandates minimum liability coverage of $20,000 per person and $40,000 per accident. Children under 8 years old must be in a child safety seat, and seat belts are required for all passengers."
        },
        {
            state: "Puerto Rico",
            info: "Drivers in Puerto Rico must have a valid Puerto Rico driver’s license, with new residents having 30 days to obtain one. Vehicle registration is required annually, and proof of insurance is mandatory. Puerto Rico mandates minimum liability coverage of $10,000 per person and $20,000 per accident. Children under 4 years old must be secured in a child safety seat, and seat belts are mandatory for all passengers."
        }
    );
    return (
        <div>
            {stateInfo.map((state, index) => (
                <div key={index} className="state-info-box bg-gray-200 p-4 mb-4">
                    <h2 className="text-xl font-bold mb-2">{state.state}</h2>
                    <p className="mt-4 mb-7">{state.info}</p>
                </div>
            ))}
        </div>
    )
}

export default ViewStateInfo
