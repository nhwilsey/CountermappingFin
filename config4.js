// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 7;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 57;

// Value used to drive
var driveTime = driveSlides * driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = false;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 29;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/nhwilsey/clpj7127600d901p87v4zdz2b',
    // Doesn't work: mapbox://styles/nhwilsey/clp74ib2p012w01nsfsst5rs9
    // style: 'mapbox://styles/mapbox/satellite-v8',
    // style: 'mapbox://styles/mapbox/outdoors-v10',
    accessToken: 'pk.eyJ1Ijoibmh3aWxzZXkiLCJhIjoiY2w0aTNkY3VvMGN6NjNrcDQyMDdtdHRwZiJ9.JG2G3sTiYPhrzeVg4HKOmQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Reality of Reliability',
    subtitle: 'Understanding Unequal Transportation in San Francisco',
    byline: 'By Nicholas, Lillian, & Marina',
    para1: "The evolution of neighborhoods and transportation has been profoundly influenced by advancements in connectivity. During the 1960s, a booming economy and the housing benefits of the G.I. Bill played pivotal roles in transforming the urban and suburban landscape. The construction of interstate highways became a driving force, fostering increased accessibility between urban and suburban areas and prompting a widespread shift towards suburban living. Simultaneously, the growth of trolleys and public transit helped further fuel suburban expansion as people were drawn to the flexibility of car travel and the appeal of suburban living. Nowadays, people rely on transportation to have access to their jobs, education, medical services, religious institutions, necessities, entertainment, and loved ones. Greater access to these services creates greater economic opportunities for people in disadvantaged communities. In many places, public transportation may be the only source of mobility that is available, forcing communities to rely on services to go to work, school, or other places. Public transit systems are extremely personal to communities. They are also essential to the movement of cities.",
    para2: "The city of San Francisco provides various forms of public transportation such as the Bay Area Rapid Transit (BART), Municipal Railway (MUNI), cable cars, and more. In 2021, the use of public transportation as a primary mode of transportation was 11% in San Francisco. 36% of surveyors drove alone in privately owned vehicles while only 3% cycled. Almost 827,000 people - nearly all the city’s population- live within half a mile of a San Francisco transit stop. However, within the city remain large “transit gaps” where, despite the majority of the city being transit-dense, certain neighborhoods are underserved and inadequate compared to similar neighborhoods nationwide. Access to reliable transit through either public or private means can also impact economic opportunities such as housing, jobs, and education. Without a form of reliable transportation and as more jobs continue to move to automobile-dependent locations, many people spend multiple hours a day to get to their job site.",
    para3: "To further understand the differences between transit service and its effects on economic opportunities, we will be looking at four contrasting neighborhoods in San Francisco: the Sunset District, the Bayview District, the Richmond District, and the Excelsior & Crocker-Amazon.",
    footer: 'Sources',
    chapters: [
        {
            id: 'all_routes',
            title: 'Transit Routes in San Francisco',
            // image: './path/to/image/source.png',
            description: 'The San Francisco Municipal Transit Agency operates a dense network of over 50 routes that serves hundreds of thousands of passengers every weekday. These include buses, light rail, streetcar, and cable car lines. While nearly everywhere in the city is served by the system, there are significant differences in the quality of service that is delivered. This projects aims to understand these differences.',
            location: {
                center: [-122.46293, 37.75679],
                zoom: 12,
                pitch: 60,
                bearing: 0,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            speed: 0.2,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-1',
            title: 'Sunset Neighborhood',
            image: 'CRP Pictures/SUNSET.jpg',
            description: 'Sunset District is the largest neighborhood in San Francisco with an area of approximately 6 square miles and a population of around 85,000. It is split up into three sub-neighborhoods: Inner Sunset, which is full of multicultural businesses and the 12th wealthiest neighborhood of SF; Central Sunset, primarily residential; and Outer Sunset which borders Ocean Beach. Sunset District is serviced by the Muni system with rapid buses and metro rails that connect the neighborhood to the city and across the neighborhood. Along with that, as there have been complaints about connecting Outer Sunset better, the SFMTA (San Francisco Municipal Transportation Agency) has various projects in the works to improve aspects such as improving the Great Highway.',
            alignment: 'left',
            location: {
                center: [-122.50441, 37.75594],
                zoom: 12.5,
                pitch: 30,
                bearing: 0,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-2',
            title: 'Bayview Neighborhood',
            image: 'CRP Pictures/BAYVIEW.jpg',
            description: "The neighborhood of Bayview District is located on the south end of SF. It has an increasing population of around 35,000 and is reported as one of SF's 'extreme poverty' neighborhoods. It is a place full of culture and history as a hotspot for Chinese immigrants in the 30s and is now viewed as the center of black culture. However, it is also the center of numerous redevelopment projects to tackle the issues of food desert, industrial pollution, disease and crime, gang, and drug activity. A stark lack of reliable public transportation in Bayview affects the local community and ridership. There are also projects spearheaded by the SFMTA such as the Community-Based Transportation Plan in 2020. The impact of Bayview’s isolating transportation and food deserts creates a health concern and issue that should be addressed. The median household income of Bayview is $66,618 while Sunset District's median income is $112,050, making it the 12th wealthiest neighborhood in San Francisco. These two neighborhoods provide an example of the contrasting effects public transportation has on communities, both positive and negative.",
            alignment: 'right',
            location: {
                center: [-122.36498, 37.72965],
                zoom: 13,
                pitch: 30,
                bearing: 0,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-3',
            title: "San Francisco's Downtown",
            image: 'CRP Pictures/downtown.webp',
            description: 'San Francisco’s central business district has extremely high employment density. This is where economic opportunities of all levels are concentrated in the city.',
            location: {
                center: [-122.40406, 37.78725],
                zoom: 13,
                pitch: 30,
                bearing: 0,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: 'Two Rail Routes',
            // image: './path/to/image/source.png',
            description: "The Sunset and Bayview both have light rail routes providing a connection to downtown. At a similar length, they provide an opportunity to compare transportation quality. The N Judah serves the Sunset and the T Third serves the Bayview",
            location: {
                center: [-122.48379, 37.75902],
                zoom: 10.3,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            mapAnimation: 'flyTo',
            // rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'N Judah',
            image: 'CRP Pictures/N JUDAH.jpeg',
            description: "The N Judah light rail route began operation in 1928 and has received consistent upgrades since. These have included constructing new tunnels, transit-only lanes, and transit signal priority. The route serves tens of thousands of riders per day.",
            location: {
                center: [-122.48379, 37.75902],
                zoom: 10.3,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'T Third',
            image: 'CRP Pictures/T THIRD.jpeg',
            description: "The T Third light rail route began operation in 2007 to bring transit service to the underserved community along the Third Street Corridor. Despite being newer, it has not received similar transit priority over private vehicles along its route. A tunnel was recently constructed, but ridership is still much lower than the N.",
            location: {
                center: [-122.48379, 37.75902],
                zoom: 10.4,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'Travel Time',
            // image: './path/to/image/source.png',
            description: "Between both routes, the N Judah is significantly faster reaching downtown, sometimes by over twenty minutes. This time saving is multiplied by hundreds of rides for frequent users, equating to hours of difference in transit time.",
            location: {
                center: [-122.38361, 37.78276],
                zoom: 12,
                pitch: 47.5,
                bearing: 178,
                speed: .5
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: 'Reliability',
            // image: './path/to/image/source.png',
            description: "Comparing travel time consistency, the N Judah also has less variability in travel times.",
            location: {
                center: [-122.38361, 37.78276],
                zoom: 12,
                pitch: 47.5,
                bearing: 178,
                speed: .5
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },

        // You can add a normal slide in the middle of the drive slides to take a break
        // {
        //     id: 'slide-4',
        //     title: 'Paused area Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: 'drive-slide-5',
            title: 'Community Feedback',
            // image: './path/to/image/source.png',
            description: "Plagued by reliability issues and slow travel times, the T Third route provides limited connectivity to the Bayview. Based on feedback from the community, San Francisco’s transit agency recently re-introduced a bus route that follows a similar route to the T.",
            location: {
                center: [-122.38361, 37.78276],
                zoom: 12,
                pitch: 47.5,
                bearing: 178,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'Outcome',
            // image: './path/to/image/source.png',
            description: "While both the Sunset and Bayview have a rail connection to Downtown San Francisco, the Sunset’s N Judah provides reasonably efficient transportation to the city’s job center while the Bayview’s T Third continues to isolate the community from opportunities.",
            location: {
                center: [-122.38361, 37.78276],
                zoom: 12,
                pitch: 47.5,
                bearing: 178,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            title: 'Richmond District',
            image: 'CRP Pictures/RICHMOND.jpg',
            description: "Located in the northwest corner of the city, the Richmond district is divided into two areas: Inner Richmond and Outer Richmond. Inner Richmond is characterized by more affluent features such as upscale shops and dining and Outer Richmond has a more varied economic profile. There is a strong Chinese population along with Russian influence from its history of immigrants and roots. The Richmond district is an approximate 25-minute drive from downtown San Francisco and is well served by the SFMTA with bus lines connecting residents to various parts of the city and the neighborhood is generally bike-friendly and walkable.",
            location: {
                center: [-122.50971, 37.77787],
                zoom: 12.1,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            title: 'Excelsior and Crocker-Amazon',
            image: 'CRP Pictures/CROCKER.jpeg',
            description: 'Excelsior District is located southeast of the city and The district is split up into smaller sub-neighborhoods: Mission Terrace, Crocker Amazon, Cayuga, and the Outer Mission neighborhood. There is a strong Asian and Asian American community presence in Excelsior district and today it is one of the most ethnically diverse districts in San Francisco. Crocker-Amazon is located at the south end of Excelsior district, is slightly more affluent, and contains mostly single-family homes. It is well-served by public transportation with MUNI routes and Bart stations along with being near Interstate 280.',
            location: {
                center: [-122.42593, 37.71301],
                zoom: 12.7,
                pitch: 3,
                bearing: 0,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'right'
        },
        {
            id: 'busdrive-slide-0',
            title: 'Two Bus Routes',
            // image: './path/to/image/source.png',
            description: "The Richmond and Excelsior/Crocker-Amazon both have a frequent bus connection to downtown San Francisco. The Richmond is connected by the 38 Geary Line and the Excelsior/Crocker-Amazon is served by the 14 Mission Line. Both routes are a similar length.",
            location: {
                center: [-122.48379, 37.75902],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'busdrive-slide-1',
            title: '38 Geary',
            image: 'CRP Pictures/38 GEARY.jpeg',
            description: "The 38 Geary Route began operation in 1912 as a streetcar line with a different name. It was converted to a bus route in 1956. In recent years, it has received transit-only lanes and signal priority. Before COVID-19, it had the highest ridership out of bus routes in the western United States.",
            location: {
                center: [-122.48379, 37.75902],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'busdrive-slide-2',
            title: '14 Mission',
            image: 'CRP Pictures/14 MISSION.jpg',
            description: "The 14 Mission Route began operation in 1894 as a streetcar line with a different name. It was converted to a trolley bus route in 1952. In recent years, it has received some transit priority but significant community pushback has limited the transit infrastructure installed.",
            location: {
                center: [-122.48379, 37.75902],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'busdrive-slide-3',
            title: 'Travel Time',
            // image: './path/to/image/source.png',
            description: "Comparing the routes, the 14 Mission is slightly slower than the 38 Geary. This difference is less significant compared to the rail routes, however.",
            location: {
                center: [-122.48379, 37.75902],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'left'
        },
        {
            id: 'busdrive-slide-4',
            title: 'Reliability',
            // image: './path/to/image/source.png',
            description: "The 14 Mission is also less reliable, having more variability between the 20th and 80th percentiles of travel times. ",
            location: {
                center: [-122.41598, 37.79228],
                zoom: 12.6,
                pitch: 46,
                bearing: -107.64,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'right'
        },
        {
            id: 'busdrive-slide-5',
            title: 'Community Support',
            // image: './path/to/image/source.png',
            description: "Faced with buisness community pushback and political opposition, both the 14 Mission and 38 Geary only have transit lanes on part of their routes. In particular, for much of the 14 route along Mission St, a bus-only lane would fit with existing traffic but has not been implemented. On the 38 Geary, plans for a bus rapid transit buildout were cut back to curb-side lanes.",
            location: {
                center: [-122.41598, 37.79228],
                zoom: 12.6,
                pitch: 46,
                bearing: -107.64,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'right'
        },
        {
            id: 'busdrive-slide-6',
            title: 'Outcome',
            // image: './path/to/image/source.png',
            description: "While both the Richmond and Excelsior/Crocker-Amazon neighborhoods have a bus connection to San Francisco’s Downtown, the 38 and 14 routes do not deliver the same quality of service. The 14 Mission is less reliable, pushing would-be riders onto costly regional rail to reach their destination.",
            location: {
                center: [-122.41598, 37.79228],
                zoom: 12.6,
                pitch: 46,
                bearing: -107.64,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'right'
        },
        {
            id: 'info-slide-1',
            title: "Neighborhood Statistics: Poverty",
            image: 'CRP Pictures/poverty.png',
            description: "The Ratio of Income to Poverty Level is a calculation of the total family income divided by the poverty threshold. A ratio less than 1 signifies that the income falls below the poverty level, indicating financial hardship. When the ratio equals 1, it signifies parity between income and the poverty level, while a ratio greater than 1 suggests that the income surpasses the poverty threshold, reflecting a relatively more favorable economic situation. Analyzing specific districts in this context reveals notable disparities. For instance, the Bayview District exhibits the highest percentage of residents with a ratio below 1, highlighting a prevalence of economic disadvantage. In contrast, the Sunset District has the highest percentage of residents with a ratio above 1, indicating a higher economic standing. This pattern extends to a comparison between the Richmond District and Excelsior & Crocker-Amazon, with the former having a lower proportion of individuals with a ratio under 1, illustrating a comparatively lower prevalence of economic hardship.",
            location: {
                center: [-122.55892, 37.75359],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'center'
        },
        {
            id: 'info-slide-2',
            title: "Neighborhood Statistics: Race",
            image: 'CRP Pictures/race.png',
            description: "Examining racial differences in San Francisco's neighborhoods provides crucial context for understanding economic disparities. Historically, marginalized communities, particularly Black Americans, have faced economic challenges, a trend evident in the four focal neighborhoods. The Bayview District, characterized by lower affluence, demonstrates this pattern, with 42.44% of its population identifying as Black and 26.43% belonging to another race (excluding Asian and White). In stark contrast, the Sunset District has only 1.6% Black residents. A different dynamic unfolds in the comparison between the Richmond District and Excelsior & Crocker-Amazon. While both neighborhoods have a similar low percentage of Black residents (slightly above 2%), the Richmond District exhibits less diversity, with 46.05% White residents, compared to Excelsior & Crocker-Amazon's 20.9%. This interplay of racial demographics, coupled with variations in poverty levels, paints a nuanced picture of San Francisco's socio-economic landscape, highlighting a division between predominantly White and affluent areas and those with a historical and persisting experience of marginalization.",
            location: {
                center: [-122.55892, 37.75359],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'center'
        },
        {
            id: 'info-slide-3',
            title: "Neighborhood Statistics: Income",
            image: 'CRP Pictures/income.png',
            description: "The manifestation of economic disparities in San Francisco is succinctly captured in the Average Household Income by Race, revealing distinct variations in income levels based on racial demographics. Across all neighborhoods, White households consistently earn a significantly higher income, surpassing the $100,000 mark annually. Asian households closely follow, maintaining a comparatively higher income level. In stark contrast, Black households in all neighborhoods experience markedly lower incomes, with the Sunset District exhibiting the lowest at $12,470 per year, a stark contrast to the hundreds of thousands earned by White households. This stark divide in income levels by race underscores the systemic economic challenges faced by Black households, contributing to the broader narrative of socio-economic inequality within the city.",
            location: {
                center: [-122.55892, 37.75359],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'center'
        },
        {
            id: 'info-slide-4',
            title: "Neighborhood Statistics: Property Value",
            image: 'CRP Pictures/value.png',
            description: "Examining House Value for All Owner-Occupied Housing Units offers a nuanced perspective on economic differences, particularly in terms of wealth retention, a critical factor for generational upward mobility. Consistent with previous data, the Bayview District and Excelsior & Crocker-Amazon stand out with the highest percentages of homes valued under 1 million dollars, reflecting a distinct economic landscape. It's important to note that San Francisco's housing market sustains generally high home values compared to other American cities, hence the categorization of 'less valuable' homes as those under 1 million. In the Bayview District, nearly 75% of homes fall into this category, indicating a significant prevalence of more affordable housing. A majority exists in Excelsior & Crocker-Amazon as well, with just over 50% of homes valued under 1 million. Conversely, in the more affluent neighborhoods of the Sunset District and the Richmond District, over 75% of homes are valued at over a million dollars, underlining a stark contrast in the economic capacity of residents to accumulate wealth through property ownership. This disparity in home values reinforces the broader economic divide within San Francisco, with implications for intergenerational wealth and mobility.",
            location: {
                center: [-122.55892, 37.75359],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'center'
        },
        {
            id: 'info-slide-5',
            title: "Neighborhood Statistics: Mode to Work",
            image: 'CRP Pictures/work.png',
            description: "The examination of disparities in access to reliable transportation underscores the intersectionality of social and economic challenges within San Francisco's neighborhoods. The neighborhoods with the most pronounced economic and social disadvantages often coincide with lower-quality public transportation options. Analyzing the percentage of residents relying on transit for their commute sheds light on the importance of transit systems for those dependent on them for their livelihoods. A comparison between the Bayview District and the Sunset District reveals a similar reliance on transit, both hovering around 32%. However, the quality of transit systems in these areas is not equivalent. Similarly, the Richmond District and Excelsior & Crocker-Amazon demonstrate a minimal difference in transit usage, approximately 34%. Nevertheless, Excelsior & Crocker-Amazon exhibits a significantly higher percentage of vehicle commutes, underscoring the need for improved and more reliable transportation options in this underserved neighborhood. This observation underscores the vital role that quality transportation plays in addressing socio-economic disparities, as it directly impacts the daily lives and economic opportunities of residents in these communities.",
            location: {
                center: [-122.55892, 37.75359],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'center'
        },
        {
            id: 'info-slide-8',
            title: 'Minutes Add Up',
            // image: './path/to/image/source.png',
            description: "Although differences in travel time can seem small, small amounts of time add up over many rides. For example, just 5 minutes of additional commute time in each direction on weekdays results in over 8 hours of extra time spent in transit over the course of a year. This is time that could be spent with family or making money, and the burden falls disproportionately on marginalized communities.",
            location: {
                center: [-122.55892, 37.75359],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'center',
        },
        {
            id: 'info-slide-9',
            title: "Reliability Isn't Equal",
            // image: './path/to/image/source.png',
            description: "Travel reliability is also a critical aspect of transit. While some jobs (such as those in San Francisco’s technology sector) offer flexibility and accommodate delays, service jobs may require strict adherence to schedules and have punishments for arriving late. Lower-income residents are more likely to be in service jobs, yet experience lower transit reliability. Students may also face repercussions from transportation delays, compounding already existing educational gaps between communities in San Francisco.",
            location: {
                center: [-122.55892, 37.75359],
                zoom: 10.5,
                pitch: 0,
                bearing: 0,
                speed: .5
            },
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'center'
        },
        {
            id: 'transit-lanes',
            title: "Looking Forward: San Francisco's Current Transit-Only Lanes",
            image: 'CRP Pictures/bus_lane.jpeg',
            description: 'San Francisco has recently invested heavily in transit-only lanes, a proven solution to decrease travel time and increase reliability.',
            location: {
                center: [-122.40879, 37.75922],
                zoom: 11.65,
                pitch: 33.56,
                bearing: -10.0,
                speed: .5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'right'
        },
        {
            id: 'transit-projects',
            title: "Projects Currently in Progress by the San Francisco Municipal Transit Agency",
            // image: './path/to/image/source.png',
            description: "San Francisco's transit agency is currently engaged in projects on streets across the city. These projects provide a great starting point for where transit-priority infrastructure can be implemented.",
            location: {
                center: [-122.49522, 37.76322],
                zoom: 11.4,
                pitch: 39.06,
                bearing: -10.40,
                speed: .3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: [],
            alignment: 'left'
        }

    ]
};
